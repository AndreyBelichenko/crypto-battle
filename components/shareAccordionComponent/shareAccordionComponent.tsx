import React, { useState } from 'react';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';

const ShareAccordionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ui accordion">
      <div className=" title">
        <i className="dropdown icon"></i>
        What is a dog?
      </div>
      <div className=" content">
        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
      </div>
    </div>
  );

};

export default ShareAccordionComponent;
