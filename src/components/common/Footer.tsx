import Link from 'next/link';

import { BrandTextIcon, FlatLogoIcon, GithubIcon, TelegramIcon, TwitterIcon } from '../icons';
import BackToTop from './BackToTop';

const menuItems = [
  {
    text: 'About',
    items: [
      { text: 'Faq', link: '' },
      { text: 'Blog', link: '' },
      { text: 'Team', link: '' },
      { text: 'Audit', link: '' },
    ],
  },
  {
    text: 'Community',
    items: [
      { icon: GithubIcon, text: 'Github', link: '' },
      { icon: TelegramIcon, text: 'Telegram', link: '' },
      { icon: TwitterIcon, text: 'Twitter', link: '' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white px-12 lg:px-24 py-12 space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
        <div>
          <FlatLogoIcon className="w-auto h-16 mb-6 mx-auto sm:mx-0" />
          <h2 className="w-full 2xl:w-1/2 text-off-white font-normal text-2xl capitalize text-center sm:text-left">
            Secure Your Wealth, Earn More with Automated Hedging
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6">
          {menuItems.map((menuItem, index) => (
            <div
              key={menuItem.text}
              className={`flex ${index === 0 ? 'justify-center sm:justify-start xl:justify-end' : 'justify-center xl:justify-end'}`}
            >
              <div className="flex flex-col items-center gap-6">
                <p className="font-normal text-xl text-secondary">{menuItem.text}</p>
                <ul className="space-y-6">
                  {menuItem.items?.map((item) => (
                    <li key={item.text}>
                      <Link
                        href={item.link}
                        className="flex items-center gap-2 font-normal text-xl text-off-white"
                      >
                        {'icon' in item && <item.icon className="w-6 h-6" />}
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="flex justify-center sm:justify-end">
            <div className="flex flex-col gap-6">
              <Link href="" className="font-normal text-xl text-secondary">
                Dashboard
              </Link>
              <Link href="" className="font-normal text-xl text-secondary">
                Docs
              </Link>
            </div>
          </div>
        </div>
      </div>

      <BrandTextIcon className="w-full h-auto" />

      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <p className="text-off-white font-light text-sm">{`©${new Date().getFullYear()} Harmonix`}</p>
        <BackToTop />
      </div>
    </footer>
  );
};

export default Footer;
