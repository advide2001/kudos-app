import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kudos App",
  description: "Kudos dummy application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div>
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
