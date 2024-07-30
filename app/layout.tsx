import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/providers";
import Header from "@/components/main/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emeric MATHIS web developer",
  description: "I create and maintain websites and web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
