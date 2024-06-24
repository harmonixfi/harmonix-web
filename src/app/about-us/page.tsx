import CoreValues from '@/components/about-us/CoreValues';
import JoinUs from '@/components/about-us/JoinUs';
import Mission from '@/components/about-us/Mission';
import Vision from '@/components/about-us/Vision';
import What from '@/components/about-us/What';
import Why from '@/components/about-us/Why';
import { HomeGridIcon } from '@/components/icons';

export default async function AboutUs() {
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
