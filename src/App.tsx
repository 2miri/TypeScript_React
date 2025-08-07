import ButtonGroup from "./components/ButtonGroup";
import { initialButtons } from "./data/initialData";
export default function App() {
  return (
    <>
      <ButtonGroup buttons={initialButtons} />
    </>
  );
}
