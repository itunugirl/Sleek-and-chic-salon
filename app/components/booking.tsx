import React from 'react';
import { CustomButtonProps } from '@/types'; // Ensure the correct path

const BookingButton: React.FC<CustomButtonProps> = ({ title, handleClick, btnType = 'button', disabled = false }) => {
  return (
    <button
      type={btnType} // Use btnType, default to 'button'
      className="custom-btn" // Ensure this class is defined in your CSS or Tailwind config
      onClick={handleClick}
      disabled={disabled} // Apply the disabled state if provided
    >
      <span className='flex-1'>{title}</span>
    </button>
  );
};

export default BookingButton;
