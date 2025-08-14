import { useDispatch } from "react-redux";

export default function ThemeButton() {
  const disPath = useDispatch();
  return (
    <>
      <button onClick={() => disPath({ type: "themeSlice/changeTheme" })}>
        테마변경
      </button>
    </>
  );
}
