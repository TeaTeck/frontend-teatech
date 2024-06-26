import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TeaTech",
  description: "Tela de login da plataforma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" data-theme="light">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
