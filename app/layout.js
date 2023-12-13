"use client";
import { Fira_Code } from "next/font/google";
import "./globals.css";

import HomeContainer from "@/containers/HomeContainer";

const fira = Fira_Code({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fira.className}>
        <HomeContainer>{children}</HomeContainer>
      </body>
    </html>
  );
}
