export default function Calculator() {
  return (
    <>
      <div className="bg-[#1f1f1f] flex items-center justify-center h-screen ">
        <article className="w-[282px] border border-[#333] border-solid bg-[#ccc] p-1">
          <form
            name="forms"
            className="grid grid-cols-[repeat(4, 65px)] auto-rows-[65px] gap-1"
          >
            <input
              type="text"
              className="bg-white col-span-4 text-right px-2.5 border-2 border-[#333] cursor-pointer text-lg  hover:shadow-[1px_1px_2px_#333]"
              name="output"
              readOnly
            />
            <input
              type="button"
              className="bg-[red] col-span-3 border-2 border-[#333] cursor-pointer text-lg  hover:shadow-[1px_1px_2px_#333]"
              value="C"
            />
            <input
              type="button"
              className="bg-[orange] border-2 border-[#333] cursor-pointer text-lg  hover:shadow-[1px_1px_2px_#333]"
              value="/"
            />
            <input
              type="button"
              className="bg-white border-2 border-[#333] cursor-pointer text-lg  hover:shadow-[1px_1px_2px_#333]"
              value="1"
            />
            <input
              type="button"
              className="bg-white border-2 border-[#333] cursor-pointer text-lg  hover:shadow-[1px_1px_2px_#333]"
              value="2"
            />
            <input
              type="button"
              className="bg-white border-2 border-[#333] cursor-pointer text-lg  hover:shadow-[1px_1px_2px_#333]"
              value="3"
            />
            <input
              type="button"
              className="bg-[orange] border-2 border-[#333] cursor-pointer text-lg  hover:shadow-[1px_1px_2px_#333]"
              value="*"
            />
            <input
              type="button"
              className="bg-white border-2 border-[#333] cursor-pointer text-lg  hover:shadow-[1px_1px_2px_#333]"
              value="4"
            />
            <input
              type="button"
              className="bg-white border-2 border-[#333] cursor-pointer text-lg  hover:shadow-[1px_1px_2px_#333]"
              value="5"
            />
            <input
              type="button"
              className="bg-white border-2 border-[#333] cursor-pointer text-lg  hover:shadow-[1px_1px_2px_#333]"
              value="6"
            />
            <input
              type="button"
              className="bg-[orange] border-2 border-[#333] cursor-pointer text-lg  hover:shadow-[1px_1px_2px_#333]"
              value="+"
            />
            <input
              type="button"
              className="bg-white border-2 border-[#333] cursor-pointer text-lg  hover:shadow-[1px_1px_2px_#333]"
              value="7"
            />
            <input
              type="button"
              className="bg-white border-2 border-[#333] cursor-pointer text-lg  hover:shadow-[1px_1px_2px_#333]"
              value="8"
            />
            <input
              type="button"
              className="bg-white border-2 border-[#333] cursor-pointer text-lg  hover:shadow-[1px_1px_2px_#333]"
              value="9"
            />
            <input
              type="button"
              className="bg-[orange] border-2 border-[#333] cursor-pointer text-lg  hover:shadow-[1px_1px_2px_#333]"
              value="-"
            />
            <input
              type="button"
              className="bg-[green] border-2 border-[#333] cursor-pointer text-lg  hover:shadow-[1px_1px_2px_#333]"
              value="."
            />
            <input
              type="button"
              className="bg-white border-2 border-[#333] cursor-pointer text-lg  hover:shadow-[1px_1px_2px_#333]"
              value="0"
            />
            <input
              type="button"
              className="bg-[orange] col-span-2 border-2 border-[#333] cursor-pointer text-lg  hover:shadow-[1px_1px_2px_#333]"
              value="="
            />
          </form>
        </article>
      </div>
    </>
  );
}
