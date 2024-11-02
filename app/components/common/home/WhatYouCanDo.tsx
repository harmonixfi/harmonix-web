const WhatYouCanDo = () => {
  return (
    <div className="flex flex-col items-center gap-24 w-full sm:w-5/6 lg:w-3/4 xl:w-2/3 mx-auto px-6 sm:px-0">
      <h3 className="text-primary text-4xl sm:text-6xl font-medium text-center">
        What You Can Do on Harmonix
      </h3>
      <div className="flex flex-col gap-32">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-16">
          <div>
            <p className="text-xl xl:text-3xl font-semibold mb-2">
              Deposit Your Crypto
            </p>
            <p className="text-[#373A40] text-lg xl:w-3/4">
              Choose from a variety of vaults, each employing a different
              strategy tailored to your risk tolerance and desired returns.
            </p>
          </div>
          <img
            src="/deposit.png"
            sizes="100%"
            alt="deposit"
            className="w-3/4 sm:w-1/2 h-auto rounded-3xl shadow-xl"
          />
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-20">
          <img
            src="/withdraw.png"
            sizes="100%"
            alt="withdraw"
            className="w-3/4 sm:w-1/2 2xl:w-1/3 h-auto rounded-3xl shadow-xl"
          />
          <div>
            <p className="text-xl xl:text-3xl font-semibold mb-2">
              Withdraw Anytime
            </p>
            <p className="text-[#373A40] text-lg xl:w-4/5">
              Harmonix allows you to withdraw your funds from vaults whenever
              you need them.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 items-center gap-16">
          <div>
            <p className="text-xl xl:text-3xl font-semibold mb-2">
              Monitor Your Performance
            </p>
            <p className="text-[#373A40] text-lg">
              Track your progress in real-time and see how your chosen vaults
              are performing.
            </p>
          </div>
          <img
            src="/position.png"
            sizes="100%"
            alt="performance"
            className="w-full h-auto rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatYouCanDo;
