import cat from "./assets/images/cat.jpg";
export default function App() {
  return (
    <>
      {/* <div className="bg"></div> */}
      <div className="bg-[url(https://cdn.pixabay.com/photo/2025/07/31/20/00/woman-9747618_1280.jpg)] w-[400px] h-[400px]"></div>
      <div className="bg-[url(/images/cat.jpg)] w-[400px] h-[400px]"></div>
      <div
        className={`w-[400px] h-[400px]`}
        style={{ backgroundImage: `url(${cat})` }}
      ></div>
    </>
  );
}
