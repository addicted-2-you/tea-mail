import React from 'react';

function TitledBlock({ title, classList, children }) {
  return (
    <div
      className={`pb-10 max-h-96 h-fit overflow-auto border-2 border-gray-200 rounded-xl ${classList}`}
    >
      <div className="px-4 py-2 rounded-lg bg-gray-200">
        <h2 className="text-2xl text-center font-bold">{title}</h2>
      </div>

      <div className="px-3 pt-10">{children}</div>
    </div>
  );
}

export default TitledBlock;
