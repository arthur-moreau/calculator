import { useState } from "react";
import Button from "./components/button";
import CalculatorScreen from "./components/calculatorScreen";
import { GlobalStyle } from "./global-styles";
import * as S from "./styled";
import './images/backspace.png'

function App() {
  const [ numState, setNumState ] = useState('0');
  const [ firstNumState, setFirstNumState ] = useState('');
  const [ signState, setSignState ] = useState('');

  const handleAddNumbers = (num) => {
    setNumState((prevState) =>
      prevState === "0" ? `${num}` : `${prevState}${num}`
    );
  };

  const handleDot = () => {
    setNumState((prevState) =>
      prevState.includes(".") ? `${prevState}` : `${prevState}.`
    );
  };

  const handleSign = (sign) => {
    setSignState((prevState) => (prevState === "" ? sign : prevState));
    setFirstNumState(numState)
    setNumState('0')
  };

  const handleOperation = () => {
    if (firstNumState !== '') {
      switch (signState) {
        case "+":
          setNumState(String(Number(firstNumState) + Number(numState)))
          break;
        case "-":
          setNumState(String(Number(firstNumState) - Number(numState)))
          break;
        case "x":
          setNumState(String(Number(firstNumState) * Number(numState)))
          break;
        case "/":
          setNumState(String(Number(firstNumState) / Number(numState)))
          break;
        default:
          break;
      }
      setSignState('')
    }
  };

  const handleClear = () => {
    setFirstNumState('')
    setNumState('0')
    setSignState('')
  }

  const handleBackspace = () => {
    if (numState.length > 1) {
      setNumState(numState.slice(0, -1))
    }else setNumState('0')
  }

  return (
    <S.Container>
      <GlobalStyle />
      <S.Main>
        <CalculatorScreen>{numState}</CalculatorScreen>
        <S.Row>
          <Button bgColorHover={'#026e81'} />
          <Button bgColorHover={'#026e81'} />
          <Button content={"C"} onClick={handleClear} />
          <Button content={<p>&#129044;</p>} onClick={handleBackspace} />
        </S.Row>
        <S.Row>
          <Button content={"7"} onClick={() => handleAddNumbers("7")} />
          <Button content={"8"} onClick={() => handleAddNumbers("8")} />
          <Button content={"9"} onClick={() => handleAddNumbers("9")} />
          <Button content={"/"} onClick={() => handleSign("/")} />
        </S.Row>
        <S.Row>
          <Button content={"4"} onClick={() => handleAddNumbers("4")} />
          <Button content={"5"} onClick={() => handleAddNumbers("5")} />
          <Button content={"6"} onClick={() => handleAddNumbers("6")} />
          <Button content={"x"} onClick={() => handleSign("x")} />
        </S.Row>
        <S.Row>
          <Button content={"1"} onClick={() => handleAddNumbers("1")} />
          <Button content={"2"} onClick={() => handleAddNumbers("2")} />
          <Button content={"3"} onClick={() => handleAddNumbers("3")} />
          <Button content={"-"} onClick={() => handleSign("-")} />
        </S.Row>
        <S.Row>
          <Button content={"."} onClick={() => handleDot()} />
          <Button content={"0"} onClick={() => handleAddNumbers("0")} />
          <Button content={"="} bgColorBtn={'#550000'} onClick={handleOperation} />
          <Button content={"+"} onClick={() => handleSign("+")} />
        </S.Row>
      </S.Main>
    </S.Container>
  );
}

export default App;
