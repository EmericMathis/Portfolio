import { Inter } from "next/font/google";
import "../globals.css";
import Head from "next/head";
import { url } from "inspector";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emeric Mathis - Portfolio",
  description: "Web developer portfolio of Emeric Mathis.",
  images: { url: "https://www.emericmathis.com/images/image.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
