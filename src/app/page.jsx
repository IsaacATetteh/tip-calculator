import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-[#C5E4E7] font-mono">
      <div className="w-[800px] h-[400px] bg-[#ffffff] rounded-3xl flex justify-center items-center gap-10">
        <div className="border-black border-2 w-[43%] h-[90%]">
          <label htmlFor="">Bill</label>
          <input
            type="text"
            name=""
            className="w-full h-8 border-2 border-[#58A59B] bg-[#F3F8FB] rounded-sm"
            placeholder="$"
          />
        </div>
        <div className="border-black border-2 w-[43%] h-[90%]"></div>
      </div>
    </div>
  );
}
