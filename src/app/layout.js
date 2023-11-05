import Navbar from "@/components/navbar/Navbar";
import { Inter } from "next/font/google";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Newsletter from "@/components/newsletter/Newsletter";
import Providers from "../redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NecStore - Boutique e-commerce en France",
  description:
    "NecStore vous propose Une collection tendance de t-shirts, jeans et vestes pour un style unique. Exprimez-vous avec notre mode de qualité ! ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <Providers>
              <main>
                <Navbar />
                <div className="container">{children}</div>
                <Newsletter />
                <Footer />
              </main>
            </Providers>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
