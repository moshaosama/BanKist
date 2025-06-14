import { useState } from "react";

export const useClickBtnOperations = () => {
  //   Transfers
  // Loan
  // Closing
  const [isTransfers, setIsTransfers] = useState<boolean>(true);
  const [isLoan, setIsLoan] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [ActiveBtn, setActiveBtn] = useState<"Transfers" | "Loan" | "Closing">(
    "Transfers"
  );

  const handleOpenisTransfers = () => {
    setIsTransfers(true);
    setIsClosing(false);
    setIsLoan(false);
    setActiveBtn("Transfers");
  };

  const handleOpenisLoan = () => {
    setIsTransfers(false);
    setIsClosing(false);
    setIsLoan(true);
    setActiveBtn("Loan");
  };

  const handleOpenisClosing = () => {
    setIsTransfers(false);
    setIsClosing(true);
    setIsLoan(false);
    setActiveBtn("Closing");
  };

  return {
    isClosing,
    isTransfers,
    isLoan,
    ActiveBtn,
    handleOpenisClosing,
    handleOpenisLoan,
    handleOpenisTransfers,
  };
};
