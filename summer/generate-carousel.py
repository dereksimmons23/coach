#!/usr/bin/env python3
"""Generate Instagram carousel images for Coach D Summer Training."""

from PIL import Image, ImageDraw, ImageFont
import os

OUT = os.path.dirname(os.path.abspath(__file__)) + "/carousel"
PHOTOS = os.path.dirname(os.path.abspath(__file__)) + "/photos"
os.makedirs(OUT, exist_ok=True)

S = 1080
BG = (0, 13, 26)
GOLD = (212, 168, 75)
WHITE = (232, 232, 232)
MUTED = (136, 153, 166)
CARD_BG = (10, 25, 41)
BORDER = (13, 40, 64)

def font(size, bold=False):
    weight = "Bold" if bold else "Regular"
    try:
        return ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", size, index=1 if bold else 0)
    except:
        return ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", size)

def mono(size):
    try:
        return ImageFont.truetype("/System/Library/Fonts/Courier New.ttf", size)
    except:
        return ImageFont.truetype("/System/Library/Fonts/Menlo.ttc", size)

def draw_wordmark(draw, y, center=S//2):
    f = mono(22)
    text = "COACH D"
    bbox = draw.textbbox((0, 0), text, font=f)
    w = bbox[2] - bbox[0]
    draw.text((center - w//2, y), text, fill=GOLD, font=f)

def draw_counter(draw, n):
    f = mono(18)
    draw.text((S - 80, 20), f"{n}/5", fill=(255, 255, 255, 100), font=f)

def gradient_overlay(img, start_y, alpha_start=0, alpha_end=220):
    """Add gradient from transparent to dark over bottom portion of image."""
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    h = img.size[1]
    for y in range(start_y, h):
        progress = (y - start_y) / (h - start_y)
        alpha = int(alpha_start + (alpha_end - alpha_start) * progress)
        draw.line([(0, y), (img.size[0], y)], fill=(0, 0, 0, alpha))
    return Image.alpha_composite(img.convert("RGBA"), overlay)


# ── SLIDE 1: Hero photo with text overlay ──
img = Image.new("RGB", (S, S), BG)
photo = Image.open(f"{PHOTOS}/derek-coach-aau-sizzle-17u.png")
# Scale photo to fill width
pw, ph = photo.size
scale = S / pw
new_h = int(ph * scale)
photo = photo.resize((S, new_h), Image.LANCZOS)
img.paste(photo, (0, 0))

# Convert to RGBA for gradient
img_rgba = img.convert("RGBA")
img_rgba = gradient_overlay(img_rgba, new_h // 2, 0, 240)

draw = ImageDraw.Draw(img_rgba)

# Text at bottom
y_base = S - 220
f_title = font(72, bold=True)
f_sub = font(26)
f_wm = mono(20)

draw.text((60, y_base - 50), "COACH D", fill=GOLD, font=f_wm)
draw.text((60, y_base), "Summer Training", fill=WHITE, font=f_title)
draw.text((60, y_base + 85), "May – August 2026  |  Woodbury, MN", fill=MUTED, font=f_sub)

img_rgba.convert("RGB").save(f"{OUT}/slide-1-hero.png", quality=95)
print("Slide 1 done")


# ── SLIDE 2: The Offer ──
img = Image.new("RGB", (S, S), BG)
draw = ImageDraw.Draw(img)

draw_wordmark(draw, 120)

# Three big numbers
items = [("$100", "per session"), ("60 min", "1-on-1"), ("Flexible", "scheduling")]
f_big = font(80, bold=True)
f_label = font(20)

start_y = 320
for i, (val, label) in enumerate(items):
    cx = S // 2
    cy = start_y + i * 180

    bbox = draw.textbbox((0, 0), val, font=f_big)
    vw = bbox[2] - bbox[0]
    draw.text((cx - vw//2, cy), val, fill=GOLD, font=f_big)

    bbox2 = draw.textbbox((0, 0), label.upper(), font=f_label)
    lw = bbox2[2] - bbox2[0]
    draw.text((cx - lw//2, cy + 90), label.upper(), fill=MUTED, font=f_label)

# Bottom note
f_note = font(22)
note = "Packages available. We work around your summer."
bbox = draw.textbbox((0, 0), note, font=f_note)
nw = bbox[2] - bbox[0]
draw.text((S//2 - nw//2, S - 120), note, fill=MUTED, font=f_note)

img.save(f"{OUT}/slide-2-offer.png", quality=95)
print("Slide 2 done")


# ── SLIDE 3: Photo grid (4 photos) ──
img = Image.new("RGB", (S, S), BG)

photos_grid = [
    (f"{PHOTOS}/derek-coach-sizzle-champs.png", "Tournament champs"),
    (f"{PHOTOS}/derek-coach-teegan-champs.png", "Back-to-back"),
    (f"{PHOTOS}/jackson-cutting-down-the-nets.png", "Conference champs"),
    (f"{PHOTOS}/derek-coach-state-second.png", "State — 2nd place"),
]

gap = 6
half = (S - gap) // 2

for i, (path, _) in enumerate(photos_grid):
    p = Image.open(path)
    p = p.resize((half, half), Image.LANCZOS)
    x = (i % 2) * (half + gap)
    y = (i // 2) * (half + gap)
    img.paste(p, (x, y))

# Light overlay for breathing room
img_rgba = img.convert("RGBA")
overlay = Image.new("RGBA", (S, S), (0, 13, 26, 60))
img_rgba = Image.alpha_composite(img_rgba, overlay)

img_rgba.convert("RGB").save(f"{OUT}/slide-3-proof-photos.png", quality=95)
print("Slide 3 done")


# ── SLIDE 4: Stats + Prep Hoops quote ──
img = Image.new("RGB", (S, S), BG)
draw = ImageDraw.Draw(img)

draw_wordmark(draw, 100)

stats = [("15+", "years coaching"), ("17-2", "HS record"), ("200+", "families"), ("D1–Juco", "players developed")]
f_stat = font(60, bold=True)
f_stat_label = font(18)

grid_y = 240
for i, (val, label) in enumerate(stats):
    col = i % 2
    row = i // 2
    cx = 270 + col * 540
    cy = grid_y + row * 200

    bbox = draw.textbbox((0, 0), val, font=f_stat)
    vw = bbox[2] - bbox[0]
    draw.text((cx - vw//2, cy), val, fill=GOLD, font=f_stat)

    bbox2 = draw.textbbox((0, 0), label.upper(), font=f_stat_label)
    lw = bbox2[2] - bbox2[0]
    draw.text((cx - lw//2, cy + 70), label.upper(), fill=MUTED, font=f_stat_label)

# Divider
draw.line([(100, 700), (S - 100, 700)], fill=BORDER, width=2)

# Quote
f_quote = font(28)
f_source = font(18)
quote = '"One of the better shooters on the\nPrep Hoops circuit"'
bbox = draw.textbbox((0, 0), quote, font=f_quote)
qw = bbox[2] - bbox[0]
draw.text((S//2 - qw//2, 740), quote, fill=WHITE, font=f_quote)

source = "— Prep Hoops scouting report"
bbox3 = draw.textbbox((0, 0), source, font=f_source)
sw = bbox3[2] - bbox3[0]
draw.text((S//2 - sw//2, 840), source, fill=MUTED, font=f_source)

sub = "Recruiting asset by Coach D"
bbox4 = draw.textbbox((0, 0), sub, font=f_source)
subw = bbox4[2] - bbox4[0]
draw.text((S//2 - subw//2, 870), sub, fill=GOLD, font=f_source)

img.save(f"{OUT}/slide-4-stats.png", quality=95)
print("Slide 4 done")


# ── SLIDE 5: CTA ──
img = Image.new("RGB", (S, S), BG)
draw = ImageDraw.Draw(img)

draw_wordmark(draw, 200)

f_cta = font(56, bold=True)
f_info = font(24)

# Main line
lines = ["Let's get to work", "this summer."]
y = 340
for line in lines:
    bbox = draw.textbbox((0, 0), line, font=f_cta)
    lw = bbox[2] - bbox[0]
    draw.text((S//2 - lw//2, y), line, fill=WHITE, font=f_cta)
    y += 70

# Contact info
y = 580
infos = [
    ("Email: simmons.derek@gmail.com", MUTED),
    ("Text or DM to get started", MUTED),
    ("Woodbury, MN", MUTED),
]
for text, color in infos:
    bbox = draw.textbbox((0, 0), text, font=f_info)
    tw = bbox[2] - bbox[0]
    draw.text((S//2 - tw//2, y), text, fill=color, font=f_info)
    y += 45

# URL box
f_url = mono(24)
url = "coach.claudewill.io/summer"
bbox = draw.textbbox((0, 0), url, font=f_url)
uw = bbox[2] - bbox[0]
uh = bbox[3] - bbox[1]
box_x = S//2 - uw//2 - 30
box_y = 780
draw.rounded_rectangle(
    [(box_x, box_y), (box_x + uw + 60, box_y + uh + 30)],
    radius=10, outline=GOLD, width=2
)
draw.text((S//2 - uw//2, box_y + 12), url, fill=GOLD, font=f_url)

# Instagram handle
f_ig = font(20)
ig = "@lo10km"
bbox = draw.textbbox((0, 0), ig, font=f_ig)
igw = bbox[2] - bbox[0]
draw.text((S//2 - igw//2, S - 100), ig, fill=GOLD, font=f_ig)

img.save(f"{OUT}/slide-5-cta.png", quality=95)
print("Slide 5 done")

print(f"\nAll 5 slides saved to {OUT}/")
