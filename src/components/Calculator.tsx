export default function Calculator() {
  return (
    <>
      <div className="bg-[#1f1f1f] flex items-center justify-center h-screen ">
        <article className="w-[282px] border border-[#333] border-solid bg-[#ccc] p-1">
          <form
            name="forms"
            className="grid grid-cols-[repeat(4, 65px)] auto-rows-[65px] gap-1"
          >
            <input type="text" className="calc-input" name="output" readOnly />
            <input type="button" value="C" className="calc-clear" />
            <input type="button" className="calc-operator" value="/" />
            <input type="button" className="calc-num" value="1" />
            <input type="button" className="calc-num" value="2" />
            <input type="button" className="calc-num" value="3" />
            <input type="button" className="calc-operator" value="*" />
            <input type="button" className="calc-num" value="4" />
            <input type="button" className="calc-num" value="5" />
            <input type="button" className="calc-num" value="6" />
            <input type="button" className="calc-operator" value="+" />
            <input type="button" className="calc-num" value="7" />
            <input type="button" className="calc-num" value="8" />
            <input type="button" className="calc-num" value="9" />
            <input type="button" className="calc-operator" value="-" />
            <input type="button" className="calc-dot" value="." />
            <input type="button" className="calc-num" value="0" />
            <input type="button" className="calc-result" value="=" />
          </form>
        </article>
      </div>
    </>
  );
}
