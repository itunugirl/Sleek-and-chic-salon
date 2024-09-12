// types.ts
export interface CustomButtonProps {
    title: string;
    handleClick: () => void;
    btnType?: 'button' | 'submit' | 'reset';
    disabled?: boolean; // Optional disabled state
  }
  