# Image Optimization Guide

## Automatic Optimization (Recommended)

### Option 1: Using Sharp (Node.js)

1. **Install Sharp:**
   ```bash
   npm install --save-dev sharp
   ```

2. **Run the optimization script:**
   ```bash
   npm run optimize-images
   ```

This will automatically:
- Compress JPEG images (85% quality, mozjpeg)
- Compress PNG images (80% quality, level 9)
- Resize images larger than 2000px
- Preserve original files (overwrites them)

### Option 2: Using Vite Plugin (Build-time)

Add `vite-plugin-imagemin` for automatic optimization during build:

```bash
npm install --save-dev vite-plugin-imagemin
```

Then update `vite.config.js` to include the plugin.

## Manual Optimization Tools

### Online Tools (Free)
1. **TinyPNG** - https://tinypng.com/
   - Drag and drop images
   - Supports PNG and JPEG
   - Up to 20 images at once

2. **Squoosh** - https://squoosh.app/
   - Google's image compression tool
   - Compare before/after
   - Supports multiple formats including WebP

3. **ImageOptim** - https://imageoptim.com/
   - Desktop app for Mac
   - Batch processing

### Command Line Tools

1. **Sharp CLI:**
   ```bash
   npm install -g sharp-cli
   sharp -i input.png -o output.png --quality 80
   ```

2. **ImageMagick:**
   ```bash
   # Install ImageMagick first
   convert input.jpg -quality 85 -strip output.jpg
   ```

## Recommended Image Sizes

- **Hero images:** Max 1920px width, 80-85% quality
- **Content images:** Max 1200px width, 80-85% quality
- **Thumbnails:** Max 400px width, 75-80% quality
- **Icons:** Max 200px width, PNG with transparency

## WebP Format

Consider converting images to WebP for better compression:
- 25-35% smaller than JPEG
- Better quality at same file size
- Supported by all modern browsers

You can use the Sharp script to convert to WebP:
```javascript
await sharp(input)
  .webp({ quality: 85 })
  .toFile(output)
```

## Current Image Status

Your images are located in:
- `public/landing-page/` - Main content images
- `public/board-members/` - Profile photos
- `public/accounts/` - Account type images
- `public/about/` - About page icons
- `public/services/` - Service icons
- `public/social-icons/` - Social media icons

## Performance Impact

Optimizing images can significantly improve:
- **First Contentful Paint (FCP)** - Currently 8.8s (target: <1.8s)
- **Largest Contentful Paint (LCP)** - Currently 16.3s (target: <2.5s)
- **Page Load Time** - Faster overall loading
- **Mobile Data Usage** - Reduced bandwidth

## Next Steps

1. Run the optimization script: `npm run optimize-images`
2. Test the site to ensure images still look good
3. Rebuild and redeploy
4. Check Lighthouse score again

