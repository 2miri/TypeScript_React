import CalculatorButton from "./CalculatorButton";

export default function Calculator() {
  const handleClear = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    console.log(e.currentTarget.value);
  };
  const handleOperator = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    console.log(e.currentTarget.value);
  };
  const handleNum = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    console.log(e.currentTarget.value);
  };
  const handleDot = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    console.log(e.currentTarget.value);
  };
  const buttonConfigs = [
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
            <input type="text" className="calc-input" name="output" readOnly />
            {buttonConfigs.map((button) => (
              <CalculatorButton key={button.value} {...button} />
            ))}
          </form>
        </article>
      </div>
    </>
  );
}
