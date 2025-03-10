import { Settings, default as Slider } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import {
  GoldLink2Icon,
  HyperLiquidIcon2,
  KelpIcon,
  KyberNetwork2Icon,
  KyberNetworkIcon,
  NodeKit2Icon,
  NodeKitIcon,
  Pendle2Icon,
} from "~/components/icons";

export default function PartnerSection() {
  const settings: Settings = {
    className: "slider variable-width center",
    centerMode: true,
    infinite: false,
    centerPadding: "8px",
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    variableWidth: true,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  // @ts-ignore
  const SliderComponent = !!Slider.default ? Slider.default : Slider;
  return (
    <div
      className={"lg:px-60 py-[120px] bg-bg-grey text-primary space-y-16  px-8"}
    >
      <div className={"text-[32px] lg:text-[64px] space-y-6 mb-16 text-center"}>
        <h1 className={"font-medium"}>Partner</h1>
      </div>
      <div className={"slider-container"}>
        <SliderComponent {...settings}>
          <div className={"pr-1 pb-1"}>
            <div
              className={
                "w-full h-[100px] flex justify-center items-center bg-white rounded-2xl"
              }
            >
              <KelpIcon />
            </div>
          </div>
          <div className={"pr-1 pb-1"}>
            <div
              className={
                "w-full h-[100px] flex justify-center items-center bg-white rounded-2xl"
              }
            >
              <KyberNetwork2Icon />
            </div>
          </div>
          <div className={"pr-1 pb-1"}>
            <div
              className={
                "w-full h-[100px] flex justify-center items-center bg-white rounded-2xl"
              }
            >
              <NodeKit2Icon />
            </div>
          </div>
          <div className={"pr-1 pb-1"}>
            <div
              className={
                "w-full h-[100px] flex justify-center items-center bg-white rounded-2xl"
              }
            >
              <HyperLiquidIcon2 />
            </div>
          </div>
          <div className={"pr-1 pb-1"}>
            <div
              className={
                "w-full h-[100px] flex justify-center items-center bg-white rounded-2xl"
              }
            >
              <Pendle2Icon />
            </div>
          </div>
          <div className={"pr-1 pb-1"}>
            <div
              className={
                "w-full h-[100px] flex justify-center items-center bg-white rounded-2xl"
              }
            >
              <GoldLink2Icon />
            </div>
          </div>
        </SliderComponent>
      </div>
    </div>
  );
}
