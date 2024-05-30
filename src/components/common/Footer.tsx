import Link from 'next/link';

import {
  BrandTextIcon,
  FlatLogoIcon,
  FooterLineIcon,
  GithubIcon,
  TelegramIcon,
  TwitterIcon,
} from '../icons';
import BackToTop from './BackToTop';

const menuItems = [
  {
    text: 'About',
    items: [
      { text: 'Faq', link: '' },
      { text: 'Blog', link: 'https://mirror.xyz/0xa1e8a739166876845B7dEdc177989024bAB0D810' },
      { text: 'Team', link: '' },
      { text: 'Audit', link: '' },
    ],
  },
  {
    text: 'Community',
    items: [
      { icon: GithubIcon, text: 'Github', link: 'https://github.com/rock-onyx' },
      { icon: TelegramIcon, text: 'Telegram', link: 'http://t.me/rockonyx001' },
      { icon: TwitterIcon, text: 'Twitter', link: 'https://twitter.com/harmonixfi' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-primary text-white px-4 sm:px-12 lg:px-24 py-12 space-y-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-6 mt-8 sm:mt-14">
        <div className="lg:col-span-5">
          <FlatLogoIcon className="w-auto h-16 mb-6 mx-auto sm:mx-0" />
          <h2 className="w-full 2xl:w-2/3 text-off-white font-light text-2xl text-center sm:text-left">
            Secure Your Wealth, Earn More
          </h2>
          <h2 className="w-full 2xl:w-2/3 text-off-white font-light text-2xl text-center sm:text-left">
            with Automated Hedging
          </h2>
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 z-20">
          {menuItems.map((menuItem, index) => (
            <div
              key={menuItem.text}
              className={`flex ${index === 0 ? 'justify-center sm:justify-start xl:justify-end' : 'justify-center xl:justify-end'}`}
            >
              <div className="flex flex-col items-center gap-6">
                <p className="font-light text-xl text-secondary">{menuItem.text}</p>
                <ul className="space-y-6">
                  {menuItem.items?.map((item) => (
                    <li key={item.text}>
                      <Link
                        href={item.link}
                        target="_blank"
                        className="inline-flex items-center gap-2 font-light text-xl text-off-white hover-underline-animation after:bg-white"
                      >
                        {'icon' in item && <item.icon className="w-5 h-5" />}
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="flex justify-center sm:justify-end">
            <div className="space-y-6">
              <div>
                <Link
                  href="https://app.harmonix.fi/dashboards"
                  target="_blank"
                  className="inline-block font-light text-xl text-secondary hover-underline-animation after:bg-secondary"
                >
                  Dashboard
                </Link>
              </div>
              <div>
                <Link
                  href="https://rock-onyx.gitbook.io/rock-onyx-docs/"
                  target="_blank"
                  className="inline-block font-light text-xl text-secondary hover-underline-animation after:bg-secondary"
                >
                  Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BrandTextIcon className="w-full h-auto" />

      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <p className="text-off-white font-light text-sm">{`©${new Date().getFullYear()} Harmonix`}</p>
        <BackToTop />
      </div>

      <FooterLineIcon className="absolute w-auto h-full bottom-0 right-0 z-10" />
    </footer>
  );
};

export default Footer;
