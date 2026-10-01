/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1536, 1920],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      "/videos/revizer/product-film-hd-v1.mp4",
      "/videos/revizer/product-film-mobile-v1.mp4",
      "/sharcode-social-card-v3.jpg",
      "/musharraf-jamal-social-v1.jpg",
    ].map((source) => ({
      source,
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    }));
  },
};

export default nextConfig;
