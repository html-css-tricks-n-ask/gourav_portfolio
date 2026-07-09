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
        src: "/icon-192.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icon-512.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
