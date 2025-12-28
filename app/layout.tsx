import type { Metadata } from "next";
import { Geist, Geist_Mono, Lexend_Deca, Moon_Dance, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Even",
  description: "AI-assisted expense balancing, without the awkward conversations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
