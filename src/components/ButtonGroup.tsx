import { useState } from "react";
import styles from "./ButtonGroup.module.css";
import classNames from "classnames/bind";

interface ButtonsProp {
  id: number;
  label: string;
  icon: string;
  isDisabled: boolean;
}

export default function ButtonGroup({ buttons }: { buttons: ButtonsProp[] }) {
  const cx = classNames.bind(styles);
  const buttonActiveStates: { [key: number]: boolean } = {};
  buttons.forEach((btn) => {
    buttonActiveStates[btn.id] = false;
  });
  const [activeStates, setActiveStates] = useState(buttonActiveStates);

  function handleClick(id: number, isDisabled: boolean) {
    if (isDisabled) return;
    setActiveStates((activeStates) => ({
      ...activeStates,
      [id]: !activeStates[id],
    }));
  }

  function handleReset() {
    const resetActiveStates: { [key: number]: boolean } = {};
    buttons.forEach((button) => {
      resetActiveStates[button.id] = false;
    });
    setActiveStates(resetActiveStates);
  }

  const activeCount = Object.values(activeStates).filter(Boolean);

  return (
    <>
      <h1>Active Count: {activeCount}</h1>
      {buttons.map((button) => (
        <button
          key={button.id}
          className={cx("button", {
            disabled: button.isDisabled,
            highlight: button.id === 2,
            active: activeStates[button.id],
          })}
          onClick={() => handleClick(button.id, button.isDisabled)}
        >
          {button.icon + " " + button.label}
        </button>
      ))}

      <p>
        <button className={cx("button")} onClick={handleReset}>
          Reset
        </button>
      </p>
    </>
  );
}
