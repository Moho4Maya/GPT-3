import React from 'react';
import './brand.css';

const atlassian = "https://iili.io/J0Mz68B.png"
const dropbox = "https://iili.io/J0Mzyap.png"
const google = "https://iili.io/J0MIJ9I.png"
const shopify = "https://iili.io/J0MIfMG.png"
const slack = "https://iili.io/J0MIqPf.png"

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt='google'/>
    </div>
    <div>
      <img src={slack} alt='slack'/>
    </div>
    <div>
      <img src={atlassian} alt='atlassian'/>
    </div>
    <div>
      <img src={dropbox} alt='dropbox'/>
    </div>
    <div>
      <img src={shopify} alt='shopify'/>
    </div>
  </div>
);

export default Brand;
