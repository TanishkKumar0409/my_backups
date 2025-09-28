import "./globals.css";
import "react-advanced-cropper/dist/style.css";

export const metadata = {
  title: "Blayznxt AI",
  description: "This is an AI Based Application Made by Tanishk Kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
