/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

// types
import { ITeaPortion } from '~/types/ITeaPortion';
import { ICartItem } from '~/types/ICartItem';

// icons
import MugHotSolid from '~/assets/img/mug-hot-solid.svg';

interface ITeaCardProps {
  id: number;
  title: string;
  price: number;
  portions: ITeaPortion[];
  addTeaToCart(newCartItem: ICartItem): void;
  deleteTea(id: number): void;
}

function TeaCard(props: ITeaCardProps) {
  const { id, title, price, portions, addTeaToCart, deleteTea } = props;

  const [teaPortion, setTeaPortion] = React.useState<ITeaPortion>(portions[0]);

  const onTeaPortionChange = (portionId: number) => {
    setTeaPortion(portions.find((portion) => portion.id === portionId) as ITeaPortion);
  };

  const onAddTeaToCartButtonClick = () =>
    addTeaToCart({
      tea: { id, title, price, teaType: { id: -1, title: '' }, flavors: [] },
      teaPortion,
      count: 1,
    });

  const onDeleteTeaButtonClick = () => deleteTea(id);

  return (
    <div className="relative px-2 py-1 w-64 flex flex-col items-center border-2 rounded-md border-orange-900">
      <div className="absolute top-3 w-full px-2 flex justify-start">
        <button
          className="h-7 w-7 text-sm text-white font-bold bg-black bg-opacity-25 rounded-full hover:bg-red-500"
          type="button"
          onClick={onDeleteTeaButtonClick}
        >
          D
        </button>
      </div>

      <div className="h-36 flex justify-center items-center">
        <img width="32px" src={MugHotSolid} alt="mug hot" />
      </div>

      <h4 className="font-bold">{title}</h4>

      <h5 className="mt-4 text-xl text-yellow-700">{price} BYN</h5>

      <label className="mt-4" htmlFor={`tea-${id}-portions-select`}>
        <select
          className="border-2 border-gray-600 rounded-md"
          id={`tea-${id}-portions-select`}
          value={teaPortion?.id}
          onChange={(e) => onTeaPortionChange(+e.target.value)}
        >
          {portions.map((portion) => (
            <option key={portion.id} value={portion.id}>
              {portion.title}
            </option>
          ))}
        </select>
      </label>

      <button
        className="mt-4 px-2 py-1 italic text-sm text-white bg-orange-700 rounded-sm hover:bg-orange-800"
        type="button"
        onClick={onAddTeaToCartButtonClick}
        disabled={!teaPortion}
      >
        В корзину
      </button>
    </div>
  );
}

export default TeaCard;
