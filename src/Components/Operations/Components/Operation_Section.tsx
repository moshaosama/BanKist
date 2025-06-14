import { MdOutlineFileUpload } from "react-icons/md";
import Operation_Section_Style from "../Modules/Operation_Section.module.css";
const Operation_Section = () => {
  const { Transfers_Btn, Loan_Btn, Closing_Btn } = Operation_Section_Style;
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex gap-5">
          <div className={Transfers_Btn}>
            <button className="cursor-pointer">01. instant Transfers</button>
          </div>
          <div className={Loan_Btn}>
            <button className="cursor-pointer">02. instant Loan</button>
          </div>
          <div className={Closing_Btn}>
            <button className="cursor-pointer">03. instant Closing</button>
          </div>
        </div>

        <div className="bg-white flex gap-5 w-[65pc] h-40 p-5 rounded-xl shadow-2xl my-5">
          <div
            style={{
              backgroundColor: "var(--yello-color)",
              width: "fit-content",
              padding: "10px",
              borderRadius: "10pc",
              height: "50px",
            }}
          >
            <MdOutlineFileUpload size={30} />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-bold">
              Transfer money to anyone, instantly! No fees, no BS.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Operation_Section;
