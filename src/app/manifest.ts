import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gourav Saini | Archery Athlete",
    short_name: "Gourav Saini",
    description: "Premium portfolio for Indian archery athlete and coach Gourav Saini.",
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#FFD700",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
