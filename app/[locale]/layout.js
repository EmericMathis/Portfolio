import { Inter } from "next/font/google";
import "../globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emeric Mathis - Portfolio",
  description: "Web developer portfolio of Emeric Mathis.",
  images: {
    url: 'https://nextjs.org/og.png',
    alt: 'Next.js Logo',
  },
  author: "Emeric Mathis",
  publishdate: "17-04-2024",
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
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="publishdate" content={metadata.publishdate} />
        <link rel="preload" as="image" href="/images/image.jpg"></link>
        <meta property="og:image" content="https://www.emericmathis.com/images/image.jpg" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
