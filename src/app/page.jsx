import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-[#C5E4E7] font-mono">
      <div className="w-[800px] h-[400px] bg-[#ffffff] rounded-3xl flex justify-center items-center gap-10">
        <div className="w-[43%] h-[90%]">
          <label htmlFor="">
            <p className="font-semibold text-gray-500 text-sm mt-5 mb-1">
              Bill
            </p>
          </label>
          <input
            type="text"
            name=""
            className="w-full h-10 border-2 border-[#58A59B] bg-[#F3F8FB] rounded-md"
            placeholder="$"
            style={{ padding: "10px" }}
          />
          <p className="font-semibold text-gray-500 text-sm mt-10 mb-1">
            Select Tip %
          </p>
          <div className="w-100 h-[100px] grid grid-cols-3 grid-rows-2 gap-1 items-center justify-center">
            <button className="w-[100px] h-10 bg-[#00474B] text-white rounded-md flex items-center justify-center font-semibold text-lg">
              <p className="">5%</p>
            </button>
            <button className="w-[100px] h-10 bg-[#00474B] text-white rounded-md flex items-center justify-center font-semibold text-lg">
              <p className="">10%</p>
            </button>
            <button className="w-[100px] h-10 bg-[#00474B] text-white rounded-md flex items-center justify-center font-semibold text-lg">
              <p className="">15%</p>
            </button>
            <button className="w-[100px] h-10 bg-[#00474B] text-white rounded-md flex items-center justify-center font-semibold text-lg">
              <p className="">20%</p>
            </button>
            <button className="w-[100px] h-10 bg-[#00474B] text-white rounded-md flex items-center justify-center font-semibold text-lg">
              <p className="">50%</p>
            </button>
            <input
              className="w-[100px] h-10 rounded-md border-2 border-[#58A59B] bg-[#F3F8FB] text-right text-lg"
              style={{ padding: "10px" }}
            />
          </div>
        </div>
        <div className="border-black border-2 w-[43%] h-[90%]"></div>
      </div>
    </div>
  );
}
