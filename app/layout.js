import "./globals.css";
import Sidebar from "./left-sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}
