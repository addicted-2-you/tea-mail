import React from 'react';

// icons
import MugHotSolid from '~/assets/img/mug-hot-solid.svg';

interface ITeaCardProps {
  id: number;
  title: string;
  price: number;
}

function TeaCard(props: ITeaCardProps) {
  const { id, title, price } = props;

  return (
    <div className="px-3 py-1 w-8 h-20 flex-col items-center rounded-md shadow-sm">
      <img width="32px" src={MugHotSolid} alt="mug hot" />
      <h4 className="m-auto">{title}</h4>
      <h5>{price}</h5>
    </div>
  );
}

export default TeaCard;
