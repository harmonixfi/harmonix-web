const JoinUsButton = () => {
  return (
    <div className="flex items-center gap-4 w-1/3 h-48 rounded-full bg-primary px-4 mx-auto overflow-hidden">
      <button
        type="button"
        className="group peer flex flex-col items-center justify-center bg-[#DAF4EC] shrink-0 w-40 h-40 rounded-full text-primary text-xl text-opacity-80 transition-width duration-500 ease-in-out hover:w-full"
      >
        <p className="text-base block group-hover:hidden">Email us</p>
        <p className="text-base hidden group-hover:block">Send us your CV</p>
        <p className="text-3xl font-light hidden group-hover:block">hello@harmonix.fi</p>
      </button>
      <p className="text-secondary text-xl font-extralight transition-all duration-700 ease-out peer-hover:opacity-0 peer-hover:scale-75 peer-hover:w-0 peer-hover:h-0">
        To learn more about the opportunities available and how you can contribute to our journey at
        Harmonix.
      </p>
    </div>
  );
};

export default JoinUsButton;
