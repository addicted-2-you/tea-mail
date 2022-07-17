import React from 'react';

function OrderStatusLabel({ status }) {
  if (status === 'new') {
    return <p className="px-1 text-sm font-bold text-blue-700 rounded-sm bg-blue-200 ">новый</p>;
  }

  if (status === 'inprogress') {
    return (
      <p className="px-1 text-sm font-bold text-yellow-700 rounded-sm bg-yellow-200 ">
        в обработке
      </p>
    );
  }

  if (status === 'done') {
    return <p className="px-1 text-sm font-bold text-green-700 rounded-sm bg-green-200 ">готов</p>;
  }

  if (status === 'canceled') {
    return <p className="px-1 text-sm font-bold text-red-700 rounded-sm bg-red-200 ">отменён</p>;
  }

  return null;
}

export default OrderStatusLabel;
