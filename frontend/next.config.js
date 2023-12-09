/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/fasilitas': { page: '/fasilitas' },
      '/kontak': { page: '/kontak' },
      '/login': {page: '/login'},
      '/tentang': {page: '/tentang'}
    }
  },
}

module.exports = nextConfig
