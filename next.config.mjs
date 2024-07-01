import { withPayload } from "@payloadcms/next/withPayload";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [""],
  },
};

export default withPayload(nextConfig);
