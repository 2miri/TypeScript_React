import { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import { initialData, performCalculation } from "../utils/calculatorUtils";

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
    const operator = e.currentTarget.value;
    if (calculatorState.currentNumber === "" && operator) return;

    const current = parseFloat(calculatorState.currentNumber);
    setCalculatorState((calculatorState) => {
      if (calculatorState.previousNumber && calculatorState.operation) {
        const prev = parseFloat(calculatorState.previousNumber);
        const result = performCalculation(
          prev,
          current,
          calculatorState.operation
        ).toString();

        return operator === "="
          ? {
              previousNumber: "",
              currentNumber: result,
              operation: null,
              isNewNumber: true,
            }
          : {
              previousNumber: result,
              currentNumber: "",
              operation: operator,
              isNewNumber: true,
            };
      }

      if (operator === "=") {
        return { ...calculatorState, isNewNumber: true };
      }

      return {
        previousNumber: calculatorState.currentNumber,
        currentNumber: "",
        operation: operator,
        isNewNumber: true,
      };
    });
  };

  // 0 ~ 9 까지 클릭햇을 때 실행되는 함수
  const handleNum = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const current = e.currentTarget.value;
    setCalculatorState((calculatorState) => ({
      ...calculatorState,
      currentNumber: calculatorState.isNewNumber
        ? current
        : calculatorState.currentNumber + current,
      isNewNumber: false,
    }));
  };

  // . 클릭했을 때 실행되는 함수
  const handleDot = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    if (calculatorState.currentNumber.includes(".")) return;
    setCalculatorState((calculatorState) => ({
      ...calculatorState,
      currentNumber: calculatorState.currentNumber + ".",
      isNewNumber: false,
    }));
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
