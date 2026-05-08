import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "~/styles/globals.css";

import { Toaster } from "~/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "FlowBrand",
  description: "Advanced Collaboration Platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto h-full w-full max-w-[1920px]">
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
