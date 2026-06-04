import type { Metadata } from "next";
import { geistMono, geistSans, anton, bebasNeue } from "./fonts";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import "./globals.css";


export const metadata: Metadata = {
  title: "Perpetual Asogwa | Fullstack Developer Portfolio",
  description:
    "Creative fullstack developer specializing in building exceptional digital experiences with modern technologies.",
  icons: {
    icon: [
      {
        url: "/icons/me.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icons/me.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icons/me.png",
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
        <Toaster richColors closeButton position="bottom-right" />
      </body>
    </html>
  );
}
