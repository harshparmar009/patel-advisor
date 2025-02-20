/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
    trailingSlash: false,
=======
  
>>>>>>> e6f0850 (Update issue)
    output: 'export',
    images: { unoptimized: true },
    eslint: {
        ignoreDuringBuilds: true, // This will skip ESLint checks during production builds
      },
};

export default nextConfig;
