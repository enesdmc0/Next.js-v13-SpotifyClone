'use client';

import {Provider} from 'react-redux';

import React from 'react';
import store from '@/redux/index';

const StoreProvider = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
