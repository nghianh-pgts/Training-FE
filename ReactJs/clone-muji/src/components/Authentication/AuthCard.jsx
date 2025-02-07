import React from "react";

const AuthCard = ({ title, children }) => {
  return (
    <div className="flex container px-2 py-10 lg:py-20 justify-center">
      <div className="w-full max-w-[440px] min-w-80 shadow-lg p-3 md:p-6 flex flex-col text-left rounded-md">
        <div className="w-full">
          <h1 className="text-2xl font-semibold md:text-[25px] tracking-tight">
            {title}
          </h1>
          <div className="w-full flex flex-col pt-4 gap-4 ">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
