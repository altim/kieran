import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HurleyDesign",
  description:
    "Kieran Hurley, a multi-disciplined art director and design project leader, based in Munich",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
