import React, { useEffect, useState } from 'react';
import { BannerClose, BannerWrap, BannerWrapHorses, BannerWrapWarriors } from './styledBanner';
import BannerItem from './bannerItem/BannerItem';
import { BANNER_CONTENT } from './BannerContent';

const Banner: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('isBannerHidden')) setVisible(false);
  }, []);

  const onClose = () => {
    localStorage.setItem('isBannerHidden', 'true');
    setVisible(false);
  };
  return (
    <React.Fragment>
      {visible ? <BannerWrap>
          <BannerWrapHorses src="/static/banner/horsesLeft.svg"/>
          <BannerWrapWarriors src="/static/banner/warriorsLeft.svg"/>
          {BANNER_CONTENT.map(content => <React.Fragment key={content.title}>
              <BannerItem content={content}/>
          </React.Fragment>)}
          <BannerWrapWarriors src="/static/banner/warriorsRight.svg"/>
          <BannerWrapHorses src="/static/banner/horsesRight.svg"/>
          <BannerClose>
              <i className="calendar close icon" onClick={onClose}/>
          </BannerClose>
      </BannerWrap> : null}
    </React.Fragment>
  );
};
export default Banner;
