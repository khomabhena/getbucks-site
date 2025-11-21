#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script uses sharp to optimize images in the public folder.
 * Install sharp first: npm install --save-dev sharp
 * 
 * Usage: npm run optimize-images
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '../public');

// Image directories to optimize
const imageDirs = [
  'landing-page',
  'board-members',
  'accounts',
  'about',
  'services',
  'investor',
  'social-icons'
];

// Supported image formats
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

// Quality settings
const quality = {
  jpeg: 85,
  png: 80,
  webp: 85
};

async function optimizeImage(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const basename = path.basename(filePath, ext);
    const dir = path.dirname(filePath);
    
    // Skip if already optimized (has -optimized suffix)
    if (basename.includes('-optimized')) {
      console.log(`⏭️  Skipping already optimized: ${filePath}`);
      return;
    }

    const stats = fs.statSync(filePath);
    const originalSize = stats.size;
    
    console.log(`🖼️  Optimizing: ${filePath} (${(originalSize / 1024).toFixed(2)} KB)`);
    
    // Create temporary output path
    const tempPath = path.join(dir, `${basename}.tmp${ext}`);
    let image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Resize if image is too large (max 2000px on longest side)
    if (metadata.width > 2000 || metadata.height > 2000) {
      image = image.resize(2000, 2000, {
        fit: 'inside',
        withoutEnlargement: true
      });
      console.log(`   📐 Resizing from ${metadata.width}x${metadata.height}`);
    }
    
    // Optimize based on format
    if (ext === '.png') {
      await image
        .png({ quality: quality.png, compressionLevel: 9 })
        .toFile(tempPath);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await image
        .jpeg({ quality: quality.jpeg, mozjpeg: true })
        .toFile(tempPath);
    } else {
      // For other formats, just copy
      console.log(`   ⚠️  Format ${ext} not optimized, skipping`);
      return;
    }
    
    // Replace original with optimized version
    fs.renameSync(tempPath, filePath);
    
    const newStats = fs.statSync(filePath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`   ✅ Optimized: ${(newSize / 1024).toFixed(2)} KB (${savings}% reduction)`);
  } catch (error) {
    console.error(`   ❌ Error optimizing ${filePath}:`, error.message);
    // Clean up temp file if it exists
    const tempPath = path.join(path.dirname(filePath), `${path.basename(filePath, path.extname(filePath))}.tmp${path.extname(filePath)}`);
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

async function processDirectory(dirPath) {
  try {
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        await processDirectory(filePath);
      } else if (stat.isFile()) {
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
          await optimizeImage(filePath);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  // Check if sharp is installed
  try {
    await import('sharp');
  } catch (error) {
    console.error('❌ Error: sharp is not installed.');
    console.log('\n📦 Please install sharp first:');
    console.log('   npm install --save-dev sharp\n');
    process.exit(1);
  }
  
  // Process root public directory images
  const rootFiles = fs.readdirSync(publicDir);
  for (const file of rootFiles) {
    const filePath = path.join(publicDir, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        await optimizeImage(filePath);
      }
    }
  }
  
  // Process image directories
  for (const dir of imageDirs) {
    const dirPath = path.join(publicDir, dir);
    if (fs.existsSync(dirPath)) {
      console.log(`\n📁 Processing directory: ${dir}/`);
      await processDirectory(dirPath);
    }
  }
  
  console.log('\n✨ Image optimization complete!');
}

main().catch(console.error);

