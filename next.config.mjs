/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "webapistagev2.mytv.vn",
      },
      {
        protocol: "https",
        hostname: "s7773.cdn.mytvnet.vn",
      },
      {
        protocol: "https",
        hostname: "s7729.cdn.mytvnet.vn",
      },
      {
        protocol: "https",
        hostname: "s7730.cdn.mytvnet.vn",
      },
      {
        protocol: "https",
        hostname: "s7768.cdn.mytvnet.vn",
      },
      {
        protocol: "https",
        hostname: "s7772.cdn.mytvnet.vn",
      },
      {
        protocol: "https",
        hostname: "s7770.cdn.mytvnet.vn",
      },
      {
        protocol: "https",
        hostname: "s7769.cdn.mytvnet.vn",
      },
      {
        protocol: "https",
        hostname: "s7771.cdn.mytvnet.vn",
      },
      {
        protocol: "https",
        hostname: "s7772.cdn.mytvnet.vn",
      },
      {
        protocol: "https",
        hostname: "webappstage.mytv.vn",
      },
    ],
  },
};

export default nextConfig;
