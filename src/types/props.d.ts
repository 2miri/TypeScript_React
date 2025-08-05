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
