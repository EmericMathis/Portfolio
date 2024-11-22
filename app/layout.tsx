import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "Développeur web freelance - création de sites internet - Emeric MATHIS",
  description: "Créateur de sites internet sur mesure, accessibles, performants, SEO. Travaille en remote sur toute la France et pays francophones.",
  generator: 'Next.js',
  applicationName: 'emericmathis.com',
  referrer: 'origin-when-cross-origin',
  keywords: ['Développeur web', 'indépendant', 'Freelance', 'Portfolio', 'JavaScript', 'React', 'Next.js', 'Création de sites internet', 'SEO', 'Accessibilité', 'Performance', 'Html', 'CSS'],
  authors: [{ name: 'Emeric Mathis', url: 'https://emericmathis.com' }],
  creator: 'Emeric Mathis',
  publisher: 'Emeric Mathis',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Développeur web freelance - Emeric MATHIS',
    description: 'Créateur de sites internet sur mesure, accessibles, performants, SEO. Travaille en remote sur toute la France et pays francophones.',
    url: 'https://emericmathis.com',
    siteName: 'emericmathis.com',
    images: [
      {
        url: 'https://emericmathis.com/images/OGimage.png',
        width: 1600,
        height: 840,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true, // Permet aux moteurs de recherche d'indexer cette page.
    follow: true, // Permet aux moteurs de recherche de suivre les liens sur cette page.
    nocache: false, // Permet aux moteurs de recherche de mettre en cache cette page.
    googleBot: {
      index: true, // Permet à Googlebot d'indexer cette page.
      follow: true, // Permet à Googlebot de suivre les liens sur cette page.
      noimageindex: false, // Permet à Googlebot d'indexer les images sur cette page.
      'max-video-preview': -1, // Pas de limite à la taille des aperçus vidéo.
      'max-image-preview': 'large', // Permet des aperçus d'images de grande taille.
      'max-snippet': -1, // Pas de limite à la longueur des extraits textuels.
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <Head>
        <link rel="canonical" href="https://emericmathis.com" />
        <meta property="og:url" content="https://emericmathis.com" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
