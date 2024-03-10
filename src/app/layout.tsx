import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import { Providers } from "./providers"
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
      <html lang='en'>
      <body>
      <Providers>{children}</Providers>
      </body>
      </html>
  )
}