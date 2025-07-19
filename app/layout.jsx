import './globals.css';
import Providers from './components/ThemeProvider';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'UniNow',
  description: 'A modern student platform.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
