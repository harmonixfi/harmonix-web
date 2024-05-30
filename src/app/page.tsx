import { Button } from '@nextui-org/react';
import Link from 'next/link';

import { getVaultsOverview } from '@/api/vault';
import {
  Ellipse1Icon,
  Ellipse2Icon,
  Ellipse3Icon,
  Ellipse4Icon,
  Ellipse5Icon,
  Ellipse6Icon,
  Ellipse7Icon,
  HomeGridIcon,
  UsdcIcon,
  UsdtIcon,
} from '@/components/icons';

async function getData() {
  const response = await getVaultsOverview();
  return response;
}

export default async function Home() {
  const vaultsOverview = await getData();

  return (
    <div className="pt-16 sm:pt-28">
      <div className="w-full lg:w-3/4 xl:w-4/5 mx-auto flex flex-col items-center gap-12">
        <h1 className="block sm:hidden xl:block text-7xl font-light capitalize text-center">
          Crypto Investment On Autopilot 
        </h1>
        <div className="hidden sm:block xl:hidden">
          <h1 className="text-7xl font-light capitalize text-center">Crypto Investment</h1>
          <h1 className="text-7xl font-light capitalize text-center">On Autopilot </h1>
        </div>
        <p className="w-5/6 text-2xl font-light text-center opacity-80">
          Efficient capital deployment for busy investors
        </p>
        <Button
          as={Link}
          color="primary"
          size="lg"
          className="rounded-full text-secondary px-6"
          href="https://app.harmonix.fi"
          target="_blank"
        >
          Launch App
        </Button>
      </div>

      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] sm:mt-12 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-4/5 sm:w-3/5 h-auto absolute top-[16%] sm:top-0 left-[13%] sm:left-[22%]"
        >
          <source src="/motion.mp4" type="video/mp4" />
        </video>

        <HomeGridIcon className="absolute -bottom-[5%] sm:-bottom-[16%] 2xl:-bottom-[28%] w-full h-auto" />

        <Ellipse1Icon className="absolute top-0 left-[25%] w-2 h-2 lg:w-4 lg:h-4" />
        <Ellipse2Icon className="absolute top-[8%] right-[12%] w-6 h-6 lg:w-8 lg:h-8" />
        <Ellipse3Icon className="absolute top-[20%] left-[13%] w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20" />
        <Ellipse4Icon className="absolute top-[35%] left-[6%] w-4 h-4 lg:w-8 lg:h-8" />
        <Ellipse5Icon className="absolute top-[40%] right-[15%] w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
        <Ellipse6Icon className="absolute top-[60%] left-[20%] w-6 h-6 sm:w-10 sm:h-10 lg:w-14 lg:h-14" />
        <Ellipse7Icon className="absolute top-[70%] right-[12%] w-3 h-3 lg:w-5 lg:h-5" />

        <Link
          href="https://app.harmonix.fi"
          target="_blank"
          className="absolute bottom-4 sm:bottom-10 md:bottom-16 right-1/2 translate-x-1/2 min-w-56"
        >
          <div className="flex items-center gap-4 bg-primary rounded-full px-2 py-1.5 sm:px-4 sm:py-2.5 shadow-md">
            <div className="flex items-center gap-2">
              <UsdtIcon className="w-10 h-10 sm:w-14 sm:h-14" />
              <UsdcIcon className="w-10 h-10 sm:w-14 sm:h-14" />
            </div>
            <div>
              <p className="text-sm sm:text-base text-off-white">Harmonix TVL</p>
              <p className="text-xl sm:text-3xl font-bold text-secondary">
                {vaultsOverview.tvl_in_all_vaults.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
