/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "img.icons8.com",
      "cdn-icons-png.flaticon.com",
      "preschool.dreamguystech.com",
      "icons-for-free.com",
    ],
  },
  async headers() {
    return [
      {
        source: "/_next/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
