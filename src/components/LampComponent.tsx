import lampOff from "../assets/images/lamp_off.png";
import lampOn from "../assets/images/lamp_on.png";

import { useState } from "react";

export default function LampComponent() {
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      <div
        // public 방법 1
        // className={
        //   isClick
        //     ? "bg-[url(/images/lamp_on.png)] w-[250px] h-[250px]"
        //     : "bg-[url(/images/lamp_off.png)] w-[250px] h-[250px]"
        // }

        // public 방법 2
        // className="w-[250px] h-[250px]"
        // style={{
        //   backgroundImage: `url(/images/lamp_${isClick ? "on" : "off"}.png`,
        // }}

        // assets 방법 3
        className="w-[250px] h-[250px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${isClick ? lampOn : lampOff})`,
        }}
        onClick={() => setIsClick((isClick) => !isClick)}
      />
    </>
  );
}
