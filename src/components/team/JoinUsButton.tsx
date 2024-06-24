const JoinUsButton = () => {
  return (
    <div className="flex items-center gap-4 w-full sm:w-4/5 lg:w-2/3 xl:w-1/2 2xl:w-[600px] h-32 sm:h-40 lg:h-48 rounded-full bg-primary px-4 mx-auto z-30 overflow-hidden">
      <button
        type="button"
        className="group peer flex flex-col items-center justify-center bg-[#DAF4EC] shrink-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full text-primary text-xl text-opacity-80 transition-width duration-500 ease-in-out hover:w-full"
      >
        <p className="text-base block group-hover:hidden">Email us</p>
        <p className="text-base hidden group-hover:block">Send us your CV</p>
        <p className="text-3xl font-light hidden group-hover:block">hello@harmonix.fi</p>
      </button>
      <p className="text-secondary text-sm sm:text-base lg:text-xl font-extralight transition-all duration-700 ease-out peer-hover:opacity-0 peer-hover:scale-75 peer-hover:w-0 peer-hover:h-0">
        To learn more about the opportunities available and how you can contribute to our journey at
        Harmonix.
      </p>
    </div>
  );
};

export default JoinUsButton;
