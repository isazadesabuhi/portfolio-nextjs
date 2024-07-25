/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com", // Add the second hostname here
      },
    ],
  },
};

export default nextConfig;
