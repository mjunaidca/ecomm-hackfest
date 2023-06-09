/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Base_Url: "https://ecomm-hackfest.vercel.app",
    Base_Url: "http://localhost:3000",
  },
  images: {
    domains: ["https://cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

// https://cdn.sanity.io/images/f45jaeys/production/2228e40aa700a68031eff4016f9e625ade813a89-278x296.png"

module.exports = nextConfig;
