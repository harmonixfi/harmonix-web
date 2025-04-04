import { ReactNode } from "react";

type PartnerItemProps = {
  className?: string;
  icon?: ReactNode;
};

export default function PartnerItem(props: PartnerItemProps) {
  return (
    <div
      className={`h-32 sm:h-40 lg:h-32 xl:h-28 2xl:h-32 flex justify-center items-center bg-white rounded-2xl ${
        props.className || ""
      }`}
    >
      {props.icon}
    </div>
  );
}
