import { useState } from "react";
import Switch from "react-switch";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

export default function ThemeSwitcher() {
  const [change, setChange] = useState(true);
  const HandleChange = () => {
    setChange(!change);
  };
  return (
    <label>
      <Switch
        onChange={HandleChange}
        checked={change}
        onColor="#353945"
        offColor="#353945"
        offHandleColor="#3772FF"
        onHandleColor="#3772FF"
        uncheckedIcon={
          <MoonIcon color="#808191" height={20} style={{ margin: "3px" }} />
        }
        checkedIcon={
          <SunIcon color="#808191" height={20} style={{ margin: "3px" }} />
        }
        // width={60}
        // height={30}
        handleDiameter={20}
      ></Switch>
    </label>
  );
}
