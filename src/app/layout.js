import { Inter } from 'next/font/google';
import './globals.css';
import AppWrapper from './AppWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'App Dashboard',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
