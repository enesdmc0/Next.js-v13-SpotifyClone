import '@/styles/globals.css';
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
            <main>{children}</main>
        </StoreProvider>
        </body>
        </html>
    );
}
