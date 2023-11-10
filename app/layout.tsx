import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "gRPC Express",
  description: "A caching library for grpc-web",
  icons: {
    icon: '/grpcExpress_Logo.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-auto bg-slate-50">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
