import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile, socialLinks } from "@/data/portfolio";

export const alt = `${profile.name} — ${profile.headline.join(" ")}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const readAsset = (file: string) => readFile(join(process.cwd(), "src/assets", file));

export default async function OpenGraphImage() {
  const [photo, geistRegular, geistSemiBold] = await Promise.all([
    readAsset("images/mario-eduardo.png"),
    readAsset("fonts/Geist-Regular.ttf"),
    readAsset("fonts/Geist-SemiBold.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
          backgroundColor: "#060b14",
          color: "#f8fafc",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -45,
            left: 611,
            display: "flex",
            width: 720,
            height: 720,
            borderRadius: 9999,
            backgroundImage:
              "radial-gradient(circle at center, rgba(37, 99, 235, 0.4) 0%, rgba(37, 99, 235, 0.12) 40%, rgba(6, 11, 20, 0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 160,
            right: 160,
            display: "flex",
            height: 2,
            backgroundImage:
              "linear-gradient(90deg, rgba(96, 165, 250, 0), rgba(96, 165, 250, 0.85), rgba(96, 165, 250, 0))",
          }}
        />

        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 22,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#60a5fa",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 10,
                height: 10,
                borderRadius: 9999,
                backgroundColor: "#3b82f6",
                boxShadow: "0 0 16px #3b82f6",
              }}
            />
            <span>Portfólio</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 96,
                fontWeight: 600,
                letterSpacing: -4,
                lineHeight: 1,
              }}
            >
              <span>{profile.firstName}</span>
              <span style={{ marginLeft: 22, color: "#60a5fa" }}>{profile.lastName}</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 28,
                fontSize: 40,
                fontWeight: 600,
                letterSpacing: -1,
                lineHeight: 1.2,
                color: "#93c5fd",
              }}
            >
              <span>{profile.headline[0]}</span>
              <span>{profile.headline[1]}</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 24,
              color: "#94a3b8",
            }}
          >
            <span>{profile.location}</span>
            <span style={{ color: "#3b82f6" }}>•</span>
            <span>{socialLinks.github.handle}</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              padding: 6,
              borderRadius: 9999,
              backgroundImage:
                "linear-gradient(160deg, #93c5fd, #2563eb 55%, rgba(37, 99, 235, 0.15))",
              boxShadow: "0 0 90px rgba(59, 130, 246, 0.45)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renderiza apenas <img> */}
            <img
              src={`data:image/png;base64,${photo.toString("base64")}`}
              alt=""
              width={320}
              height={320}
              style={{ borderRadius: 9999, objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistRegular, weight: 400, style: "normal" },
        { name: "Geist", data: geistSemiBold, weight: 600, style: "normal" },
      ],
    },
  );
}
