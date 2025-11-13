import '@/app/ui/global.css';
import { abhaya_Libre } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${abhaya_Libre.className} antialiased`}>
        {children}
        </body>
    </html>
  );
}
