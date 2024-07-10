import { ThemeProvider } from '../theme-provider';
import { Inter } from "next/font/google";
import AdminBar from '@/components/adminBar';
import '../globals.css'
import NavigationSidebar from '@/components/navigations/AdminNavigation';
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <NavigationSidebar/>
        <div className='md:ml-64'>
          <AdminBar/>
          <div className='mt-14 md:mt-0'>{children}</div>
        </div>
        </ThemeProvider>
      </body>
    </html>
  )
}