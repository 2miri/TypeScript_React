import { useThemeAction } from "../context/theme/useTheme";

export default function ThemeButton() {
  console.log("ThemeButton");

  const { changeTheme } = useThemeAction();
  return (
    <>
      <button onClick={changeTheme}>테마 변경</button>
    </>
  );
}
