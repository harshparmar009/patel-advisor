/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    eslint: {
        ignoreDuringBuilds: true, // This will skip ESLint checks during production builds
      },
};

export default nextConfig;
