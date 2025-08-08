import { useState } from "react";
import CalculatorButton from "./CalculatorButton";

const performCalculation = (
  prev: number,
  current: number,
  operation: string
) => {
  switch (operation) {
    case "+":
      return prev + current;
    case "-":
      return prev - current;
    case "*":
      return prev * current;
    case "/":
      return prev / current;
    default:
      return current;
  }
};

const initialData: CalculatorState = {
  currentNumber: "0", // 현재 입력/표시되는 숫자
  previousNumber: "", // 이전에 입력된 숫자
  operation: null, // 현재 선택된 연산자 ("+", "-", "/", "*")
  isNewNumber: true, // 새로운 숫자 입력 여부
};

export default function Calculator() {
  const [calculatorState, setCalculatorState] =
    useState<CalculatorState>(initialData);

  // 'C'를 클릭했을 때 실행되는 함수
  const handleClear = () => {
    setCalculatorState(initialData);
  };

  // "+", "-", "*", "/", "=" 클릭했을 때 실행되는 함수
  const handleOperator = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    console.log(e.currentTarget.value);
    const operator = e.currentTarget.value;
    setCalculatorState((calculatorState) => {
      const current = parseFloat(calculatorState.currentNumber);
      if (calculatorState.previousNumber && calculatorState.operation) {
        const prev = parseFloat(calculatorState.previousNumber);
        const result = performCalculation(
          prev,
          current,
          calculatorState.operation
        );
        return operator === "="
          ? {
              currentNumber: result.toString(),
              previousNumber: "",
              operation: null,
              isNewNumber: true,
            }
          : {
              currentNumber: "",
              previousNumber: result.toString(),
              operation: operator,
              isNewNumber: true,
            };
      } else if (operator === "=") {
        return { ...calculatorState, isNewNumber: true };
      } else {
        return {
          currentNumber: "",
          previousNumber: current.toString(),
          operation: operator,
          isNewNumber: true,
        };
      }
    });
  };

  // 0 ~ 9 까지 클릭햇을 때 실행되는 함수
  const handleNum = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    console.log(e.currentTarget.value);
    const value = e.currentTarget.value; // 문자열
    setCalculatorState((calculatorState) => ({
      ...calculatorState,
      currentNumber: calculatorState.isNewNumber
        ? value
        : calculatorState.currentNumber + value,
      isNewNumber: false,
    }));
  };

  // . 클릭했을 때 실행되는 함수
  const handleDot = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    console.log(e.currentTarget.value);
    setCalculatorState((calculatorState) => {
      if (calculatorState.currentNumber.includes(".")) return calculatorState;
      return {
        ...calculatorState,
        currentNumber: calculatorState.currentNumber + ".",
        isNewNumber: false,
      };
    });
  };

  const buttonConfigs: ButtonConfigs[] = [
    { value: "C", className: "calc-clear", onClick: handleClear },
    { value: "/", className: "calc-operator", onClick: handleOperator },
    { value: "1", className: "calc-num", onClick: handleNum },
    { value: "2", className: "calc-num", onClick: handleNum },
    { value: "3", className: "calc-num", onClick: handleNum },
    { value: "*", className: "calc-operator", onClick: handleOperator },
    { value: "4", className: "calc-num", onClick: handleNum },
    { value: "5", className: "calc-num", onClick: handleNum },
    { value: "6", className: "calc-num", onClick: handleNum },
    { value: "+", className: "calc-operator", onClick: handleOperator },
    { value: "7", className: "calc-num", onClick: handleNum },
    { value: "8", className: "calc-num", onClick: handleNum },
    { value: "9", className: "calc-num", onClick: handleNum },
    { value: "-", className: "calc-operator", onClick: handleOperator },
    { value: ".", className: "calc-dot", onClick: handleDot },
    { value: "0", className: "calc-num", onClick: handleNum },
    { value: "=", className: "calc-result", onClick: handleOperator },
  ];

  return (
    <>
      <div className="bg-[#1f1f1f] flex items-center justify-center h-screen ">
        <article className="w-[282px] border border-[#333] border-solid bg-[#ccc] p-1">
          <form
            name="forms"
            className="grid grid-cols-[repeat(4, 65px)] auto-rows-[65px] gap-1"
          >
            <input
              type="text"
              className="calc-input"
              name="output"
              readOnly
              value={calculatorState.currentNumber}
            />
            {buttonConfigs.map((button) => (
              <CalculatorButton key={button.value} {...button} />
            ))}
          </form>
        </article>
      </div>
    </>
  );
}
