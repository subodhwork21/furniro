import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Header from "./modules/header";
import Footer from "./modules/footer";
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Furniro",
  description: "A new way to buy furniture",
};

const poppinsmedium = localFont({
  src: "./fonts/Poppins-Medium.ttf",
  variable: "--font-poppinsmedium",
});

const poppinssemibold = localFont({
  src: "./fonts/Poppins-SemiBold.ttf",
  variable: "--font-poppinssemibold",
});

const poppinsbold = localFont({
  src: "./fonts/Poppins-SemiBold.ttf",
  variable: "--font-poppinsbold",
});

const poppinslight = localFont({
  src: "./fonts/Poppins-Light.ttf",
  variable: "--font-poppinslight",
});

const poppinsregular = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppinsregular",
});

import { cookies } from "next/headers";
import { AuthProvider } from "./providers/Auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const payload = await getPayloadHMR({ config });

  const cookieStore = cookies();
  const login = cookieStore.get("login")?.value;
  const userId = cookieStore.get("_id")?.value;
  const cartItem = cookieStore.get("cart")?.value;

  const fetchCartsIfLogin = () =>{
    
  }
  return (
    <html lang="en">
      <AuthProvider>
        <body
          className={`${poppinsmedium.variable} ${poppinssemibold.variable} ${poppinsbold.variable} ${poppinslight.variable} ${poppinsregular.variable}`}
        >
          {<Header login={login} userId={userId} cartItem={cartItem} />}
          {children}
          {<Footer />}
        </body>
      </AuthProvider>
    </html>
  );
}
