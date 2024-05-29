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
    <div className="pt-28 pb-16">
      <div className="flex flex-col items-center gap-10 w-full md:w-5/6 lg:w-4/5 2xl:w-3/5 mx-auto">
        <h1 className="text-7xl font-light capitalize text-center">
          Building Harmony in Crypto Asset Strategies
        </h1>
        <p className="w-5/6 text-2xl font-normal text-center opacity-80">
          Harmonix - Implies a harmony in strategies that balance risk and reward, suitable for a
          platform managing diverse crypto assets.
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
        <div className="flex items-center gap-4 bg-primary rounded-full px-4 py-2.5 shadow-md">
          <div className="flex items-center gap-2">
            <UsdtIcon className="w-14 h-14" />
            <UsdcIcon className="w-14 h-14" />
          </div>
          <div>
            <p className="text-off-white">Harmonix TVL</p>
            <p className="text-3xl font-bold text-secondary">
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
