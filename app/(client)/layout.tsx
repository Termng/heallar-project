import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Foot from "../components/Foot";
import Nav from "../components/Nav";
import { Provider } from "../utils/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heallar: Medically Peer Reviewed Articles",
  description: "Althub Group 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Nav/>
          {children}
          <Foot/>
        </Provider>
        </body>
    </html>
  );
}
