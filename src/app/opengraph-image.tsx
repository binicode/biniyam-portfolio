import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Biniyam Abera | Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const imageBuffer = readFileSync(
    join(process.cwd(), "public/images/profile-picture.webp")
  );
  const base64 = `data:image/webp;base64,${imageBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          display: "flex",
          fontFamily: "monospace",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Cyan glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "600px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Amber glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "0px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(146,64,14,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Left — Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 64px",
            flex: 1,
            gap: "0px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "52px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                background: "#92400E",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "28px",
                fontWeight: "700",
              }}
            >
              B
            </div>
            <span style={{ color: "#f8fafc", fontSize: "22px", fontWeight: "700" }}>
              Biniyam Abera
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.3)",
                borderRadius: "20px",
                padding: "4px 12px",
              }}
            >
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#10b981",
                }}
              />
              <span style={{ color: "#10b981", fontSize: "13px" }}>Available</span>
            </div>
          </div>

          {/* Headline */}
          <div style={{ display: "flex", flexDirection: "column", marginBottom: "24px" }}>
            <span style={{ color: "#64748b", fontSize: "26px" }}>I engineer</span>
            <span style={{ color: "#06b6d4", fontSize: "76px", fontWeight: "700", lineHeight: "1" }}>
              digital
            </span>
            <span style={{ color: "#f8fafc", fontSize: "76px", fontWeight: "700", lineHeight: "1" }}>
              products
            </span>
          </div>

          {/* Pills */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "48px" }}>
            {["Full-Stack", "AI-Ready", "Web3"].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  padding: "5px 14px",
                  color: "#94a3b8",
                  fontSize: "15px",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: "24px",
            }}
          >
            <span style={{ color: "#475569", fontSize: "16px" }}>
              Addis Ababa · Remote
            </span>
            <span style={{ color: "#06b6d4", fontSize: "20px", fontWeight: "600" }}>
              biniyam.com
            </span>
          </div>
        </div>

        {/* Right — Profile Picture */}
        <div
          style={{
            width: "400px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img
            src={base64}
            width={400}
            height={530}
            style={{
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "24px 24px 0 0",
            }}
          />
        </div>

      </div>
    ),
    { ...size }
  );
}