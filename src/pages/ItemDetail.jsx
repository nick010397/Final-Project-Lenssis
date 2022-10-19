import React, { useParams } from 'react';
import DetailContainer from '../components/ItemDetails/DetailContainer';

function ItemDetail() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <DetailContainer></DetailContainer>
    </div>
  );
}

export default ItemDetail;
