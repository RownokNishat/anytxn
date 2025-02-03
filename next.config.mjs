/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io', // Allow images from Sanity's CDN
                port: '',
                pathname: '/**', // Allow all paths under this hostname
            },
            {
                protocol: 'https',
                hostname: 'assets.example.com', // Your existing configuration
                port: '',
                pathname: '/account123/**',
            },
        ],
    },

};

export default nextConfig;
