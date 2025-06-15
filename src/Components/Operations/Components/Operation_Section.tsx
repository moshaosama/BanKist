import { MdOutlineFileUpload } from "react-icons/md";
import Operation_Section_Style from "../Modules/Operation_Section.module.css";
import { useClickBtnOperations } from "../../../Hooks/useClickBtnOperations";
import { IoHomeOutline } from "react-icons/io5";
import { BsFillPersonXFill } from "react-icons/bs";
import clsx from "clsx";
import globalStyle from "../../../Styles/global.module.css";
import IntroSection from "../../IntroSection/IntroSection";
import useSetAnimation from "../../../Hooks/useSetAnimation";
const Operation_Section = () => {
  const { Transfers_Btn, Loan_Btn, Closing_Btn } = Operation_Section_Style;
  const { hr } = globalStyle;
  const {
    handleOpenisClosing,
    handleOpenisLoan,
    handleOpenisTransfers,
    isClosing,
    isLoan,
    isTransfers,
    ActiveBtn,
  } = useClickBtnOperations();
  const { isTransiton } = useSetAnimation(1700);
  return (
    <>
      <div
        id="Operation"
        className={clsx(
          "transition-all duration-700 max-sm:my-52",
          isTransiton
            ? "opacity-100 relative top-0"
            : "opacity-0 relative top-20"
        )}
      >
        <IntroSection
          Header="Operations"
          Description="Everything as simple as possible, but no simpler."
        />
        <div className="flex flex-col relative items-center justify-center mt-10 mb-60">
          <div className="flex gap-5 z-40">
            <div
              className={clsx(
                Transfers_Btn,
                "transition-all duration-500",
                ActiveBtn === "Transfers"
                  ? "relative bottom-5"
                  : "relative bottom-0"
              )}
              onClick={handleOpenisTransfers}
            >
              <button className="cursor-pointer text-[#444]">
                01. instant Transfers
              </button>
            </div>
            <div
              className={clsx(
                Loan_Btn,
                "transition-all duration-500",
                ActiveBtn === "Loan" ? "relative bottom-5" : "relative bottom-0"
              )}
              onClick={handleOpenisLoan}
            >
              <button className="cursor-pointer text-[#444]">
                02. instant Loan
              </button>
            </div>
            <div
              className={clsx(
                Closing_Btn,
                "transition-all duration-500",
                ActiveBtn === "Closing"
                  ? "relative bottom-5"
                  : "relative bottom-0"
              )}
              onClick={handleOpenisClosing}
            >
              <button className="cursor-pointer text-[#444]">
                03. instant Closing
              </button>
            </div>
          </div>

          {isTransfers && (
            <div className="bg-white absolute top-5 flex gap-5 w-[65pc] max-sm:w-full max-sm:h-80 max-sm:mt-24 h-40 p-5 rounded-xl shadow-2xl my-5">
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
                <h1 className="text-xl font-bold text-[#444]">
                  Transfer money to anyone, instantly! No fees, no BS.
                </h1>
                <p className="font-semibold text-[#444]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          )}

          {isLoan && (
            <div className="bg-white absolute top-5 flex gap-5 w-[65pc] max-sm:w-full max-sm:h-80 max-sm:mt-24 h-40 p-5 rounded-xl shadow-2xl my-5">
              <div
                style={{
                  backgroundColor: "var(--primary-bg-color)",
                  width: "fit-content",
                  padding: "10px",
                  borderRadius: "10pc",
                  height: "50px",
                }}
              >
                <IoHomeOutline size={30} />
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-xl font-bold text-[#444]">
                  Buy a home or make your dreams come true, with instant loans.
                </h1>
                <p className="font-semibold text-[#444]">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          )}

          {isClosing && (
            <div className="bg-white absolute top-5 flex gap-5 w-[65pc] max-sm:w-full max-sm:h-80 max-sm:mt-24 h-40 p-5 rounded-xl shadow-2xl my-5">
              <div
                style={{
                  backgroundColor: "var(--red-color)",
                  width: "fit-content",
                  padding: "10px",
                  borderRadius: "10pc",
                  height: "50px",
                }}
              >
                <BsFillPersonXFill size={30} />
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-xl font-bold text-[#444]">
                  No longer need your account? No problem! Close it instantly.
                </h1>
                <p className="font-semibold text-[#444]">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="my-28">
          <hr className={hr} />
        </div>
      </div>
    </>
  );
};

export default Operation_Section;
