import JoinUsButton from '@/components/team/JoinUsButton';
import SlidePoc from '@/components/team/SlidePoc';

export default async function Team() {
  return (
    <div className="flex flex-col gap-16 pt-16 sm:pt-28">
      <SlidePoc />
      <JoinUsButton /> 
    </div>
  );
}
