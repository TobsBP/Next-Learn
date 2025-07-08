import { Footer } from "../components/footer";
import { Nav } from "../components/nav";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"flex flex-col min-h-screen"}>

        <Nav />
        
        {children}

        <Footer />
      </body>
      
    </html>
  );
}
