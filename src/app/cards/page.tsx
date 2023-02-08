/* eslint-disable @next/next/no-img-element */
'use client';

import { memo } from 'react';
import CardPreview from '../../components/card/CardPreview';
// import './../../components/card/styles.css';

function CardListPage() {
  return (
    <div id="cards-container" style={{ marginTop: 20, background: '#fff' }}>
      {new Array(2).fill(0).map((_, i) => (
        <CardPreview key={i} />
      ))}
    </div>
  );
}

export default memo(CardListPage);
