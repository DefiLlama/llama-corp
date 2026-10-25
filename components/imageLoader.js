// Static export has no image optimization server, so serve images as-is
export default function imageLoader({ src }) {
  return src;
}
