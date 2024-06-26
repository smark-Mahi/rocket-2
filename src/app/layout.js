import { Inter } from "next/font/google";
import "../styles/main.css";
import Navbar from "@/components/Navbar";
import { GetStatesGlobally } from "@/Hooks/globalStates";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce Website",
  description: "Generated by sumeria mahi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GetStatesGlobally>
          <Navbar />
          {children}
        </GetStatesGlobally>
      </body>
    </html>
  );
}
