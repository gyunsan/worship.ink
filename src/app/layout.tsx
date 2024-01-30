import MainLayout from "@/components/layout/MainLayout";
import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Worship Ink",
  description: "Сайт за християнска музика, събития и ресурси",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full bg-[#fcfcfc] scroll-smooth">
      <body className="h-full">
        <MainLayout />
        <main className="lg:pl-72">
          <div className="xl:pr-96">
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">{children}</div>
          </div>
        </main>
      </body>
      <GoogleTagManager gtmId="GTM-KTB8C5VG" />
    </html>
  );
}
