import type { Metadata } from "next";
import { Goudy_Bookletter_1911, IBM_Plex_Mono } from "next/font/google";
import { homeContent } from "@content/home";
import "./globals.css";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const quote = Goudy_Bookletter_1911({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-quote",
  display: "swap",
});

export const metadata: Metadata = {
  title: homeContent.documentTitle,
  description: homeContent.documentDescription,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${mono.variable} ${quote.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
