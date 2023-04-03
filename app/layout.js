import '@/styles/globals.css';
import {Poppins} from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import PlayMusic from '@/components/playMusic';
import Header from '@/components/header';
import StoreProvider from '@/redux/storeProvider';


const flowCircular = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700']
});

export default function RootLayout({children}) {
    return (
        <html lang="en" className={flowCircular.className}>
        <body className="flex bg-hbg">
        <StoreProvider>
            <Sidebar/>
            <div>
                <Header/>
                <main>{children}</main>
            </div>
            <PlayMusic/>
        </StoreProvider>
        </body>
        </html>
    );
}
