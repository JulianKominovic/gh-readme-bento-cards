import { BentoLogoProps, getBentoCardSizes } from "@/const/bento-cards";
import { roundedRect } from "@/utils/rounding-svg";

export default function Layers({
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
            opacity=".8"
            d="M87.4 96.62c0-2.74 2.01-5.064 4.72-5.46l14.807-2.162a5.517 5.517 0 0 1 6.314 5.459v12.999a5.518 5.518 0 0 1-4.72 5.46l-14.806 2.162a5.517 5.517 0 0 1-6.315-5.459v-13Z"
            fill="#fff"
          />
          <path
            opacity=".6"
            d="M82.08 90.581c0-2.739 2.01-5.063 4.72-5.459l14.807-2.162a5.517 5.517 0 0 1 6.314 5.46v12.999a5.517 5.517 0 0 1-4.72 5.459l-14.806 2.162a5.517 5.517 0 0 1-6.315-5.459v-13Z"
            fill="#fff"
          />
          <path
            opacity=".4"
            d="M76 84.544c0-2.74 2.01-5.064 4.72-5.46l14.806-2.162a5.517 5.517 0 0 1 6.315 5.46V95.38c0 2.739-2.01 5.063-4.72 5.459l-14.806 2.162A5.516 5.516 0 0 1 76 97.543v-13Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#d)" mask="url(#c)">
          <path fill="#0C0C0C" d="M76 76h47.999v47.998H76z" />
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
            opacity=".8"
            d="M83.4 92.62c0-2.74 2.01-5.064 4.72-5.46l14.807-2.162a5.517 5.517 0 0 1 6.314 5.459v12.999a5.518 5.518 0 0 1-4.72 5.46l-14.806 2.162a5.517 5.517 0 0 1-6.315-5.459v-13Z"
            fill="#fff"
          />
          <path
            opacity=".6"
            d="M78.08 86.581c0-2.739 2.01-5.063 4.72-5.459l14.807-2.162a5.517 5.517 0 0 1 6.314 5.46v12.999a5.517 5.517 0 0 1-4.72 5.459l-14.806 2.162a5.517 5.517 0 0 1-6.315-5.46V86.582Z"
            fill="#fff"
          />
          <path
            opacity=".4"
            d="M72 80.544c0-2.74 2.01-5.064 4.72-5.46l14.806-2.162a5.517 5.517 0 0 1 6.315 5.46V91.38c0 2.739-2.01 5.063-4.72 5.46l-14.806 2.161A5.517 5.517 0 0 1 72 93.543v-13Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#g)" mask="url(#f)">
          <path fill="#0C0C0C" d="M72 72h47.999v47.998H72z" />
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
            opacity=".8"
            d="M79.4 88.62c0-2.74 2.01-5.064 4.72-5.46l14.807-2.162a5.517 5.517 0 0 1 6.314 5.459v13a5.518 5.518 0 0 1-4.72 5.459l-14.806 2.162a5.517 5.517 0 0 1-6.315-5.459v-13Z"
            fill="#fff"
          />
          <path
            opacity=".6"
            d="M74.08 82.581c0-2.739 2.01-5.063 4.72-5.459l14.807-2.162a5.517 5.517 0 0 1 6.314 5.46v12.999c0 2.739-2.01 5.063-4.72 5.459l-14.806 2.162a5.517 5.517 0 0 1-6.315-5.46V82.582Z"
            fill="#fff"
          />
          <path
            opacity=".4"
            d="M68 76.544c0-2.74 2.01-5.064 4.72-5.46l14.806-2.162a5.517 5.517 0 0 1 6.315 5.46V87.38c0 2.739-2.01 5.063-4.72 5.46l-14.806 2.161A5.517 5.517 0 0 1 68 89.543v-13Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#j)" mask="url(#i)">
          <path fill="#0C0C0C" d="M68 68h47.999v47.998H68z" />
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
            opacity=".8"
            d="M75.4 84.62c0-2.74 2.01-5.064 4.72-5.46l14.807-2.162a5.517 5.517 0 0 1 6.314 5.459v13c0 2.739-2.01 5.063-4.72 5.459l-14.806 2.162a5.517 5.517 0 0 1-6.315-5.46V84.62Z"
            fill="#fff"
          />
          <path
            opacity=".6"
            d="M70.08 78.581c0-2.739 2.01-5.063 4.72-5.459l14.807-2.162a5.517 5.517 0 0 1 6.314 5.46v12.999c0 2.739-2.01 5.063-4.72 5.459L76.395 97.04a5.517 5.517 0 0 1-6.315-5.46V78.582Z"
            fill="#fff"
          />
          <path
            opacity=".4"
            d="M64 72.544c0-2.74 2.01-5.064 4.72-5.46l14.806-2.162a5.517 5.517 0 0 1 6.315 5.46V83.38c0 2.739-2.01 5.063-4.72 5.46l-14.806 2.161A5.517 5.517 0 0 1 64 85.543v-13Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#m)" mask="url(#l)">
          <path fill="#0C0C0C" d="M64 64h47.999v47.998H64z" />
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
            opacity=".8"
            d="M67.4 76.62c0-2.74 2.01-5.064 4.72-5.46l14.807-2.162a5.517 5.517 0 0 1 6.314 5.459v13c0 2.739-2.01 5.063-4.72 5.459l-14.806 2.162a5.517 5.517 0 0 1-6.315-5.46V76.62Z"
            fill="#fff"
          />
          <path
            opacity=".6"
            d="M62.08 70.581c0-2.739 2.01-5.063 4.72-5.459l14.807-2.162a5.517 5.517 0 0 1 6.314 5.46v12.999c0 2.739-2.01 5.063-4.72 5.459L68.395 89.04a5.517 5.517 0 0 1-6.315-5.46V70.582Z"
            fill="#fff"
          />
          <path
            opacity=".4"
            d="M56 64.544c0-2.74 2.01-5.064 4.72-5.46l14.806-2.162a5.517 5.517 0 0 1 6.315 5.46V75.38c0 2.739-2.01 5.063-4.72 5.46l-14.806 2.161A5.517 5.517 0 0 1 56 77.543v-13Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#p)" mask="url(#o)">
          <path fill="#0C0C0C" d="M56 56h47.999v47.998H56z" />
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
            opacity=".8"
            d="M59.4 68.62c0-2.74 2.01-5.064 4.72-5.46l14.807-2.162a5.517 5.517 0 0 1 6.314 5.459v13c0 2.739-2.01 5.063-4.72 5.459l-14.806 2.162a5.517 5.517 0 0 1-6.315-5.46V68.62Z"
            fill="#fff"
          />
          <path
            opacity=".6"
            d="M54.08 62.581c0-2.739 2.01-5.063 4.72-5.459l14.807-2.162a5.517 5.517 0 0 1 6.314 5.46v12.999c0 2.739-2.01 5.063-4.72 5.459L60.395 81.04a5.517 5.517 0 0 1-6.315-5.46V62.582Z"
            fill="#fff"
          />
          <path
            opacity=".4"
            d="M48 56.544c0-2.74 2.01-5.064 4.72-5.46l14.806-2.162a5.517 5.517 0 0 1 6.315 5.46V67.38c0 2.739-2.01 5.063-4.72 5.46l-14.806 2.161A5.517 5.517 0 0 1 48 69.543v-13Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#s)" mask="url(#r)">
          <path fill="#0C0C0C" d="M48 48h47.999v47.998H48z" />
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
            opacity=".8"
            d="M51.4 60.62c0-2.74 2.01-5.064 4.72-5.46l14.807-2.162a5.517 5.517 0 0 1 6.314 5.459v13c0 2.739-2.01 5.063-4.72 5.459l-14.806 2.162a5.517 5.517 0 0 1-6.315-5.46V60.62Z"
            fill="#fff"
          />
          <path
            opacity=".6"
            d="M46.08 54.581c0-2.739 2.01-5.063 4.72-5.459l14.807-2.162a5.517 5.517 0 0 1 6.314 5.46v12.999c0 2.739-2.01 5.063-4.72 5.459L52.395 73.04a5.517 5.517 0 0 1-6.315-5.46V54.582Z"
            fill="#fff"
          />
          <path
            opacity=".4"
            d="M40 48.544c0-2.74 2.01-5.064 4.72-5.46l14.806-2.162a5.517 5.517 0 0 1 6.315 5.46V59.38c0 2.739-2.01 5.063-4.72 5.46l-14.806 2.161A5.517 5.517 0 0 1 40 61.543v-13Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#v)" mask="url(#u)">
          <path fill="#0C0C0C" d="M40 40h47.999v47.998H40z" />
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
            opacity=".8"
            d="M50.4 59.62c0-2.74 2.01-5.064 4.72-5.46l14.807-2.162a5.517 5.517 0 0 1 6.314 5.459v13c0 2.739-2.01 5.063-4.72 5.459l-14.806 2.162a5.517 5.517 0 0 1-6.315-5.46V59.62Z"
            fill="#fff"
          />
          <path
            opacity=".6"
            d="M45.08 53.581c0-2.739 2.01-5.063 4.72-5.459l14.807-2.162a5.517 5.517 0 0 1 6.314 5.46v12.999c0 2.739-2.01 5.063-4.72 5.459L51.395 72.04a5.517 5.517 0 0 1-6.315-5.46V53.582Z"
            fill="#fff"
          />
          <path
            opacity=".4"
            d="M39 47.544c0-2.74 2.01-5.064 4.72-5.46l14.806-2.162a5.517 5.517 0 0 1 6.315 5.46V58.38c0 2.739-2.01 5.063-4.72 5.46l-14.806 2.161A5.517 5.517 0 0 1 39 60.543v-13Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#y)" mask="url(#x)">
          <path fill="#0C0C0C" d="M39 39h47.999v47.998H39z" />
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
            opacity=".8"
            d="M46.4 55.62c0-2.74 2.01-5.064 4.72-5.46l14.807-2.162a5.517 5.517 0 0 1 6.314 5.459v13c0 2.739-2.01 5.063-4.72 5.459l-14.806 2.162a5.517 5.517 0 0 1-6.315-5.46V55.62Z"
            fill="#fff"
          />
          <path
            opacity=".6"
            d="M41.08 49.581c0-2.739 2.01-5.063 4.72-5.459l14.807-2.162a5.517 5.517 0 0 1 6.314 5.46v12.999c0 2.739-2.01 5.063-4.72 5.459L47.395 68.04a5.517 5.517 0 0 1-6.315-5.46V49.582Z"
            fill="#fff"
          />
          <path
            opacity=".4"
            d="M35 43.544c0-2.74 2.01-5.064 4.72-5.46l14.806-2.162a5.517 5.517 0 0 1 6.315 5.46V54.38c0 2.739-2.01 5.063-4.72 5.46l-14.806 2.161A5.517 5.517 0 0 1 35 56.543v-13Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#B)" mask="url(#A)">
          <path fill="#0C0C0C" d="M35 35h47.999v47.998H35z" />
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
            opacity=".8"
            d="M42.4 51.62c0-2.74 2.01-5.064 4.72-5.46l14.807-2.162a5.517 5.517 0 0 1 6.314 5.459v13c0 2.738-2.01 5.063-4.72 5.459l-14.806 2.162a5.517 5.517 0 0 1-6.315-5.46V51.62Z"
            fill="#fff"
          />
          <path
            opacity=".6"
            d="M37.08 45.581c0-2.739 2.01-5.063 4.72-5.459l14.807-2.162a5.517 5.517 0 0 1 6.314 5.46v12.999c0 2.739-2.01 5.063-4.72 5.459L43.395 64.04a5.517 5.517 0 0 1-6.315-5.46V45.582Z"
            fill="#fff"
          />
          <path
            opacity=".4"
            d="M31 39.544c0-2.74 2.01-5.064 4.72-5.46l14.806-2.162a5.517 5.517 0 0 1 6.315 5.46V50.38c0 2.739-2.01 5.063-4.72 5.46l-14.806 2.161A5.517 5.517 0 0 1 31 52.543v-13Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#E)" mask="url(#D)">
          <path fill="#0C0C0C" d="M31 31h47.999v47.998H31z" />
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
            opacity=".8"
            d="M40.4 49.62c0-2.74 2.01-5.064 4.72-5.46l14.807-2.162a5.517 5.517 0 0 1 6.314 5.459v13c0 2.739-2.01 5.063-4.72 5.459l-14.806 2.162a5.517 5.517 0 0 1-6.315-5.46V49.62Z"
            fill="#fff"
          />
          <path
            opacity=".6"
            d="M35.08 43.581c0-2.739 2.01-5.063 4.72-5.459l14.807-2.162a5.517 5.517 0 0 1 6.314 5.46v12.999c0 2.739-2.01 5.063-4.72 5.459L41.395 62.04a5.517 5.517 0 0 1-6.315-5.46V43.582Z"
            fill="#fff"
          />
          <path
            opacity=".4"
            d="M29 37.544c0-2.74 2.01-5.064 4.72-5.46l14.806-2.162a5.517 5.517 0 0 1 6.315 5.46V48.38c0 2.739-2.01 5.063-4.72 5.46l-14.806 2.161A5.517 5.517 0 0 1 29 50.543v-13Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#H)" mask="url(#G)">
          <path fill="#0C0C0C" d="M29 29h47.999v47.998H29z" />
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
            opacity=".8"
            d="M38.4 47.62c0-2.74 2.01-5.064 4.72-5.46l14.807-2.162a5.517 5.517 0 0 1 6.314 5.459v13c0 2.739-2.01 5.063-4.72 5.459l-14.806 2.162a5.517 5.517 0 0 1-6.315-5.46V47.62Z"
            fill="#fff"
          />
          <path
            opacity=".6"
            d="M33.08 41.581c0-2.739 2.01-5.063 4.72-5.459l14.807-2.162a5.517 5.517 0 0 1 6.314 5.46v12.999c0 2.739-2.01 5.063-4.72 5.459L39.395 60.04a5.517 5.517 0 0 1-6.315-5.46V41.582Z"
            fill="#fff"
          />
          <path
            opacity=".4"
            d="M27 35.544c0-2.74 2.01-5.064 4.72-5.46l14.806-2.162a5.517 5.517 0 0 1 6.315 5.46V46.38c0 2.739-2.01 5.063-4.72 5.46l-14.806 2.161A5.517 5.517 0 0 1 27 48.543v-13Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#K)" mask="url(#J)">
          <path fill="#0C0C0C" d="M27 27h47.999v47.998H27z" />
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
            opacity=".8"
            d="M37.4 46.62c0-2.74 2.01-5.064 4.72-5.46l14.807-2.162a5.517 5.517 0 0 1 6.314 5.459v13c0 2.739-2.01 5.063-4.72 5.459l-14.806 2.162a5.517 5.517 0 0 1-6.315-5.46V46.62Z"
            fill="#fff"
          />
          <path
            opacity=".6"
            d="M32.08 40.581c0-2.739 2.01-5.063 4.72-5.459l14.807-2.162a5.517 5.517 0 0 1 6.314 5.46v12.999c0 2.739-2.01 5.063-4.72 5.459L38.395 59.04a5.517 5.517 0 0 1-6.315-5.46V40.582Z"
            fill="#fff"
          />
          <path
            opacity=".4"
            d="M26 34.544c0-2.74 2.01-5.064 4.72-5.46l14.806-2.162a5.517 5.517 0 0 1 6.315 5.46V45.38c0 2.739-2.01 5.063-4.72 5.46l-14.806 2.161A5.517 5.517 0 0 1 26 47.543v-13Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#N)" mask="url(#M)">
          <path fill="#0C0C0C" d="M26 26h47.999v47.998H26z" />
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
            opacity=".8"
            d="M36.4 45.62c0-2.74 2.01-5.064 4.72-5.46l14.807-2.162a5.517 5.517 0 0 1 6.314 5.459v13c0 2.739-2.01 5.063-4.72 5.459l-14.806 2.162a5.517 5.517 0 0 1-6.315-5.46V45.62Z"
            fill="#fff"
          />
          <path
            opacity=".6"
            d="M31.08 39.581c0-2.739 2.01-5.063 4.72-5.459l14.807-2.162a5.517 5.517 0 0 1 6.314 5.46v12.999c0 2.739-2.01 5.063-4.72 5.459L37.395 58.04a5.517 5.517 0 0 1-6.315-5.46V39.582Z"
            fill="#fff"
          />
          <path
            opacity=".4"
            d="M25 33.544c0-2.74 2.01-5.064 4.72-5.46l14.806-2.162a5.517 5.517 0 0 1 6.315 5.46V44.38c0 2.739-2.01 5.063-4.72 5.46l-14.807 2.161A5.517 5.517 0 0 1 25 46.543v-13Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#Q)" mask="url(#P)">
          <path fill="#0C0C0C" d="M25 25h47.999v47.998H25z" />
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
            opacity=".8"
            d="M35.9 45.12c0-2.74 2.01-5.064 4.72-5.46l14.807-2.162a5.517 5.517 0 0 1 6.314 5.459v13c0 2.739-2.01 5.063-4.72 5.459l-14.806 2.162a5.517 5.517 0 0 1-6.315-5.46V45.12Z"
            fill="#fff"
          />
          <path
            opacity=".6"
            d="M30.58 39.081c0-2.739 2.01-5.063 4.72-5.459l14.807-2.162a5.517 5.517 0 0 1 6.314 5.46v12.999c0 2.739-2.01 5.063-4.72 5.459L36.895 57.54a5.517 5.517 0 0 1-6.315-5.46V39.082Z"
            fill="#fff"
          />
          <path
            opacity=".4"
            d="M24.5 33.044c0-2.74 2.01-5.064 4.72-5.46l14.806-2.162a5.517 5.517 0 0 1 6.315 5.46V43.88c0 2.739-2.01 5.063-4.72 5.46l-14.807 2.161a5.517 5.517 0 0 1-6.314-5.459v-13Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#T)" mask="url(#S)">
          <path fill="#0C0C0C" d="M24.5 24.5h47.999v47.998H24.5z" />
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
            opacity=".8"
            d="M35.4 44.62c0-2.74 2.01-5.064 4.72-5.46l14.807-2.162a5.517 5.517 0 0 1 6.314 5.459v13c0 2.739-2.01 5.063-4.72 5.459l-14.806 2.162a5.517 5.517 0 0 1-6.315-5.46V44.62Z"
            fill="#fff"
          />
          <path
            opacity=".6"
            d="M30.08 38.581c0-2.739 2.01-5.063 4.72-5.459l14.807-2.162a5.517 5.517 0 0 1 6.314 5.46v12.999c0 2.739-2.01 5.063-4.72 5.459L36.395 57.04a5.517 5.517 0 0 1-6.315-5.46V38.582Z"
            fill="#fff"
          />
          <path
            opacity=".4"
            d="M24 32.544c0-2.74 2.01-5.064 4.72-5.46l14.806-2.162a5.517 5.517 0 0 1 6.315 5.46V43.38c0 2.739-2.01 5.063-4.72 5.46l-14.807 2.161A5.517 5.517 0 0 1 24 45.543v-13Z"
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
        fill="#FBFBFB"
        style={{
          fontFamily:
            "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        Layers
      </text>

      <text
        y={height - 24}
        x={24}
        fill="#FBFBFB"
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
            result="effect1_foregroundBlur_1_27893"
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
            result="effect1_dropShadow_1_27893"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27893"
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
            result="effect1_foregroundBlur_1_27893"
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
            result="effect1_dropShadow_1_27893"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27893"
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
            result="effect1_foregroundBlur_1_27893"
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
            result="effect1_dropShadow_1_27893"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27893"
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
            result="effect1_foregroundBlur_1_27893"
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
            result="effect1_dropShadow_1_27893"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27893"
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
            result="effect1_foregroundBlur_1_27893"
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
            result="effect1_dropShadow_1_27893"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27893"
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
            result="effect1_foregroundBlur_1_27893"
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
            result="effect1_dropShadow_1_27893"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27893"
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
            result="effect1_foregroundBlur_1_27893"
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
            result="effect1_dropShadow_1_27893"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27893"
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
            result="effect1_foregroundBlur_1_27893"
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
            result="effect1_dropShadow_1_27893"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27893"
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
            result="effect1_foregroundBlur_1_27893"
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
            result="effect1_dropShadow_1_27893"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27893"
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
            result="effect1_foregroundBlur_1_27893"
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
            result="effect1_dropShadow_1_27893"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27893"
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
            result="effect1_foregroundBlur_1_27893"
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
            result="effect1_dropShadow_1_27893"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27893"
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
            result="effect1_foregroundBlur_1_27893"
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
            result="effect1_dropShadow_1_27893"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27893"
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
            result="effect1_foregroundBlur_1_27893"
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
            result="effect1_dropShadow_1_27893"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27893"
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
            result="effect1_foregroundBlur_1_27893"
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
            result="effect1_dropShadow_1_27893"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27893"
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
            result="effect1_foregroundBlur_1_27893"
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
            result="effect1_dropShadow_1_27893"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27893"
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
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend
            mode="hard-light"
            in2="shape"
            result="effect1_innerShadow_1_27893"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
          <feBlend
            mode="soft-light"
            in2="effect1_innerShadow_1_27893"
            result="effect2_innerShadow_1_27893"
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
          <stop stopColor="#2F2F34" />
          <stop offset="1" stopColor="#18181B" />
        </linearGradient>
        <linearGradient
          id="W"
          x1="48"
          y1="24"
          x2="48"
          y2="71.998"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#CDCDCD" />
        </linearGradient>
      </defs>
    </svg>
  );
}
