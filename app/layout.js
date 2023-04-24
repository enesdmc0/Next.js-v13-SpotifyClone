import '@/styles/globals.css';
import Sidebar from '@/components/(sidebar)/Sidebar';
import PlayMusic from '@/components/(play-music)/playMusic';
import Header from '@/components/(header)/header';
import StoreProvider from '@/redux/storeProvider';
import {Poppins} from 'next/font/google';


const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});
export default function RootLayout({children}) {
    
    return (
        <html lang="en" className={poppins.className}>
        <body className="bg-hbg">
        <StoreProvider>
            <Sidebar/>
            <>
                <Header/>
                <main>{children}</main>
            </>
            <PlayMusic/>
        </StoreProvider>
        </body>
        </html>
    );
}
