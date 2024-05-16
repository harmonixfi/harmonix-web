import { IconProps } from '@/@types/common';

const Logo = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="66.000000pt"
      height="66.000000pt"
      viewBox="0 0 66.000000 66.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,66.000000) scale(0.100000,-0.100000)"
        fill="#0032FF"
        stroke="none"
      >
        <path
          d="M125 651 c-45 -11 -74 -32 -98 -71 -21 -33 -22 -46 -22 -250 0 -204
     1 -217 22 -250 44 -71 62 -75 303 -75 204 0 217 1 250 22 71 44 75 62 75 303
     0 241 -4 259 -75 303 -33 20 -49 22 -230 24 -107 1 -208 -2 -225 -6z m220
     -152 c50 -34 87 -91 92 -143 l5 -45 -45 -3 -45 -3 69 -87 70 -88 -55 0 c-37 0
     -60 5 -74 17 -22 20 -132 159 -132 167 0 4 25 6 55 6 32 0 55 4 55 10 0 41
     -62 100 -105 100 -11 0 -15 12 -15 51 l0 52 45 -5 c25 -3 61 -16 80 -29z m-61
     -302 c28 -20 18 -61 -16 -65 -36 -4 -53 26 -32 56 18 26 24 27 48 9z"
        />
      </g>
    </svg>
  );
};

export default Logo;
