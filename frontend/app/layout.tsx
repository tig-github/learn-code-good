import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./App";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LearnCoding",
  sitename: "LearnCoding",
  description: "LearnCoding - A Website For Learning Coding.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
