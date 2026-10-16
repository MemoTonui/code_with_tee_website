import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Builds a self-contained server for cPanel's Node.js App
  output: "standalone",

  // Avoids needing the sharp image binary on the server
  images: {
    unoptimized: true,
  },
};

export default nextConfig;