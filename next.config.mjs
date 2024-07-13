import { withPayload } from "@payloadcms/next/withPayload";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["furniro-wine.vercel.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://furniro-wine.vercel.app/",
        port: "",
      },
    ],
  },
};

export default withPayload(nextConfig);
