/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // WordPress media (case studies)
      { protocol: 'https', hostname: 'thecurry.club', pathname: '/wp-content/uploads/**' },
      { protocol: 'https', hostname: 'www.thecurry.club', pathname: '/wp-content/uploads/**' },
      // Static images (elsewhere on site)
      { protocol: 'https', hostname: 'thecurry.club', pathname: '/images/**' },
      { protocol: 'https', hostname: 'www.thecurry.club', pathname: '/images/**' },
      // Jetpack / WP.com CDN (if your WP optimizes images)
      { protocol: 'https', hostname: 'i0.wp.com', pathname: '/thecurry.club/**' },
      { protocol: 'https', hostname: 'i1.wp.com', pathname: '/thecurry.club/**' },
      { protocol: 'https', hostname: 'i2.wp.com', pathname: '/thecurry.club/**' }
    ]
  }
};

export default nextConfig;
