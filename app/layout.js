import "@/app/_styles/global.css";
export const metadata = {
  title: "Techozon test task",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
