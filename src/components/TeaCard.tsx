/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';

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
    <TeaCardContainer>
      <img width="32px" src={MugHotSolid} alt="mug hot" />
      <TeaCardTitle className="m-auto">{title}</TeaCardTitle>
      <TeaCardPrice>{price}</TeaCardPrice>

      <label htmlFor={`tea-${id}-portions-select`}>
        <select
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

      <AddTeaToCartButton type="button" onClick={onAddTeaToCartButtonClick} disabled={!teaPortion}>
        Add To Cart
      </AddTeaToCartButton>

      <DeleteTeaButton type="button" onClick={onDeleteTeaButtonClick}>
        Delete
      </DeleteTeaButton>
    </TeaCardContainer>
  );
}

const TeaCardContainer = styled.div`
  padding: 6px 2px;
  height: 25rem;
  width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px 0px #000000cc;
  border-radius: 5px;
`;

const TeaCardTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
`;

const TeaCardPrice = styled.h5`
  font-size: 0.85rem;
`;

const AddTeaToCartButton = styled.button``;

const DeleteTeaButton = styled.button``;

export default TeaCard;
