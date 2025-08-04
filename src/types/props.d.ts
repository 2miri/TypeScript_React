type PrintValueProps = {
  numberValue: number;
  stringValue: string;
  booleanValue: boolean;
  arrayValue: number[];
  objectValue: { name: string; age: number };
  handleClick: () => void;
};

type UserProfileProps = {
  name: string;
  age: number;
  isAdmin: boolean;
};
