import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hopewin",
  description: "Empowering Women,Uplifting Communities",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-satoshi antialiased`}>
        <div className="w-full flex flex-col flex-grow">
          <Header />
          <div className="flex-grow flex flex-col mt-16 lg:mt-16">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
