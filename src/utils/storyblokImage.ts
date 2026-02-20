// Utility to generate optimized Storyblok image URLs
// Usage: getOptimizedImageUrl(url, { width, quality, format })

export function getOptimizedImageUrl(
  url: string,
  opts?: { width?: number; quality?: number; format?: 'webp' | 'avif' | 'jpg' | 'png' }
): string {
  if (!url || !url.startsWith('https://a.storyblok.com/')) return url;
  const { width = 800, quality = 80, format = 'webp' } = opts || {};
  // Storyblok image service: /m/{width}x0/filters:quality({quality}):format({format})
  const parts = url.split('/');
  const filename = parts.pop();
  const base = parts.join('/');
  return `${base}/m/${width}x0/filters:quality(${quality}):format(${format})/${filename}`;
}
