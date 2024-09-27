/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: "https",
                hostname: "this.images.upsplash.com",
            },
        ],
    },
    experimental: {
        serverActions: true,
    }
};

module.exports = nextConfig
