
import { Header } from "@/views/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import FooterBar from "@/views/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecomm HackFest",
  description: "Created by Muhammad Junaid Shaukat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <FooterBar />
        </body>
    </html>
  );
}
