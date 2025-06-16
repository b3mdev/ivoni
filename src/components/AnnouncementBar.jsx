import React from 'react';

const AnnouncementBar = () => {
  return (
    <div className="bg-[#c17a56] text-white text-xs py-2 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <p className="mb-1 sm:mb-0">Free shipping for orders over $50</p>
        <p className="font-medium">Use code 'Boho' for 15% off</p>
      </div>
    </div>
  );
};

export default AnnouncementBar;