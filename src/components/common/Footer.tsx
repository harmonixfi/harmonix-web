import { Button } from '@nextui-org/react';

import { GithubIcon, TelegramIcon, TwitterIcon } from '../icons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#002DE6] to-[#0032FF] text-white px-24 py-12">
      <div className="grid grid-cols-2">
        <h2 className="w-3/4 text-6xl font-bold uppercase leading-tight">
          Secure Your Wealth, Earn More with Automated Hedging
        </h2>
        <div className="grid grid-cols-3">
          <div className="flex flex-col items-center gap-6">
            <p className="font-bold uppercase opacity-50">About</p>
            <ul className="space-y-3">
              <li className="font-light">Faq</li>
              <li className="font-light">Blog</li>
              <li className="font-light">Team</li>
              <li className="font-light">Audit</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-6">
            <p className="font-bold uppercase opacity-50">Community</p>
            <ul className="space-y-3">
              <li className="font-light">Github</li>
              <li className="font-light">Discord</li>
              <li className="font-light">Twitter</li>
            </ul>
          </div>
          <p className="font-bold uppercase text-center">Dashboard</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-6">
          <p className="uppercase font-bold opacity-50">Follow us on</p>
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
        <p className="text-[190px] font-bold uppercase opacity-20">ONYX</p>
      </div>

      <div
        className="w-full h-0.5 opacity-40 mb-8"
        style={{ background: 'linear-gradient(90deg, #0032FF 0%, #FFF 57.5%, #0032FF 100%)' }}
      />

      <div className="flex items-center justify-between">
        <p className="opacity-80 font-light text-sm">{`© Copyright • Rock Onyx • ${new Date().getFullYear()}`}</p>
        <Button variant="flat">Back to top</Button>
      </div>
    </footer>
  );
};

export default Footer;
