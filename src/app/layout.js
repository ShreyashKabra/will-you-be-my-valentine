import "./globals.css";

export const metadata = {
  title: "Would you like to go on prom with me?",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
