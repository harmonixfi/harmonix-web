import { Button } from '@nextui-org/react';
import Link from 'next/link';

import { getVaultsOverview } from '@/api/vault';
import { UsdcIcon, UsdtIcon } from '@/components/icons';

async function getData() {
  const response = await getVaultsOverview();
  return response;
}

export default async function Home() {
  const vaultsOverview = await getData();

  return (
    <div className="pt-16 sm:pt-28 pb-16">
      <div className="flex flex-col items-center gap-12">
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

      <div className="flex justify-center mt-16 pt-[500px]">
        <div className="flex items-center gap-4 bg-primary rounded-full px-3 py-2 sm:px-4 sm:py-2.5 shadow-md">
          <div className="flex items-center gap-2">
            <UsdtIcon className="w-12 h-12 sm:w-14 sm:h-14" />
            <UsdcIcon className="w-12 h-12 sm:w-14 sm:h-14" />
          </div>
          <div>
            <p className="text-off-white">Harmonix TVL</p>
            <p className="text-2xl sm:text-3xl font-bold text-secondary">
              {vaultsOverview.tvl_in_all_vaults.toLocaleString('en-US', {
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
