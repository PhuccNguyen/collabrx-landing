// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: [],
//     unoptimized: true,
//   },
//   webpack: (config) => {
//     config.resolve.fallback = {
//       ...config.resolve.fallback,
//       fs: false,
//     };
//     return config;
//   },
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",            // cần cho Dockerfile prod (copy .next/standalone)
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,             // tránh phụ thuộc sharp trong container
    domains: [],
  },
  webpack: (config, { isServer }) => {
    // Chỉ disable 'fs' ở client; server vẫn giữ nguyên để tránh lỗi khi render
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
