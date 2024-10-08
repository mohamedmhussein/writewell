import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UserProvider } from "@/utilities/UserContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Write Well",
  description: "Write informative blogs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <UserProvider>
          <Navbar />
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
