/** Root-relative public file, prefixed with `/portfolio` on GitHub Pages builds. */
export function publicAsset(src: string): string {
  if (!src.startsWith("/")) return src;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
}
