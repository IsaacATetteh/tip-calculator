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
          <div className="border-black border-2 w-100 h-28 grid grid-cols-3 grid-rows-2 gap-2 items-center justify-center">
            <div className="w-[100px] h-11 bg-[#00474B] text-white  rounded-md flex items-center justify-center">
              <p className="">5%</p>
            </div>
            <div className="w-30 h-10 border-black border-2">1</div>
            <div className="w-30 h-10 border-black border-2">1</div>
            <div className="w-30 h-10 border-black border-2">1</div>
            <div className="w-30 h-10 border-black border-2">1</div>
            <div className="w-30 h-10 border-black border-2">1</div>
          </div>
        </div>
        <div className="border-black border-2 w-[43%] h-[90%]"></div>
      </div>
    </div>
  );
}
