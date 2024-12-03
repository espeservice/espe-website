
import {Outfit} from "next/font/google"
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const outfit = Outfit({subsets:['latin']})


export const metadata = {
  title: "Espe service",
  description: "Espe service connecting clients to service providers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
       className={outfit.className}
      >
       <div>
       <Header />
       {children}
       <Footer />
       </div>
      </body>
    </html>
  );
}
