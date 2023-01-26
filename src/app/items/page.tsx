/* eslint-disable @next/next/no-img-element */
'use client';

import { ItemList } from '@/components/ItemList';
import { memo } from 'react';
import './styles.css';

function ItemPage() {
    return (
        <div className='item-page'>
            <ItemList />
        </div>
    );
}

export default memo(ItemPage);