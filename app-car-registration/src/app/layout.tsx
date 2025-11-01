import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "../lib/utils";
import { AuthProvider } from "../components/auth/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ระบบลงทะเบียนรถ | Car Registration System",
  description:
    "ระบบจัดการการลงทะเบียนรถยนต์และรถจักรยานยนต์สมัยใหม่ที่สร้างด้วย Next.js 14",
  keywords: [
    "car registration",
    "vehicle management",
    "ระบบลงทะเบียนรถ",
    "จัดการรถยนต์",
  ],
  authors: [{ name: "Car Registration Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-gray-50 font-sans antialiased",
          `${geistSans.variable} ${geistMono.variable} antialiased`,
        )}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
