/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';

// icons
import MugHotSolid from '~/assets/img/mug-hot-solid.svg';

interface ITeaCardProps {
  id: number;
  title: string;
  price: number;
  onTeaDelete(id: number): void;
}

function TeaCard(props: ITeaCardProps) {
  const { id, title, price, onTeaDelete } = props;

  const onDeleteTeaButtonClick = React.useCallback(() => onTeaDelete(id), [id, onTeaDelete]);

  return (
    <TeaCardContainer>
      <img width="32px" src={MugHotSolid} alt="mug hot" />
      <TeaCardTitle className="m-auto">{title}</TeaCardTitle>
      <TeaCardPrice>{price}</TeaCardPrice>

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

const DeleteTeaButton = styled.button``;

export default TeaCard;
