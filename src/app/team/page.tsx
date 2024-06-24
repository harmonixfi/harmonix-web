import { HomeGridIcon } from '@/components/icons';
import CoreValues from '@/components/team/CoreValues';
import JoinUs from '@/components/team/JoinUs';
import Mission from '@/components/team/Mission';
import Vision from '@/components/team/Vision';
import What from '@/components/team/What';
import Why from '@/components/team/Why';

export default async function Team() {
  return (
    <div className="relative w-full px-6 sm:px-12 lg:px-24 flex flex-col gap-32 pt-16 sm:pt-28">
      {/* <SlidePoc /> */}
      <What />
      <Why />
      <div className="space-y-16">
        <Mission />
        <Vision />
        <CoreValues />
      </div>
      <JoinUs /> 
      <HomeGridIcon className="absolute -bottom-[1%] sm:-bottom-[2%] 2xl:-bottom-[10%] right-0 w-full h-auto" />
    </div>
  );
}
