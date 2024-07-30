import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/header";
import Footer from "@/components/main/footer";
import MenuContext from "@/components/main/MenuContext";

const jost = Jost({ subsets: ["latin"] });

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
      <body className={`${jost.className} flex flex-col min-h-screen`}>
        <Header />
        <MenuContext >
          <main>
            {children}
          </main>
        </MenuContext>
        <Footer />
      </body>
    </html>
  );
}
