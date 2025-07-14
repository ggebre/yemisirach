import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/layout/Navbar";
import Footer from "@/layout/Footer";

export const metadata: Metadata = {
  title: {
    template:  '%s | Yemisirach Church',
    default: ' Yemisirach Church'
  },
  description: "The official page of Yemisirach Church",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Noto+Sans+Ethiopic:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      
      <body
        className={`antialiased m-8`}
      >
      <NavBar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
