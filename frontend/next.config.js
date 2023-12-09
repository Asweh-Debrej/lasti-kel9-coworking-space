/** @type {import('next').NextConfig} */
const API_HOST = 'http://localhost:5001'

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/random',
      },
    ],
  },
  async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${API_HOST}/api/:path*`,
			},
		]
	},
}

module.exports = nextConfig
