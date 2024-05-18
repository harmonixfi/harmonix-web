import { GithubIcon, TelegramIcon, TwitterIcon } from '../icons';
import BackToTop from './BackToTop';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#002DE6] to-[#0032FF] text-white px-12 lg:px-24 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
        <h2 className="w-full 2xl:w-3/4 text-center sm:text-left text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-bold uppercase">
          Secure Your Wealth, Earn More with Automated Hedging
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0">
          <div className="flex justify-center sm:justify-start md:justify-end">
            <div className="flex flex-col items-center gap-3 lg:gap-6">
              <p className="font-bold uppercase opacity-50 text-sm lg:text-base">About</p>
              <ul className="space-y-2 lg:space-y-3">
                <li className="font-light">Faq</li>
                <li className="font-light">Blog</li>
                <li className="font-light">Team</li>
                <li className="font-light">Audit</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="flex flex-col items-center gap-3 lg:gap-6">
              <p className="font-bold uppercase opacity-50 text-sm lg:text-base">Community</p>
              <ul className="space-y-2 lg:space-y-3">
                <li className="font-light">Github</li>
                <li className="font-light">Discord</li>
                <li className="font-light">Twitter</li>
              </ul>
            </div>
          </div>
          <p className="font-bold uppercase text-center sm:text-right text-sm lg:text-base">
            Dashboard
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mt-8">
        <div className="space-y-3 lg:space-y-6">
          <p className="uppercase font-bold opacity-50 text-center sm:text-left">Follow us on</p>
          <ul className="flex gap-3">
            <li>
              <a
                href=""
                target="_blank"
                className="w-10 h-10 relative block border border-white border-opacity-50 rounded-full transition duration-150 ease-in-out hover:bg-white hover:text-[#0032FF]"
              >
                <TwitterIcon className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                className="w-10 h-10 relative block border border-white border-opacity-50 rounded-full transition duration-150 ease-in-out hover:bg-white hover:text-[#0032FF]"
              >
                <TelegramIcon className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                className="w-10 h-10 relative block border border-white border-opacity-50 rounded-full transition duration-150 ease-in-out hover:bg-white hover:text-[#0032FF]"
              >
                <GithubIcon className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </a>
            </li>
          </ul>
        </div>
        <p className="text-8xl lg:text-[160px] 2xl:text-[190px] font-bold uppercase opacity-20">
          ONYX
        </p>
      </div>

      <div
        className="w-full h-0.5 opacity-40 my-8"
        style={{ background: 'linear-gradient(90deg, #0032FF 0%, #FFF 57.5%, #0032FF 100%)' }}
      />

      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <p className="opacity-80 font-light text-sm">{`© Copyright • Rock Onyx • ${new Date().getFullYear()}`}</p>
        <BackToTop />
      </div>
    </footer>
  );
};

export default Footer;
