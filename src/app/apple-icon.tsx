import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d1626",
        }}
      >
        <svg width="116" height="116" viewBox="0 0 32 32">
          <g transform="translate(2.6 0) skewX(-9)">
            <path fill="#2563eb" d="M3 28V4h6.6l6.7 9.9v8.7h-1.9L9.2 14.8V28z" />
            <path fill="#60a5fa" d="M15.9 13.9 22.4 4H29v24h-6.2V14.8l-5.2 7.8h-1.7z" />
          </g>
        </svg>
      </div>
    ),
    size,
  );
}
