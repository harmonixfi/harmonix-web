import { ReactNode } from "react";
import {
  CircleIcon,
  Light1Icon,
  Light2Icon,
  Light3Icon,
  Light4Icon,
  Light5Icon,
  Light6Icon,
} from "~/components/icons";

type TechnologyItemProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

const TechnologyItem = (props: TechnologyItemProps) => {
  const { title, description, icon } = props;

  return (
    <div className="px-8 py-12 rounded-3xl bg-bg-grey">
      <div className="relative bg-[#EDF9F2] py-8 rounded-2xl flex justify-center items-center overflow-hidden">
        {icon}
        <div className="absolute right-0 bottom-0">
          <Light1Icon />
        </div>
        <div className="absolute right-0 bottom-0">
          <Light2Icon />
        </div>
        <div className="absolute right-0 bottom-0">
          <Light3Icon />
        </div>
        <div className="absolute left-0 bottom-0">
          <Light4Icon />
        </div>
        <div className="absolute left-0 bottom-0">
          <Light5Icon />
        </div>
        <div className="absolute left-0 bottom-0">
          <Light6Icon />
        </div>
        <div className="absolute left-3 top-3">
          <CircleIcon />
        </div>
        <div className="absolute right-3 top-3">
          <CircleIcon />
        </div>
      </div>
      <div className="mt-12 text-center">
        <div className="text-2xl font-bold">{title}</div>
        <div className="mt-4 font-normal text-sub-title-2">{description}</div>
      </div>
    </div>
  );
};

export default TechnologyItem;
