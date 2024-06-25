import { Button } from '@nextui-org/react';
import Link from 'next/link';

import { getVaultsOverview } from '@/api/vault';
import AuditSection from '@/components/common/home/AuditSection';
import BackerSection from '@/components/common/home/BackerSection';
import MainBanner from '@/components/common/home/MainBanner';
import PlusPartnerSection from '@/components/common/home/PlusPartnerSection';
import RewardSection from '@/components/common/home/RewardSection';
import { EXTERNAL_LINKS } from '@/constants/url';

async function getData() {
  const response = await getVaultsOverview();
  return response;
}

export default async function Home() {
  const vaultsOverview = await getData();

  const optionsVaultApy =
    vaultsOverview.vaults.find((x) => x.name.toLowerCase().includes('option'))?.apy_1y || 119;

  const deltaNeutralVaultApy =
    Math.max(
      ...vaultsOverview.vaults
        .filter((x) => !x.name.toLowerCase().includes('option'))
        .map((x) => x.apy_1y),
    ) || 27;

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
          href={EXTERNAL_LINKS.App}
          target="_blank"
        >
          Launch App
        </Button>
      </div>

      <MainBanner />
      <RewardSection
        optionsVaultApy={optionsVaultApy}
        deltaNeutralVaultApy={deltaNeutralVaultApy}
      />
      <PlusPartnerSection />
      <AuditSection />
      <BackerSection />
    </div>
  );
}
