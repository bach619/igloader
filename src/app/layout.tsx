import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/features/theme/theme-provider";
import { LocaleProvider } from "@/features/i18n/locale-provider";
import { ReactQueryProvider } from "@/features/react-query/react-query-provider";
import { cn } from "@/lib/utils";
import { siteMetadata } from "@/lib/site";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
// import Script from "next/script";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={cn("antialiased", dmSans.variable)}>
        <LocaleProvider locale={locale} messages={messages}>
          <ThemeProvider defaultTheme="light" enableSystem={false}>
            <ReactQueryProvider>

              {children}
              <Toaster closeButton />
            </ReactQueryProvider>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
