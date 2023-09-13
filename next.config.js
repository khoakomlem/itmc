import million from 'million/compiler';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

const millionConfig = {
  auto: true,
  mute: true,
  // If you're using RSC:
  // auto: { rsc: true },
};

// export default million.next(nextConfig, millionConfig);
export default nextConfig;
