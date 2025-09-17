import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Import the plugin
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    svgr(),
    react(),
    tailwindcss(), // Add the Tailwind CSS plugin
  ],
});
