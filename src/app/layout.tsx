import type { Metadata } from "next";
import { Google_Sans_Flex, IBM_Plex_Mono } from "next/font/google";
import { homeContent } from "@content/home";
import "./globals.css";

const display = Google_Sans_Flex({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-display",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: homeContent.documentTitle,
  description: homeContent.documentDescription,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
