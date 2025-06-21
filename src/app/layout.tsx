import type { Metadata } from "next";
import "../styles/global.scss";

export const metadata: Metadata = {
  title: "Crypto Portfolio App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="vsc-initialized">
        {children}
      </body>
    </html>
  );
}
