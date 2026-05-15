import "./globals.css";

export const metadata = {
  title: "TikTok Clone",
  description: "WEB101 Practical",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}