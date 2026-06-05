import sharp from "sharp";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
const svg = readFileSync(join(publicDir, "og-image.svg"));

await sharp(svg).resize(1200, 630).png().toFile(join(publicDir, "og-image.png"));
await sharp(svg).resize(512, 512, { fit: "cover", position: "centre" }).png().toFile(join(publicDir, "apple-touch-icon.png"));
await sharp(readFileSync(join(publicDir, "favicon.svg"))).resize(32, 32).png().toFile(join(publicDir, "favicon-32.png"));

console.log("Generated og-image.png, apple-touch-icon.png, favicon-32.png");
