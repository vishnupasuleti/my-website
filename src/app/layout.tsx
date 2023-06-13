import { NavBar } from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vishnu Pasuleti",
  description: "Vishnu Pasuleti's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center min-h-screen px-2 bg-gray-200">
        <div className="container flex flex-col">
          <div className="container flex flex-col">
            <NavBar />
          </div>
          <main className="flex-1">{children}</main>
          <div>
            <Footer />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
