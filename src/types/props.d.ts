interface PrintValueProps {
  numberValue: number;
  stringValue: string;
  booleanValue: boolean;
  arrayValue: number[];
  objectValue: { name: string; age: number };
  handleClick: () => void;
}

interface UserProfileProps {
  name: string;
  age: number;
  isAdmin: boolean;
}

type ButtonConfigs = {
  value: string;
  className: string;
  onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};

type CalculatorState = {
  currentNumber: string;
  previousNumber: string;
  operation: null | string;
  isNewNumber: boolean;
};
