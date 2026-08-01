import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public/assets/images");

const TARGETS = [
  { file: "abdallahatguiri.jpg", maxWidth: 800, quality: 82 },
  { dir: "projects", maxWidth: 1200, quality: 80 },
];

async function compressFile(filePath, maxWidth, quality) {
  const before = (await stat(filePath)).size;
  const ext = path.extname(filePath).toLowerCase();
  const pipeline = sharp(filePath).rotate().resize({ width: maxWidth, withoutEnlargement: true });

  if (ext === ".jpg" || ext === ".jpeg") {
    await pipeline.jpeg({ quality, mozjpeg: true }).toFile(`${filePath}.tmp`);
  } else if (ext === ".png") {
    await pipeline.png({ quality, compressionLevel: 9 }).toFile(`${filePath}.tmp`);
  } else {
    return;
  }

  const { rename, unlink } = await import("node:fs/promises");
  await unlink(filePath);
  await rename(`${filePath}.tmp`, filePath);
  const after = (await stat(filePath)).size;
  console.log(`${filePath}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`);
}

for (const target of TARGETS) {
  if (target.file) {
    await compressFile(path.join(ROOT, target.file), target.maxWidth, target.quality);
  }
  if (target.dir) {
    const dirPath = path.join(ROOT, target.dir);
    const files = await readdir(dirPath);
    for (const file of files) {
      if (/\.(png|jpe?g)$/i.test(file)) {
        await compressFile(path.join(dirPath, file), target.maxWidth, target.quality);
      }
    }
  }
}
