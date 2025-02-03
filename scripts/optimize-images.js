const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const OPTIMIZED_DIR = path.join(process.cwd(), 'public', 'optimized');
const FORMATS = ['jpg', 'jpeg', 'png', 'webp'];

async function ensureDirectoryExists(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase().slice(1);
  if (!FORMATS.includes(ext)) return;

  // Skip files that are already in the optimized directory
  if (filePath.includes('optimized')) return;

  // Create relative path structure in optimized directory
  const relativePath = path.relative(PUBLIC_DIR, filePath);
  const optimizedFilePath = path.join(OPTIMIZED_DIR, relativePath);
  const optimizedDir = path.dirname(optimizedFilePath);
  
  try {
    await ensureDirectoryExists(optimizedDir);

    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Convert to WebP with optimal settings
    const webpPath = optimizedFilePath.replace(/\.[^.]+$/, '.webp');
    await image
      .webp({ quality: 80, effort: 6 })
      .toFile(webpPath);

    // Create responsive versions
    const sizes = [640, 1080, 1920];
    for (const width of sizes) {
      if (metadata.width > width) {
        const resizedPath = optimizedFilePath.replace(/\.([^.]+)$/, `-${width}.$1`);
        await sharp(filePath)
          .resize(width, null, { withoutEnlargement: true })
          .webp({ quality: 80, effort: 6 })
          .toFile(resizedPath.replace(/\.[^.]+$/, '.webp'));
      }
    }

    console.log(`✓ Optimized: ${path.basename(filePath)}`);
  } catch (error) {
    console.error(`❌ Failed to optimize ${path.basename(filePath)}:`, error.message);
  }
}

async function walkDir(dir) {
  const files = await fs.readdir(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);
    
    if (stat.isDirectory() && file !== 'optimized') {
      await walkDir(filePath);
    } else if (!stat.isDirectory()) {
      await optimizeImage(filePath);
    }
  }
}

async function main() {
  console.log('🎨 Starting image optimization...');
  try {
    await ensureDirectoryExists(OPTIMIZED_DIR);
    await walkDir(PUBLIC_DIR);
    console.log('✨ Image optimization complete!');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

main();
