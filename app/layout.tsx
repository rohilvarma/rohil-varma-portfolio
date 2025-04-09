import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rohil Varma",
  description: "Hi, I am Rohil! I like to build software using TypeScript.",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "Django",
    "Docker",
    "Azure",
    "Docker",
    "Software Engineer",
    "Full Stack Developer",
    "Tech",
    "Portfolio",
    "Web Development",
    "Python Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth mx-4 sm:px-4 xl:px-0 lg:max-w-5xl sm:mx-auto`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">
              <div className="h-40 w-full"></div>

              <div className="flex-grow">{children}</div>
              <Footer />
            </div>
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
