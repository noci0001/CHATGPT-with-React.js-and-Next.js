import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="greentech__possibility section__padding" id="possibility">
    <div className="greentech__possibility-image">
      <img src={possibilityImage} width="25%" alt="possibility" />
    </div>
    <div className="greentech__possibility-content">
      <h4>Get in contact with us now</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Get in contact with us now</h4>
    </div>
  </div>
);

export default Possibility;