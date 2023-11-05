"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const buttonStyles =
    "w-[100px] h-10 bg-[#00474B] text-white rounded-md flex items-center justify-center font-semibold text-lg transition duration-500 ease-in-out focus:bg-[#26C2AE] focus:text-black hover:bg-[#9FE8DF] hover:text-[#034A46]";
  const [tipAmount, setAmount] = useState("$0.00");
  const [total, setTotal] = useState("$0.00");
  const [pError, peopleError] = useState(false);

  function reset() {
    document.getElementById("bill").value = "";
    document.getElementById("people").value = "";
    document.getElementById("custom").value = "";
    peopleError(false);
    setTotal("$0.00");
    setAmount("$0.00");
  }

  function calculateTip(percentage) {
    const people = parseInt(document.getElementById("people").value, 10) || 0;
    const billInput =
      parseFloat(document.getElementById("bill").value, 10) || 1;

    peopleError(false);

    if (isNaN(percentage)) {
      return;
    }

    const tipAmount = (billInput * percentage) / 100;
    const total = (billInput + tipAmount) / people;

    if (people <= 0) {
      peopleError(true);
      return;
    }

    if ((isNaN(tipAmount) && isNaN(tip)) || billInput < 0) {
      return;
    }

    setTotal("$" + total.toFixed(2));
    setAmount("$" + (tipAmount / people).toFixed(2));
  }

  function recalculateTip() {
    const tipPercentage =
      parseFloat(document.getElementById("custom").value) || 0;
    calculateTip(tipPercentage);
  }

  return (
    <div className="w-full h-full flex justify-center items-center bg-[#C5E4E7] font-mono">
      <div className="w-[800px] h-[400px] bg-[#ffffff] rounded-3xl flex justify-center items-center gap-10">
        <div className="w-[43%] h-[90%]">
          <div className="absolute">
            <Image src="/logo.svg" alt="Splitter" width={75} height={75} />
          </div>
          <label htmlFor="">
            <p className="font-semibold text-gray-500 text-sm mt-5 mb-1">
              Bill
            </p>
          </label>
          <input
            type="number"
            name=""
            id="bill"
            className="w-full h-10 focus:border-2 focus:border-[#58A59B] outline-none bg-[#F3F8FB] rounded-md text-right font-semibold text-[#093F3D] text-lg"
            placeholder="0"
            style={{
              backgroundImage: `url('/icon-dollar.svg')`,
              backgroundSize: "10px 15px",
              backgroundPosition: "15px center",
              backgroundRepeat: "no-repeat",
              padding: "5px",
            }}
            min="0"
            onChange={recalculateTip}
          />
          <p className="font-semibold text-gray-500 text-sm mt-10 mb-1">
            Select Tip %
          </p>
          <div className="w-100 h-[100px] grid grid-cols-3 grid-rows-2 gap-1 items-center justify-center">
            <button className={buttonStyles} onClick={() => calculateTip(5)}>
              <p className="">5%</p>
            </button>
            <button className={buttonStyles} onClick={() => calculateTip(10)}>
              <p className="">10%</p>
            </button>
            <button className={buttonStyles} onClick={() => calculateTip(15)}>
              <p className="">15%</p>
            </button>
            <button className={buttonStyles} onClick={() => calculateTip(25)}>
              <p className="">25%</p>
            </button>
            <button className={buttonStyles} onClick={() => calculateTip(50)}>
              <p className="">50%</p>
            </button>
            <input
              className="w-[100px] h-10 rounded-md border-2 border-[#58A59B] bg-[#F3F8FB] text-right text-lg font-mono mr-20"
              style={{ padding: "10px" }}
              placeholder="Custom"
              id="custom"
              onChange={(e) => calculateTip(parseFloat(e.target.value))}
            />
          </div>
          <div className="h-[20%] w-[100%] mt-7">
            <label htmlFor="">
              <p className="font-semibold text-gray-500 text-sm mb-1 inline">
                Number of People
              </p>
              {pError && (
                <p className="inline text-red-500 ml-[99px] font-semibold text-sm">
                  Can't be zero
                </p>
              )}
              <input
                type="number"
                name=""
                id="people"
                className={`w-full h-10 focus:border-2 focus:border-[#58A59B] outline-none bg-[#F3F8FB] rounded-md text-right font-semibold text-[#093F3D] text-lg ${
                  pError ? "border-red-500 border-2" : "border-[#58A59B]"
                }`}
                placeholder="0"
                style={{
                  backgroundImage: `url('/icon-person.svg')`,
                  backgroundPosition: "15px center",
                  backgroundRepeat: "no-repeat",
                  padding: "5px",
                }}
                min="0"
                onChange={recalculateTip}
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
            <p className="text-[#2DC4AE] font-semibold text-4xl pr-5">
              {tipAmount}
            </p>
          </div>
          <div className=" w-[100%] h-[15%] mt-7 flex justify-between items-center">
            <div className="text-white pl-7">
              <p>Total</p>
              <p className="text-xs text-[#61989B]">/ person</p>
            </div>
            <p className="text-[#2DC4AE] font-semibold text-4xl pr-5">
              {total}
            </p>
          </div>
          <div className="flex justify-center mt-[100px]">
            <button
              className=" w-72 h-10 rounded-sm bg-[#26C2AE] font-bold text-[#005956]  transition duration-500 ease-in-out hover:bg-[#9FE8DF]"
              onClick={reset}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
