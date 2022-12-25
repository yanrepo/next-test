'use client';

import './styles.css';
import MainMenu from '../components/mainMenu/MainMenu';
import { BasketContextProvider } from '../components/basket/basketContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <BasketContextProvider>
          <MainMenu />
          <main>{children}</main>
        </BasketContextProvider>
      </body>
    </html>
  );
}
