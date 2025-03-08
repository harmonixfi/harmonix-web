import { Settings, default as Slider } from "react-slick";
import { KelpIcon } from "~/components/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PartnerSection() {
  const settings: Settings = {
    className: "slider variable-width center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 3,
    variableWidth: true,
    adaptiveHeight: true,
  };

  // @ts-ignore
  const SliderComponent = !!Slider.default ? Slider.default : Slider;
  return (
    <div className={"pt-[120px] pb-20 bg-bg-grey"}>
      <div className={"text-[32px] lg:text-[64px] space-y-6 mb-16 text-center"}>
        <h1 className={"font-medium"}>Partner</h1>
      </div>
      <div className={"slider-container"}>
        <SliderComponent {...settings}>
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              style={{ width: 318, height: 100, display: "block" }}
            >
              <div
                className={
                  " w-[318px] h-[100px] flex justify-center items-center bg-white rounded-2xl"
                }
              >
                <KelpIcon />
              </div>
            </div>
          ))}
        </SliderComponent>
      </div>
    </div>
  );
}
