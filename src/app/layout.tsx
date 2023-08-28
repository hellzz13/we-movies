import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { InfoContextProvider } from "@/context/InfoContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "We Movies",
  description: "Sua plataforma de filmes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <InfoContextProvider>
        <body className={inter.className}>
          <StyledComponentsRegistry>
            <Header />
            {children}
          </StyledComponentsRegistry>
        </body>
      </InfoContextProvider>
    </html>
  );
}
