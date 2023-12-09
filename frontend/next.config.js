/** @type {import('next').NextConfig} */
// const API_HOST = 'http://localhost:5001'

const nextConfig = {
  output: 'export', // use for building statics
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
      '/tentang/index': {page: '/tentang'},
      '/profil/index': {page: '/profil'},
    }
  },
  // async rewrites() {
	// 	return [
	// 		{
	// 			source: '/api/:path*',
	// 			destination: `${API_HOST}/api/:path*`,
	// 		},
	// 	]
	// },
}

module.exports = nextConfig
