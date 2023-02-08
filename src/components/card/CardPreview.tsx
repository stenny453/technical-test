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

interface Description {
  title: string,
  value: string
};

const descriptions: Array<Description> = [
  {
    title: "PLATFORM",
    value: "PS5"
  },
  {
    title: "RELEASE",
    value: "Fall 2020"
  },
  {
    title: "PRICE",
    value: "$50"
  }
];

const features: Array<Description> = [
  {
    title: "Futuristic",
    value: "Design"
  },
  {
    title: "Built-in",
    value: "Microphone"
  },
];

function CardPreview() {
  return (
    <div className="preview-card">
      {/* <img alt="fake card" src="/images/card.png" /> */}
      <div className="up-div">

        <div className="header-up-div">
          <img alt="back" src="/icons/back.svg" className="back-svg" />
          <div className="market">
            <img alt="back" src="/icons/market.svg" className="market-svg" />
            <div></div>
          </div>
        </div>

        {
          descriptions.map((description, index) => {
            return (
              <div className="contain-description-card" key={index}>
                <div className="title-description"> {description.title} </div>
                <div className="value-description"> {description.value} </div>
              </div>
            )
          })
        }
      
        <img alt="joystick" src="/images/ps5.png" className="joystick" />
      </div>

      <div className="bottom-div">
        
        <div className="title-bottom">
          Dual Sense
        </div>
        
        <div className="description-bottom">
          DualSense also adds a build-in microphone array,
          which will enable players to easily chat with 
          firends without a headset...
        </div>

        <div className="main-features">
          {
            features.map((feature, index) => {
              return (
                <div className="contain-features-card" key={`feature-${index}`}>
                  <div className="black-block"></div>
                  <div className="contain-values-features">
                    <div className="title-feature"> {feature.title} </div>
                    <div className="value-feature"> {feature.value} </div>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className="main-price"> 
          <div className="price">
            0.78 ETH
          </div>
          <div className="buy">
            <div className="text-buy">Buy</div>
            <div className="icon-buy">
                <img alt="back" src="/icons/back.svg" className="right-svg" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default memo(CardPreview);
