import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MP-X ONE",
  description:
    "Arbeit, die sich selbst sortiert. ONE zeigt dir, was wirklich zählt und bringt dich direkt dorthin.",
  applicationName: "MP-X ONE",
  metadataBase: new URL("https://demo.mp-x.at"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MP-X ONE",
    description:
      "Arbeit, die sich selbst sortiert. ONE zeigt dir, was wirklich zählt und bringt dich direkt dorthin.",
    url: "https://demo.mp-x.at",
    siteName: "MP-X ONE",
    locale: "de_AT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
