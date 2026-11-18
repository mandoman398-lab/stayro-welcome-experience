import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

import background from "@/assets/stayro-background.webp.asset.json";
import wordmark from "@/assets/stayro-wordmark.svg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ستيرو | Stayro" },
      { name: "description", content: "لكل إقامة هناك قصة | ستيرو" },
      { property: "og:title", content: "ستيرو | Stayro" },
      { property: "og:description", content: "لكل إقامة هناك قصة" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="stayro-page" dir="rtl" lang="ar">
      <img className="stayro-backdrop" src={background.url} alt="" aria-hidden="true" />
      <div className="stayro-screen-shade" aria-hidden="true" />

      <img className="stayro-header-wordmark" src={wordmark.url} alt="Stayro" />

      <section className="stayro-brand" aria-label="ستيرو">
        <svg
          className="stayro-symbol"
          viewBox="0 0 1920 1920"
          role="img"
          aria-label="شعار ستيرو"
        >
          <path
            className="stayro-symbol-path stayro-symbol-path-first"
            pathLength="1"
            d="M1444.11 846.84c.06-26.52-16.13-52.16-36.02-70.68-28.61-26.61-50.38-47.32-65.34-62.06-8.24-8.13-12.34-18.4-12.26-30.82.25-50.57.17-100.92-.25-151.15-.16-18.86-4.83-38.01-17.71-52.37-12.39-13.81-28.92-23.26-47.33-26.2-28.53-4.55-57.13 9.75-73.21 33.27-15.59 22.78-11.41 54.74-11.54 81.98 0 3.41-1.27 3.96-3.72 1.6-17.46-16.5-37.49-34.06-53.72-49.3-42.56-39.96-73.12-68.54-91.59-85.72-5.11-4.72-11.2-9.56-18.26-14.44-30.13-23.07-74.09-23.11-105.79-5.31-7.06 4-17.37 12.17-30.85 24.55-28.06 25.64-55.83 51.37-83.34 77.56-46.74 43.58-93.36 87.03-139.89 130.44-20.79 19.37-44.33 42.9-66.73 63.45-14.89 13.66-29.76 27.34-44.59 41.07-14.16 13.12-29.69 25.52-42.45 40.17-12.81 14.71-23.81 32.85-23.65 52.88.17 23.02 12.59 46.9 32.71 58.62 15.76 8.21 33.22 8.97 48.26 7.24 7.19-.84 29.33-7.62 34.57-15.03 3.21-4.51 4.99-4 5.33 1.52 2.28 36.97 16.23 74.19 36.26 105.09 13.46 21.34 29.63 40.99 48.43 57.84 20.69 18.54 266.65 174.4 271.76 177.35 40.66 23.45 95.39 17.52 112.59-32.25 10.9-42.78-7.73-72.97-41.21-96.25L839.63 993.43c-65.47-39.62-112.8-86.73-103.17-170.52 5.07-44 24.26-81.47 57.56-112.46 29.54-27.49 100.8-94.61 107.01-100.54 16.1-11.66 35.97-18.53 57.44-18.53 22.95 0 44.04 7.87 60.73 21.05 3.13 2.74 6.21 5.56 9.34 8.42 11.75 10.53 23.5 21.14 35.21 31.75l137.27 122.35c49.83 43.91 84.15 74.82 102.95 92.76 16.07 15.31 32.44 33.55 54.27 40.39 29.18 9.15 61.45-2.44 76.95-29.06 6.17-10.6 8.86-21.47 8.88-32.19Z"
          />
          <path
            className="stayro-symbol-path stayro-symbol-path-second"
            pathLength="1"
            d="M1193.94 903.09c-33.03-26.06-66.72-49.11-99.68-74.4-32.96-25.29-64.29-49.65-97.5-75.13-25.97-19.92-54.18-31.33-86.2-16.65-30.21 13.85-45.36 38.68-43.26 72.07 1.65 26.21 18.5 44.52 38 60.76 14.03 11.68 29.34 22.27 43.93 33.4 39.86 30.41 80.39 58.05 120.63 88.78 48 36.65 90.05 72.41 101.43 135.11 8.64 47.63.19 93.45-25.16 135.41-21.14 34.99-47.81 62.77-86.18 81.5-76.16 37.19-154.08 32.75-227.79-10.85-28.28-16.73-51.5-41.08-69.31-68.52-9.13-14.06-16.89-29-23.28-44.49-5.82-14.1-8.38-30.29-17.29-42.82-12.16-17.09-30.57-32.02-52.45-32.34-22.32-.33-40.3 5.85-56.32 22.41-14.78 15.28-20.04 34.92-19.96 56.37 0 2.15.69 6.52 1.05 8.8 2.04 12.89 4.86 25.05 9.06 37.34 7.04 20.62 14.06 40.42 25.4 59.4 31.15 52.18 71.17 91.79 120.36 127.76 46.25 25.19 94.6 49.89 147.24 56.54 142.32 17.99 269.62-32.44 360.18-143.05 28.37-34.66 44.85-75.6 57.49-118.48 4.5-15.27 6.1-31.11 7.48-47.69.74-8.93 1.72-25.04 1.63-33.75-.67-62.78-13.95-118.98-44.88-172.39-22.38-38.65-50.54-68.23-84.59-95.09Z"
          />
        </svg>
        <h1 className="stayro-name">ستيرو</h1>
        <p className="stayro-tagline">لكل إقامة هناك قصة</p>
      </section>

      <nav className="stayro-socials" aria-label="حسابات ستيرو الاجتماعية" dir="ltr">
        <a
          className="stayro-social-link"
          href="https://www.instagram.com/StayroApp"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <Instagram aria-hidden="true" size={19} strokeWidth={1.8} />
          <span>Instagram</span>
        </a>
        <a
          className="stayro-social-link"
          href="https://www.tiktok.com/@StayroApp"
          target="_blank"
          rel="noreferrer"
          aria-label="TikTok"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="stayro-social-icon">
            <path
              fill="currentColor"
              d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.27 1.77-.13.55-.1 1.13.1 1.66.49 1.29 2.06 2.02 3.4 1.56.89-.3 1.58-1.05 1.79-1.96.11-.49.07-.98.07-1.48V.02Z"
            />
          </svg>
          <span>TikTok</span>
        </a>
        <a
          className="stayro-social-link"
          href="https://x.com/StayroApp"
          target="_blank"
          rel="noreferrer"
          aria-label="X"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="stayro-social-icon">
            <path
              fill="currentColor"
              d="M18.9 1.15h3.68l-8.04 9.19L24 22.9h-7.46l-5.84-7.64-6.69 7.64H.33l8.6-9.83L0 1.15h7.65l5.28 6.98zm-1.29 19.64h2.04L6.48 3.15H4.29z"
            />
          </svg>
          <span>Twitter</span>
        </a>
      </nav>
    </main>
  );
}