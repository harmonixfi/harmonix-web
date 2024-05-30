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

      <div className="relative pt-[15%] mt-16 sm:mt-12">
        <HomeGridIcon className="w-full h-auto" />

        <Ellipse1Icon className="absolute top-[6%] left-[40%] w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
        <Ellipse2Icon className="absolute top-[8%] right-[32%] w-8 h-8 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
        <Ellipse3Icon className="absolute top-[14%] left-[25%] w-7 h-7 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
        <Ellipse4Icon className="absolute top-[25%] right-[25%] w-8 h-8 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
        <Ellipse5Icon className="absolute top-[40%] left-[30%] w-7 h-7 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
        <Ellipse6Icon className="absolute top-[45%] right-[38%] w-5 h-5 sm:w-7 sm:h-7 lg:w-9 lg:h-9" />

        <Link
          href="https://app.harmonix.fi"
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
