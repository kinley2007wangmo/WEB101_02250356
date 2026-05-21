import "./globals.css";
import { AuthProvider } from "../contexts/authContext";

export const metadata = {
  title: "TikTok Clone",
  description: "WEB101 Practical 4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <AuthProvider>
          {children}
        </AuthProvider>

      </body>
    </html>
  );
}