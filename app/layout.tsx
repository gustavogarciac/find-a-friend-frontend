import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import React from "react";

import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Find a Friend",
  description: "A friendly application where you can adopt a new pet!",
  authors: [
    {
      name: "Vinicius Alves Borba",
      url: "https://www.linkedin.com/in/viniciusaborba/",
    },
    {
      name: "Gustavo Antônio Cimarosti Garcia",
      url: "https://www.linkedin.com/in/gustavo-a-c-garcia-24b106276/",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
