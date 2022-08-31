import React from 'react';
import { Btn } from './styled';

const Button = ({ content, onClick, bgColorHover, colorBtn }) => {
  return (
    <Btn onClick={onClick} bgColorHover={bgColorHover} colorBtn={colorBtn}>
      {content}
    </Btn>
  );
}

export default Button;