import Image from "next/image";

export default function Home() {
  const buttonStyles =
    "w-[100px] h-10 bg-[#00474B] text-white rounded-md flex items-center justify-center font-semibold text-lg transition duration-500 ease-in-out hover:bg-[#9FE8DF] hover:text-[#034A46]";

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
            type="number"
            name=""
            className="w-full h-10 border-2 border-[#58A59B] bg-[#F3F8FB] rounded-md text-right font-semibold text-[#093F3D] text-lg"
            style={{
              backgroundImage: `url('/icon-dollar.svg')`,
              backgroundSize: "10px 15px",
              backgroundPosition: "15px center",
              backgroundRepeat: "no-repeat",
              padding: "5px",
            }}
          />
          <p className="font-semibold text-gray-500 text-sm mt-10 mb-1">
            Select Tip %
          </p>
          <div className="w-100 h-[100px] grid grid-cols-3 grid-rows-2 gap-1 items-center justify-center">
            <button className={buttonStyles}>
              <p className="">5%</p>
            </button>
            <button className={buttonStyles}>
              <p className="">10%</p>
            </button>
            <button className={buttonStyles}>
              <p className="">15%</p>
            </button>
            <button className={buttonStyles}>
              <p className="">25%</p>
            </button>
            <button className={buttonStyles}>
              <p className="">50%</p>
            </button>
            <input
              className="w-[100px] h-10 rounded-md border-2 border-[#58A59B] bg-[#F3F8FB] text-right text-lg font-mono mr-20"
              style={{ padding: "10px" }}
              placeholder="Custom"
            />
          </div>
          <div className="h-[20%] w-[100%] mt-7">
            <label htmlFor="">
              <p className="font-semibold text-gray-500 text-sm mb-1">
                Number of People
              </p>
              <input
                type="number"
                name=""
                className="w-full h-10 border-2 border-[#58A59B] bg-[#F3F8FB] rounded-md text-right font-semibold text-[#093F3D] text-lg"
                style={{
                  backgroundImage: `url('/icon-person.svg')`,
                  backgroundPosition: "15px center",
                  backgroundRepeat: "no-repeat",
                  padding: "5px",
                }}
              />
            </label>
          </div>
        </div>
        <div className="border-black border-2 w-[43%] h-[90%] rounded-lg bg-[#00474B]">
          <div className=" w-[100%] h-[15%] mt-11 flex justify-between items-center">
            <div className="text-white pl-7">
              <p>Tip Amount</p>
              <p className="text-xs text-[#61989B]">/ person</p>
            </div>
            <p className="text-[#2DC4AE] font-semibold text-4xl pr-5">$2.70</p>
          </div>
          <div className=" w-[100%] h-[15%] mt-7 flex justify-between items-center">
            <div className="text-white pl-7">
              <p>Total</p>
              <p className="text-xs text-[#61989B]">/ person</p>
            </div>
            <p className="text-[#2DC4AE] font-semibold text-4xl pr-5">$2.70</p>
          </div>
          <div className="flex justify-center mt-[100px]">
            <button className=" w-72 h-10 rounded-sm bg-[#26C2AE] font-bold text-[#005956]  transition duration-500 ease-in-out hover:bg-[#9FE8DF]">
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
