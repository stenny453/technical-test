/* eslint-disable @next/next/no-img-element */
'use client';

import { memo } from 'react';
import './styles.css';

/**
 * This component represents a preview of an item, the target output is an HTML markup that looks like /images/card.png
 * See `/cards` page for the output
 *
 * @todo:
 * - setup the HTML markup by replacing <img /> below by yours
 * - put and set all necessary css as you want in ./styles.css the main entry class is `preview-card`
 *
 * you can find all assets to use in /public/images and /public/icons
 */
function CardPreview() {
  return (
    <div className="preview-card">
      <img alt="fake card" src="/images/card.png" />
    </div>
  );
}

export default memo(CardPreview);
