import React from 'react';
import { BannerItemWrap, ItemImage, ItemText, ItemWrapImage } from './styledBannerItem';
import { IBannerItem } from '../BannerContent';

interface BannerItemProps {
  content: IBannerItem;
}

const BannerItem: React.FC<BannerItemProps> = (props: BannerItemProps) => (
  <BannerItemWrap>
    <ItemWrapImage src={props.content.image}/>
    <ItemText>{props.content.title}</ItemText>
    <ItemImage src={props.content.innerImage}/>
  </BannerItemWrap>
);

export default BannerItem;
