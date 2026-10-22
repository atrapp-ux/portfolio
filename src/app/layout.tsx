import type { Metadata } from "next";
import { Google_Sans_Flex, Goudy_Bookletter_1911 } from "next/font/google";
import { homeContent } from "@content/home";
import "./globals.css";

const display = Google_Sans_Flex({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
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
    <html lang="en" className={`${display.variable} ${quote.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
