// frontend/src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pravallika TNS — HR Executive Portfolio",
  description: "Strategic HR professional specialising in Talent Acquisition, HR Operations, and Employee Engagement.",
  keywords: ["HR Executive", "Talent Acquisition", "HR Operations", "Employee Engagement", "Pravallika TNS"],
  openGraph: {
    title: "Pravallika TNS — HR Executive Portfolio",
    description: "Strategic HR professional specialising in Talent Acquisition and HR Operations.",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${poppins.className}`}>
      <body>{children}</body>
    </html>
  );
}