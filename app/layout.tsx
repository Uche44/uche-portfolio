import type { Metadata } from "next";
import { geistMono, geistSans, anton, bebasNeue } from "./fonts";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// const geistSans = Geist({
//   subsets: ["latin"],
//   variable: "--font-geist-sans",
// });

// const geistMono = Geist_Mono({
//   subsets: ["latin"],
//   variable: "--font-geist-mono",
// });

// const anton = Anton({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-bebas-neue",
// });

// const bebasNeue = Bebas_Neue({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-bebas-neue",
// });

export const metadata: Metadata = {
  title: "Perpetual Asogwa | Fullstack Developer Portfolio",
  description:
    "Creative fullstack developer specializing in building exceptional digital experiences with modern technologies.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
