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

      <section className="stayro-brand" aria-label="ستيرو">
        <img className="stayro-wordmark" src={wordmark.url} alt="Stayro ستيرو" />
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
          <span>X</span>
        </a>
      </nav>
    </main>
  );
}