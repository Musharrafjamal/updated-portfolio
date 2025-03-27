import { Poppins, Satisfy, Merienda, Caveat } from "next/font/google";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { Footer } from "@/components/universal/footer/Footer";
import { Toaster } from "sonner";
import "./globals.css";
import { DefaultTabs } from "@/components/ui/others/tabs/tabs";
import localFont from 'next/font/local'
import { SmoothScroll } from "@/components/ui/animations/SmoothScroll";
import { CursorProvider } from "../contexts/CursorContext";
import { CustomCursor } from "../components/ui/cursor/CustomCursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-satisfy",
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-caveat",
});

const merienda = Merienda({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-merienda",
});
const moonWalk = localFont({ src: '../public/fonts/moon-walk.otf', variable: '--font-moon-walk' })

export const metadata = {
  title: "Musharraf",
  description:
    "Team Lead, Developer, and Designer",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${poppins.className} ${satisfy.variable} ${caveat.variable} ${merienda.variable} ${moonWalk.variable} relative cursor-default`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CursorProvider>
            {/* <Navbar /> */}
            <DefaultTabs />
            <SmoothScroll>
              <main>{children}</main>
            </SmoothScroll>
            <Footer />
            <Toaster position="top-center" richColors />
            <CustomCursor />
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
