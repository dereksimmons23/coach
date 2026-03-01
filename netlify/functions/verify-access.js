// Verify access code for protected content (Main Court)
// Password stored in Netlify env var, never shipped to browser
const crypto = require('crypto');

const ALLOWED_ORIGINS = [
  'https://coach.claudewill.io',
  'https://coachd.netlify.app',
  'http://localhost:8000',
  'http://localhost:3000'
];

function getCorsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };
}

exports.handler = async (event) => {
  const origin = event.headers.origin || event.headers.Origin || '';
  const headers = getCorsHeaders(origin);

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, error: 'Method not allowed' })
    };
  }

  try {
    const { code } = JSON.parse(event.body || '{}');

    if (!code) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: 'No code provided' })
      };
    }

    const accessCode = process.env.MAIN_COURT_ACCESS_CODE;

    if (!accessCode) {
      console.error('MAIN_COURT_ACCESS_CODE env var not set');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ success: false, error: 'Server configuration error' })
      };
    }

    // Constant-time comparison to prevent timing attacks
    const codeBuffer = Buffer.from(String(code));
    const accessBuffer = Buffer.from(String(accessCode));
    const success = codeBuffer.length === accessBuffer.length &&
      crypto.timingSafeEqual(codeBuffer, accessBuffer);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success })
    };
  } catch (error) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ success: false, error: 'Invalid request' })
    };
  }
};
