import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://backend1-1-f2a5.onrender.com",
        changeOrigin: true,
        secure: false, // For HTTPS self-signed/Render
        configure: (proxy, options) => {
          proxy.on("proxyReq", (proxyReq, req, res) => {
            proxyReq.setHeader(
              "Origin",
              "https://frontend1-ecru-zeta.vercel.app",
            );
          });
        },
      },
    },
  },
});
