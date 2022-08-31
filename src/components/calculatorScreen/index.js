import React from 'react';
import { Screen } from './styled';

const CalculatorScreen = ({ children }) => {
  return (
    <Screen>
      {children}
    </Screen>
  );
}

export default CalculatorScreen;