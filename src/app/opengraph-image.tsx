import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Biniyam Abera | Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                    display: "flex",
                    fontFamily: "monospace",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Accent glow top right */}
                <div
                    style={{
                        position: "absolute",
                        top: "-100px",
                        right: "300px",
                        width: "500px",
                        height: "500px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
                    }}
                />

                {/* Accent glow bottom left */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "-100px",
                        left: "-100px",
                        width: "400px",
                        height: "400px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(146,64,14,0.2) 0%, transparent 70%)",
                    }}
                />

                {/* Left — Content */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "80px",
                        flex: 1,
                    }}
                >
                    {/* Logo + Available */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            marginBottom: "48px",
                        }}
                    >
                        <div
                            style={{
                                width: "52px",
                                height: "52px",
                                background: "#92400E",
                                borderRadius: "14px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#ffffff",
                                fontSize: "30px",
                                fontWeight: "700",
                            }}
                        >
                            B
                        </div>
                        <span style={{ color: "#f8fafc", fontSize: "24px", fontWeight: "700" }}>
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
                                padding: "4px 14px",
                            }}
                        >
                            <div
                                style={{
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    background: "#10b981",
                                }}
                            />
                            <span style={{ color: "#10b981", fontSize: "13px", fontWeight: "500" }}>
                                Available
                            </span>
                        </div>
                    </div>

                    {/* Headline */}
                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "28px" }}>
                        <span style={{ color: "#64748b", fontSize: "28px", fontWeight: "400" }}>
                            I engineer
                        </span>
                        <span style={{ color: "#06b6d4", fontSize: "80px", fontWeight: "700", lineHeight: "1" }}>
                            digital
                        </span>
                        <span style={{ color: "#f8fafc", fontSize: "80px", fontWeight: "700", lineHeight: "1" }}>
                            products
                        </span>
                    </div>

                    {/* Pills */}
                    <div style={{ display: "flex", gap: "12px", marginBottom: "48px" }}>
                        {["Full-Stack", "AI-Ready", "Web3"].map((item) => (
                            <div
                                key={item}
                                style={{
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "20px",
                                    padding: "6px 16px",
                                    color: "#94a3b8",
                                    fontSize: "16px",
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
                        width: "380px",
                        position: "relative",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            bottom: "0",
                            left: "50%",
                            width: "300px",
                            height: "300px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)",
                        }}
                    />
                    <img
                        src="https://biniyam.com/images/profile-picture.webp"
                        width={320}
                        height={420}
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