/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // use for building statics
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
      '/fasilitas/index': { page: '/fasilitas' },
      '/kontak/index': { page: '/kontak' },
      '/login/index': {page: '/login'},
      '/tentang/index': {page: '/tentang'}
    }
  },
}

module.exports = nextConfig
