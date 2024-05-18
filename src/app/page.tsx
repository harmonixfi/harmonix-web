import { Button } from '@nextui-org/react';
import Image from 'next/image';

import { UsdcIcon, UsdtIcon } from '@/components/icons';

import nftImage from '../../public/images/main-nft.png';

export default function Home() {
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="flex flex-col gap-6 xl:gap-12 w-full xl:w-2/3 py-12 2xl:py-36">
          <div>
            <h1 className="text-8xl xl:text-9xl 2xl:text-[160px] leading-none font-bold uppercase">
              ROCK
            </h1>
            <h1 className="text-8xl xl:text-9xl 2xl:text-[160px] leading-none font-bold uppercase">
              ONYX
            </h1>
          </div>
          <p className="text-xl font-normal opacity-80">
            Sophisticated hedge fund strategies implemented on-chain, generating high yields and
            Eth/Btc airdrop points
          </p>
          <div>
            <Button color="primary" size="lg" className="rounded-full">
              Launch App
            </Button>
          </div>
        </div>
        <div className="w-full h-[560px] sm:h-[800px] md:h-[680px] lg:h-[500px] xl:h-[600px] 2xl:h-full relative rounded-3xl overflow-hidden">
          <Image
            src={nftImage}
            alt="Rock Onyx"
            priority
            fill
            sizes="100%"
            className="object-cover"
          />
          <Button
            className="absolute bottom-6 right-6 text-black rounded-full px-8"
            color="secondary"
          >
            Mint
          </Button>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <div className="flex items-center gap-6 bg-white rounded-full px-4 py-2.5 shadow-md">
          <div className="flex items-center gap-2">
            <UsdtIcon />
            <UsdcIcon />
          </div>
          <div>
            <p className="text-xs opacity-50">Rock Onyx TVL</p>
            <p className="text-3xl font-bold">
              {(3690).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
