'use client';

import {Provider} from 'react-redux';
import {usePathname} from 'next/navigation';
import React from 'react';
import store from '@/redux/index';

const StoreProvider = ({children}) => {
    const pathname = usePathname()
    return (
        <Provider store={store} pathname={pathname.split("/")[1]}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
