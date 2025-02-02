import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

const karla = localFont({
  src: "../fonts/Karla-VariableFont_wght.ttf",
  preload: true,
  adjustFontFallback: "Arial",
  display: "swap",
});

const sourceCodePro = localFont({
  src: "../fonts/SourceCodePro-VariableFont_wght.ttf",
  display: "swap",
  preload: true,
  variable: "--font-source-code-pro",
});

const playwrite = localFont({
  src: "../fonts/PlaywriteIN-VariableFont_wght.ttf",
  display: "swap",
  preload: true,
  variable: "--font-playwrite",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playwrite.variable} ${sourceCodePro.variable} `}
    >
      <body className={`${karla.className} antialiased`}>{children}</body>
    </html>
  );
}
