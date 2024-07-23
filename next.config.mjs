/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'books.google.com'
            },
            {
                hostname: 'images-fe.ssl-images-amazon.com'
            }
        ]
    },
};

export default nextConfig;
