import { Header } from "@/components/layout/Header";
import "./globals.css";
import { Sora } from "next/font/google";
import FooterBar from "@/components/layout/Footer";

const sora = Sora({ subsets: ["latin"] });

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
      <body
        className={`${sora.className} px-1 sm:px-4 md:px-10 lg:px-16 xl:px-20 mx-auto `}
      >
        <Header />
        {children}
        <FooterBar />
      </body>
    </html>
  );
}
