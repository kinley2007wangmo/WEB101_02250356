import MainLayout from "../components/layout/MainLayout";
import { AuthProvider } from "../contexts/authContext";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>
          <MainLayout>{children}</MainLayout>
        </AuthProvider>
      </body>
    </html>
  );
}