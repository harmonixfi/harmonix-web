import { FooterLineIcon } from "~/components/icons";

const WhatWeSolve = () => {
  return (
    <div className="bg-[#EDF9F2] py-28">
      <div className="flex flex-col items-center gap-16 w-full sm:w-5/6 lg:w-3/4 xl:w-2/3 mx-auto">
        <h3 className="text-primary text-4xl sm:text-6xl font-medium text-center capitalize">
          The Pain Points We Solve
        </h3>
        <div className="grid md:grid-cols-3 gap-8 px-6 sm:px-0">
          <div className="relative bg-[#D2E9E9] rounded-xl p-8">
            <p className="text-xl font-semibold mb-2">Complexity</p>
            <p className="text-[#3C3D37] font-light">
              Traditional hedge fund strategies are intricate and require
              constant monitoring. Harmonix simplifies the process –Just deposit
              into an automated vault and start earning.
            </p>
            <FooterLineIcon className="absolute w-auto h-2/3 bottom-0 right-0 z-10" />
          </div>

          <div className="bg-[#D2E9E9] rounded-xl p-8">
            <p className="text-xl font-semibold mb-2">Accessibility</p>
            <p className="text-[#3C3D37] font-light">
              Complicated KYC process, huge upfront investments and account
              minimums often exclude average investors. Harmonix removes these
              barriers and allows anyone to participate.
            </p>
          </div>

          <div className="bg-[#D2E9E9] rounded-xl p-8">
            <p className="text-xl font-semibold mb-2">Trust and Security</p>
            <p className="text-[#3C3D37] font-light">
              Centralized platforms raise concerns about custody and potential
              misuse of your assets. Harmonix operates on-chain, ensuring
              transparency and complete control over your funds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeSolve;
