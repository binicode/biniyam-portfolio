import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Biniyam Abera | Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    background: "#020617",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "80px",
                    fontFamily: "monospace",
                }}
            >
                {/* Top — Logo */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                        style={{
                            width: "48px",
                            height: "48px",
                            background: "#92400E",
                            borderRadius: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#ffffff",
                            fontSize: "28px",
                            fontWeight: "700",
                        }}
                    >
                        B
                    </div>
                    <span style={{ color: "#f8fafc", fontSize: "24px", fontWeight: "700" }}>
                        Biniyam.
                    </span>
                    <div
                        style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background: "#10b981",
                            marginLeft: "4px",
                        }}
                    />
                </div>

                {/* Middle — Main content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                        <span style={{ color: "#64748b", fontSize: "28px", fontWeight: "500" }}>
                            I engineer
                        </span>
                        <span style={{ color: "#06b6d4", fontSize: "80px", fontWeight: "700", lineHeight: "1" }}>
                            digital
                        </span>
                        <span style={{ color: "#f8fafc", fontSize: "80px", fontWeight: "700", lineHeight: "1" }}>
                            products
                        </span>
                    </div>
                    <span style={{ color: "#64748b", fontSize: "24px", letterSpacing: "0.1em" }}>
                        FULL-STACK · AI-READY · WEB3
                    </span>
                </div>

                {/* Bottom — Info */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ color: "#94a3b8", fontSize: "20px" }}>
                            Biniyam Abera · Full-Stack Developer
                        </span>
                        <span style={{ color: "#475569", fontSize: "18px" }}>
                            Addis Ababa, Ethiopia · Available for remote
                        </span>
                    </div>
                    <span style={{ color: "#06b6d4", fontSize: "20px", fontWeight: "600" }}>
                        biniyam.com
                    </span>
                </div>

            </div>
        ),
        { ...size }
    );
}