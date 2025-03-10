import { Poppins, Satisfy, Merienda } from "next/font/google";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { Footer } from "@/components/universal/footer/Footer";
import { Navbar } from "@/components/universal/navbar/Navbar";
import { Toaster } from "sonner";
import "./globals.css";
import { DefaultTabs } from "@/components/ui/others/tabs/tabs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-satisfy",
});

const merienda = Merienda({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-merienda",
});

export const metadata = {
  title: "Musharraf's Portfolio",
  description:
    "A stunning portfolio showcasing the skills of a 20-year-old developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${poppins.className} ${satisfy.variable} ${merienda.variable} relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navbar /> */}
          <DefaultTabs />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
