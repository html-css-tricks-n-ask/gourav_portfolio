import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ background: "linear-gradient(135deg, #050816, #0f172a)", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 72, fontWeight: 700 }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ color: "#FFD700", letterSpacing: 6, fontSize: 24, marginBottom: 16 }}>GOURAV SAINI</div>
          <div>Precision. Discipline. Excellence.</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
