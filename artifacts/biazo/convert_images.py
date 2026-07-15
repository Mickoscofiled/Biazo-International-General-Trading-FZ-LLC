from PIL import Image
import os

src = r'C:\Users\mikia\.gemini\antigravity\scratch\Web-Design-Studio\artifacts\biazo\src\assets\images'
files = ['hero.png', 'dubai-office.png', 'mining.png', 'steel-pipes.png']

for f in files:
    inp = os.path.join(src, f)
    out = os.path.join(src, f.replace('.png', '.webp'))
    if not os.path.exists(out):
        img = Image.open(inp)
        if img.width > 1920:
            ratio = 1920 / img.width
            img = img.resize((1920, int(img.height * ratio)), Image.LANCZOS)
        img.save(out, 'webp', quality=82, method=6)
        orig = os.path.getsize(inp)
        new = os.path.getsize(out)
        pct = 100 * (orig - new) // orig
        print(f'{f}: {orig//1024}KB -> {new//1024}KB ({pct}% saved)')
    else:
        out_size = os.path.getsize(out)
        print(f'{f.replace(".png", ".webp")} already exists ({out_size//1024}KB)')

print('Done!')
