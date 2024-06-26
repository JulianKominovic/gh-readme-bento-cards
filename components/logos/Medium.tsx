import { BentoLogoProps, getBentoCardSizes } from "@/const/bento-cards";
import { roundedRect } from "@/utils/rounding-svg";

export default function Medium({
  size,
  rounded = 24,
  children,
}: BentoLogoProps) {
  const { width, height } = getBentoCardSizes(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      style={{
        borderRadius: rounded,
      }}
    >
      <path fill="url(#a)" d={roundedRect(width, height, rounded)} />
      <g opacity=".05" filter="url(#b)">
        <mask
          id="c"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="76"
          y="76"
          width="48"
          height="48"
        >
          <path
            d="M89.538 76c7.476 0 13.537 6.117 13.537 13.662 0 7.545-6.061 13.661-13.537 13.661C82.06 103.323 76 97.207 76 89.662S82.061 76 89.538 76Zm21.618.8c3.739 0 6.769 5.758 6.769 12.862h.001c0 7.102-3.031 12.861-6.769 12.861-3.739 0-6.769-5.76-6.769-12.861 0-7.102 3.03-12.862 6.768-12.862Zm10.463 1.34c1.315 0 2.381 5.158 2.381 11.522 0 6.361-1.066 11.522-2.381 11.522-1.315 0-2.38-5.16-2.38-11.522 0-6.363 1.066-11.522 2.38-11.522Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#d)" mask="url(#c)">
          <path fill="#B7B7B7" d="M76 76h47.999v47.998H76z" />
        </g>
      </g>
      <g opacity=".1" filter="url(#e)">
        <mask
          id="f"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="72"
          y="72"
          width="48"
          height="48"
        >
          <path
            d="M85.538 72c7.476 0 13.537 6.117 13.537 13.662 0 7.545-6.061 13.661-13.537 13.661C78.06 99.323 72 93.207 72 85.662S78.061 72 85.538 72Zm21.618.8c3.739 0 6.769 5.758 6.769 12.862h.001c0 7.102-3.031 12.861-6.769 12.861-3.739 0-6.769-5.76-6.769-12.861 0-7.102 3.03-12.862 6.768-12.862Zm10.463 1.34c1.315 0 2.381 5.158 2.381 11.522 0 6.361-1.066 11.522-2.381 11.522-1.315 0-2.38-5.16-2.38-11.522 0-6.363 1.066-11.522 2.38-11.522Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#g)" mask="url(#f)">
          <path fill="#B7B7B7" d="M72 72h47.999v47.998H72z" />
        </g>
      </g>
      <g opacity=".15" filter="url(#h)">
        <mask
          id="i"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="68"
          y="68"
          width="48"
          height="48"
        >
          <path
            d="M81.538 68c7.476 0 13.537 6.117 13.537 13.662 0 7.545-6.061 13.661-13.537 13.661C74.06 95.323 68 89.207 68 81.662S74.061 68 81.538 68Zm21.618.8c3.739 0 6.769 5.758 6.769 12.862h.001c0 7.102-3.031 12.861-6.769 12.861-3.739 0-6.769-5.76-6.769-12.861 0-7.102 3.03-12.862 6.768-12.862Zm10.463 1.34c1.315 0 2.381 5.158 2.381 11.522 0 6.361-1.066 11.522-2.381 11.522-1.315 0-2.38-5.16-2.38-11.522 0-6.363 1.066-11.522 2.38-11.522Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#j)" mask="url(#i)">
          <path fill="#B7B7B7" d="M68 68h47.999v47.998H68z" />
        </g>
      </g>
      <g opacity=".2" filter="url(#k)">
        <mask
          id="l"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="64"
          y="64"
          width="48"
          height="48"
        >
          <path
            d="M77.538 64c7.476 0 13.537 6.117 13.537 13.662 0 7.545-6.061 13.661-13.537 13.661C70.06 91.323 64 85.207 64 77.662S70.061 64 77.538 64Zm21.618.8c3.739 0 6.769 5.758 6.769 12.862h.001c0 7.102-3.031 12.861-6.77 12.861-3.738 0-6.768-5.76-6.768-12.861 0-7.102 3.03-12.862 6.768-12.862Zm10.463 1.34c1.315 0 2.381 5.158 2.381 11.522 0 6.361-1.066 11.522-2.381 11.522-1.315 0-2.38-5.16-2.38-11.522 0-6.363 1.066-11.522 2.38-11.522Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#m)" mask="url(#l)">
          <path fill="#B7B7B7" d="M64 64h47.999v47.998H64z" />
        </g>
      </g>
      <g opacity=".25" filter="url(#n)">
        <mask
          id="o"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="56"
          y="56"
          width="48"
          height="48"
        >
          <path
            d="M69.538 56c7.476 0 13.537 6.117 13.537 13.662 0 7.545-6.061 13.661-13.537 13.661C62.062 83.323 56 77.207 56 69.662S62.061 56 69.538 56Zm21.618.8c3.739 0 6.77 5.758 6.77 12.862 0 7.102-3.03 12.861-6.77 12.861-3.738 0-6.768-5.76-6.768-12.861 0-7.102 3.03-12.862 6.768-12.862Zm10.463 1.34c1.315 0 2.381 5.158 2.381 11.522 0 6.361-1.066 11.522-2.381 11.522-1.315 0-2.38-5.16-2.38-11.522 0-6.363 1.066-11.522 2.38-11.522Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#p)" mask="url(#o)">
          <path fill="#B7B7B7" d="M56 56h47.999v47.998H56z" />
        </g>
      </g>
      <g opacity=".3" filter="url(#q)">
        <mask
          id="r"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="48"
          y="48"
          width="48"
          height="48"
        >
          <path
            d="M61.538 48c7.476 0 13.537 6.117 13.537 13.662 0 7.545-6.061 13.661-13.537 13.661C54.062 75.323 48 69.207 48 61.662S54.061 48 61.538 48Zm21.618.8c3.739 0 6.77 5.758 6.77 12.862 0 7.102-3.03 12.861-6.77 12.861-3.738 0-6.768-5.76-6.768-12.861 0-7.102 3.03-12.862 6.768-12.862Zm10.463 1.34c1.315 0 2.381 5.158 2.381 11.522 0 6.361-1.066 11.522-2.38 11.522-1.316 0-2.38-5.16-2.38-11.522 0-6.363 1.065-11.522 2.38-11.522Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#s)" mask="url(#r)">
          <path fill="#B7B7B7" d="M48 48h47.999v47.998H48z" />
        </g>
      </g>
      <g opacity=".35" filter="url(#t)">
        <mask
          id="u"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="40"
          y="40"
          width="48"
          height="48"
        >
          <path
            d="M53.538 40c7.476 0 13.537 6.117 13.537 13.662 0 7.545-6.061 13.661-13.537 13.661C46.062 67.323 40 61.207 40 53.662S46.061 40 53.538 40Zm21.618.8c3.739 0 6.77 5.758 6.77 12.862 0 7.102-3.03 12.861-6.77 12.861-3.738 0-6.768-5.76-6.768-12.861 0-7.102 3.03-12.862 6.768-12.862Zm10.463 1.34c1.315 0 2.381 5.158 2.381 11.522 0 6.361-1.066 11.522-2.38 11.522-1.316 0-2.38-5.16-2.38-11.522 0-6.363 1.065-11.522 2.38-11.522Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#v)" mask="url(#u)">
          <path fill="#B7B7B7" d="M40 40h47.999v47.998H40z" />
        </g>
      </g>
      <g opacity=".4" filter="url(#w)">
        <mask
          id="x"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="39"
          y="39"
          width="48"
          height="48"
        >
          <path
            d="M52.538 39c7.476 0 13.537 6.117 13.537 13.662 0 7.545-6.061 13.661-13.537 13.661C45.062 66.323 39 60.207 39 52.662S45.061 39 52.538 39Zm21.618.8c3.739 0 6.77 5.758 6.77 12.862 0 7.102-3.03 12.861-6.77 12.861-3.738 0-6.768-5.76-6.768-12.861 0-7.102 3.03-12.862 6.768-12.862Zm10.463 1.34c1.315 0 2.381 5.158 2.381 11.522 0 6.361-1.066 11.522-2.38 11.522-1.316 0-2.38-5.16-2.38-11.522 0-6.363 1.065-11.522 2.38-11.522Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#y)" mask="url(#x)">
          <path fill="#B7B7B7" d="M39 39h47.999v47.998H39z" />
        </g>
      </g>
      <g opacity=".45" filter="url(#z)">
        <mask
          id="A"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="35"
          y="35"
          width="48"
          height="48"
        >
          <path
            d="M48.538 35c7.476 0 13.537 6.117 13.537 13.662 0 7.545-6.061 13.661-13.537 13.661C41.062 62.323 35 56.207 35 48.662S41.061 35 48.538 35Zm21.618.8c3.739 0 6.77 5.758 6.77 12.862 0 7.102-3.03 12.861-6.77 12.861-3.738 0-6.768-5.76-6.768-12.861 0-7.102 3.03-12.862 6.768-12.862Zm10.463 1.34c1.315 0 2.381 5.158 2.381 11.522 0 6.361-1.066 11.522-2.38 11.522-1.316 0-2.38-5.16-2.38-11.522 0-6.363 1.065-11.522 2.38-11.522Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#B)" mask="url(#A)">
          <path fill="#B7B7B7" d="M35 35h47.999v47.998H35z" />
        </g>
      </g>
      <g opacity=".5" filter="url(#C)">
        <mask
          id="D"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="31"
          y="31"
          width="48"
          height="48"
        >
          <path
            d="M44.538 31c7.476 0 13.537 6.117 13.537 13.662 0 7.545-6.061 13.661-13.537 13.661C37.062 58.323 31 52.207 31 44.662S37.061 31 44.538 31Zm21.618.8c3.739 0 6.77 5.758 6.77 12.862 0 7.102-3.03 12.861-6.77 12.861-3.738 0-6.768-5.76-6.768-12.861 0-7.102 3.03-12.862 6.768-12.862Zm10.463 1.34c1.315 0 2.381 5.158 2.381 11.522 0 6.361-1.066 11.522-2.38 11.522-1.316 0-2.38-5.16-2.38-11.522 0-6.363 1.065-11.522 2.38-11.522Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#E)" mask="url(#D)">
          <path fill="#B7B7B7" d="M31 31h47.999v47.998H31z" />
        </g>
      </g>
      <g opacity=".55" filter="url(#F)">
        <mask
          id="G"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="29"
          y="29"
          width="48"
          height="48"
        >
          <path
            d="M42.538 29c7.476 0 13.537 6.117 13.537 13.662 0 7.545-6.061 13.661-13.537 13.661C35.062 56.323 29 50.207 29 42.662S35.061 29 42.538 29Zm21.618.8c3.739 0 6.77 5.758 6.77 12.862 0 7.102-3.03 12.861-6.77 12.861-3.738 0-6.768-5.76-6.768-12.861 0-7.102 3.03-12.862 6.768-12.862Zm10.463 1.34c1.315 0 2.381 5.158 2.381 11.522 0 6.361-1.066 11.522-2.38 11.522-1.316 0-2.38-5.16-2.38-11.522 0-6.363 1.065-11.522 2.38-11.522Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#H)" mask="url(#G)">
          <path fill="#B7B7B7" d="M29 29h47.999v47.998H29z" />
        </g>
      </g>
      <g opacity=".6" filter="url(#I)">
        <mask
          id="J"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="27"
          y="27"
          width="48"
          height="48"
        >
          <path
            d="M40.538 27c7.476 0 13.537 6.117 13.537 13.662 0 7.545-6.061 13.661-13.537 13.661C33.062 54.323 27 48.207 27 40.662S33.061 27 40.538 27Zm21.618.8c3.739 0 6.77 5.758 6.77 12.862 0 7.102-3.03 12.861-6.77 12.861-3.737 0-6.768-5.76-6.768-12.861 0-7.102 3.03-12.862 6.768-12.862Zm10.463 1.34c1.315 0 2.381 5.158 2.381 11.522 0 6.361-1.066 11.522-2.38 11.522-1.316 0-2.38-5.16-2.38-11.522 0-6.363 1.065-11.522 2.38-11.522Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#K)" mask="url(#J)">
          <path fill="#B7B7B7" d="M27 27h47.999v47.998H27z" />
        </g>
      </g>
      <g opacity=".6" filter="url(#L)">
        <mask
          id="M"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="26"
          y="26"
          width="48"
          height="48"
        >
          <path
            d="M39.538 26c7.476 0 13.537 6.117 13.537 13.662 0 7.545-6.061 13.661-13.537 13.661C32.062 53.323 26 47.207 26 39.662S32.061 26 39.538 26Zm21.618.8c3.739 0 6.77 5.758 6.77 12.862 0 7.102-3.03 12.861-6.77 12.861-3.737 0-6.768-5.76-6.768-12.861 0-7.102 3.03-12.862 6.768-12.862Zm10.463 1.34c1.315 0 2.381 5.158 2.381 11.522 0 6.361-1.066 11.522-2.38 11.522-1.316 0-2.38-5.16-2.38-11.522 0-6.363 1.065-11.522 2.38-11.522Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#N)" mask="url(#M)">
          <path fill="#B7B7B7" d="M26 26h47.999v47.998H26z" />
        </g>
      </g>
      <g opacity=".6" filter="url(#O)">
        <mask
          id="P"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="25"
          y="25"
          width="48"
          height="48"
        >
          <path
            d="M38.538 25c7.476 0 13.537 6.117 13.537 13.662 0 7.545-6.061 13.661-13.537 13.661C31.062 52.323 25 46.207 25 38.662S31.061 25 38.538 25Zm21.618.8c3.739 0 6.77 5.758 6.77 12.862 0 7.102-3.03 12.861-6.77 12.861-3.737 0-6.768-5.76-6.768-12.861 0-7.102 3.03-12.862 6.768-12.862Zm10.463 1.34c1.315 0 2.381 5.158 2.381 11.522 0 6.361-1.066 11.522-2.38 11.522-1.316 0-2.38-5.16-2.38-11.522 0-6.363 1.065-11.522 2.38-11.522Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#Q)" mask="url(#P)">
          <path fill="#B7B7B7" d="M25 25h47.999v47.998H25z" />
        </g>
      </g>
      <g opacity=".6" filter="url(#R)">
        <mask
          id="S"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="24"
          y="24"
          width="49"
          height="49"
        >
          <path
            d="M38.038 24.5c7.476 0 13.537 6.117 13.537 13.662 0 7.545-6.061 13.661-13.537 13.661-7.476 0-13.538-6.116-13.538-13.661S30.561 24.5 38.038 24.5Zm21.618.8c3.739 0 6.77 5.758 6.77 12.862 0 7.102-3.03 12.861-6.77 12.861-3.737 0-6.768-5.76-6.768-12.861 0-7.102 3.03-12.862 6.768-12.862Zm10.463 1.34c1.315 0 2.381 5.158 2.381 11.522 0 6.361-1.066 11.522-2.38 11.522-1.316 0-2.38-5.16-2.38-11.522 0-6.363 1.065-11.522 2.38-11.522Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#T)" mask="url(#S)">
          <path fill="#B7B7B7" d="M24.5 24.5h47.999v47.998H24.5z" />
        </g>
      </g>
      <g filter="url(#U)">
        <mask
          id="V"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="24"
          y="24"
          width="48"
          height="48"
        >
          <path
            d="M37.538 24c7.476 0 13.537 6.117 13.537 13.662 0 7.545-6.061 13.661-13.537 13.661C30.062 51.323 24 45.207 24 37.662S30.061 24 37.538 24Zm21.618.8c3.739 0 6.77 5.758 6.77 12.862 0 7.102-3.03 12.861-6.77 12.861-3.737 0-6.768-5.76-6.768-12.861 0-7.102 3.03-12.862 6.768-12.862Zm10.463 1.34c1.315 0 2.381 5.158 2.381 11.522 0 6.361-1.066 11.522-2.38 11.522-1.316 0-2.38-5.16-2.38-11.522 0-6.363 1.065-11.522 2.38-11.522Z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#V)">
          <path fill="url(#W)" d="M24 24h47.999v47.998H24z" />
        </g>
      </g>
      <text
        y={height - 48}
        x={24}
        fill="#353535"
        style={{
          fontFamily:
            "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        Medium
      </text>

      <text
        y={height - 24}
        x={24}
        fill="#353535"
        style={{
          fontFamily:
            "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
          fontSize: 14,
          fontWeight: 300,
        }}
      >
        {children && children.length > width / 9
          ? children.slice(0, width / 9) + "..."
          : children}
      </text>
      <defs>
        <filter
          id="b"
          x="28"
          y="28"
          width="144"
          height="144"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="24"
            result="effect1_foregroundBlur_1_26804"
          />
        </filter>
        <filter
          id="d"
          x="72"
          y="76"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_26804"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_26804"
            result="shape"
          />
        </filter>
        <filter
          id="e"
          x="28"
          y="28"
          width="136"
          height="136"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="22"
            result="effect1_foregroundBlur_1_26804"
          />
        </filter>
        <filter
          id="g"
          x="68"
          y="72"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_26804"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_26804"
            result="shape"
          />
        </filter>
        <filter
          id="h"
          x="28"
          y="28"
          width="128"
          height="128"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="20"
            result="effect1_foregroundBlur_1_26804"
          />
        </filter>
        <filter
          id="j"
          x="64"
          y="68"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_26804"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_26804"
            result="shape"
          />
        </filter>
        <filter
          id="k"
          x="24"
          y="24"
          width="128"
          height="128"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="20"
            result="effect1_foregroundBlur_1_26804"
          />
        </filter>
        <filter
          id="m"
          x="60"
          y="64"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_26804"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_26804"
            result="shape"
          />
        </filter>
        <filter
          id="n"
          x="24"
          y="24"
          width="112"
          height="112"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="16"
            result="effect1_foregroundBlur_1_26804"
          />
        </filter>
        <filter
          id="p"
          x="52"
          y="56"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_26804"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_26804"
            result="shape"
          />
        </filter>
        <filter
          id="q"
          x="20"
          y="20"
          width="104"
          height="104"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="14"
            result="effect1_foregroundBlur_1_26804"
          />
        </filter>
        <filter
          id="s"
          x="44"
          y="48"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_26804"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_26804"
            result="shape"
          />
        </filter>
        <filter
          id="t"
          x="16"
          y="16"
          width="96"
          height="96"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="12"
            result="effect1_foregroundBlur_1_26804"
          />
        </filter>
        <filter
          id="v"
          x="36"
          y="40"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_26804"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_26804"
            result="shape"
          />
        </filter>
        <filter
          id="w"
          x="15"
          y="15"
          width="96"
          height="96"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="12"
            result="effect1_foregroundBlur_1_26804"
          />
        </filter>
        <filter
          id="y"
          x="35"
          y="39"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_26804"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_26804"
            result="shape"
          />
        </filter>
        <filter
          id="z"
          x="19"
          y="19"
          width="80"
          height="80"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="8"
            result="effect1_foregroundBlur_1_26804"
          />
        </filter>
        <filter
          id="B"
          x="31"
          y="35"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_26804"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_26804"
            result="shape"
          />
        </filter>
        <filter
          id="C"
          x="21"
          y="21"
          width="68"
          height="68"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="5"
            result="effect1_foregroundBlur_1_26804"
          />
        </filter>
        <filter
          id="E"
          x="27"
          y="31"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_26804"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_26804"
            result="shape"
          />
        </filter>
        <filter
          id="F"
          x="23"
          y="23"
          width="60"
          height="60"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="3"
            result="effect1_foregroundBlur_1_26804"
          />
        </filter>
        <filter
          id="H"
          x="25"
          y="29"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_26804"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_26804"
            result="shape"
          />
        </filter>
        <filter
          id="I"
          x="23"
          y="23"
          width="56"
          height="56"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_1_26804"
          />
        </filter>
        <filter
          id="K"
          x="23"
          y="27"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_26804"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_26804"
            result="shape"
          />
        </filter>
        <filter
          id="L"
          x="23"
          y="23"
          width="54"
          height="54"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="1.5"
            result="effect1_foregroundBlur_1_26804"
          />
        </filter>
        <filter
          id="N"
          x="22"
          y="26"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_26804"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_26804"
            result="shape"
          />
        </filter>
        <filter
          id="O"
          x="23"
          y="23"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_1_26804"
          />
        </filter>
        <filter
          id="Q"
          x="21"
          y="25"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_26804"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_26804"
            result="shape"
          />
        </filter>
        <filter
          id="R"
          x="23.5"
          y="23.5"
          width="50"
          height="50"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation=".5"
            result="effect1_foregroundBlur_1_26804"
          />
        </filter>
        <filter
          id="T"
          x="20.5"
          y="24.5"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_26804"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_26804"
            result="shape"
          />
        </filter>
        <filter
          id="U"
          x="23.5"
          y="23"
          width="49.5"
          height="50"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-.5" dy="-1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1_26804" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="soft-light"
            in2="effect1_innerShadow_1_26804"
            result="effect2_innerShadow_1_26804"
          />
        </filter>
        <linearGradient
          id="a"
          x1="87.5"
          y1="0"
          x2="87.5"
          y2="175"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBFBFC" />
          <stop offset="1" stopColor="#DBDBDB" />
        </linearGradient>
        <linearGradient
          id="W"
          x1="48"
          y1="24"
          x2="48"
          y2="71.998"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#33353A" />
          <stop offset="1" stopColor="#212427" />
        </linearGradient>
      </defs>
    </svg>
  );
}
