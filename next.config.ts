import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allows LAN devices (e.g. phones) to connect to the dev server's HMR
  // websocket during local testing. Dev-mode only; no effect on production builds.
  allowedDevOrigins: ["192.168.1.3"],
};

export default nextConfig;
