import { ReactNode } from "react";

type PartnerItemProps = {
  className?: string;
  icon?: ReactNode;
};

export default function PartnerItem(props: PartnerItemProps) {
  return (
    <div
      className={`w-full h-16 lg:h-24 xl:h-24 2xl:h-24 flex justify-center items-center bg-white rounded-2xl ${
        props.className || ""
      }`}
    >
      {props.icon}
    </div>
  );
}
