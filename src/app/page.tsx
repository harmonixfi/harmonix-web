import { Button } from '@nextui-org/react';
import Link from 'next/link';

import { getVaultsOverview } from '@/api/vault';
import AuditSection from '@/components/common/home/AuditSection';
import MainBanner from '@/components/common/home/MainBanner';

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

      <MainBanner tvl={vaultsOverview.tvl_in_all_vaults} />

      <AuditSection />
    </div>
  );
}
