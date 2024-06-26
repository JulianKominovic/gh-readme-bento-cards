import { BentoLogoProps, getBentoCardSizes } from "@/const/bento-cards";
import { roundedRect } from "@/utils/rounding-svg";

export default function Gitlab({
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
          x="75"
          y="75"
          width="49"
          height="49"
        >
          <path
            d="m114.324 90.384-.055-.14-5.308-13.853a1.382 1.382 0 0 0-1.372-.87c-.291.016-.569.12-.799.3a1.427 1.427 0 0 0-.471.714l-3.584 10.966H88.222l-3.584-10.966a1.393 1.393 0 0 0-.472-.717 1.422 1.422 0 0 0-1.624-.087 1.395 1.395 0 0 0-.546.658l-5.319 13.847-.053.14a9.857 9.857 0 0 0 3.27 11.392l.018.015.049.034 8.086 6.056 4 3.027 2.437 1.84a1.636 1.636 0 0 0 1.982 0l2.437-1.84 4.001-3.027 8.134-6.092.021-.017a9.856 9.856 0 0 0 3.265-11.38Z"
            fill="#FFF2DF"
          />
          <path
            d="m114.324 90.384-.055-.14a17.934 17.934 0 0 0-7.138 3.209l-11.658 8.815c3.97 3.003 7.426 5.613 7.426 5.613l8.135-6.092.021-.016a9.86 9.86 0 0 0 3.269-11.389Z"
            fill="#FFCEA2"
          />
          <path
            d="m88.047 107.881 4 3.028 2.437 1.839a1.635 1.635 0 0 0 1.982 0l2.437-1.839 4-3.028s-3.46-2.618-7.43-5.613c-3.97 2.995-7.426 5.613-7.426 5.613Z"
            fill="#FFB38E"
          />
          <path
            d="M83.813 93.453a17.909 17.909 0 0 0-7.136-3.217l-.053.14a9.857 9.857 0 0 0 3.27 11.392l.018.015.049.034 8.086 6.056 7.426-5.613-11.66-8.807Z"
            fill="#FFCEA2"
          />
        </mask>
        <g filter="url(#d)" mask="url(#c)">
          <path fill="#E24329" d="M76 76h47.999v47.998H76z" />
        </g>
      </g>
      <g opacity=".1" filter="url(#e)">
        <mask
          id="f"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="71"
          y="71"
          width="49"
          height="49"
        >
          <path
            d="m110.324 86.384-.055-.14-5.308-13.853a1.382 1.382 0 0 0-1.372-.87c-.291.016-.569.12-.799.3a1.427 1.427 0 0 0-.471.714l-3.584 10.966H84.222l-3.584-10.966a1.393 1.393 0 0 0-.472-.717 1.422 1.422 0 0 0-1.624-.087 1.395 1.395 0 0 0-.546.658l-5.319 13.847-.053.14a9.857 9.857 0 0 0 3.27 11.392l.018.015.049.034 8.086 6.056 4 3.027 2.437 1.84a1.636 1.636 0 0 0 1.982 0l2.437-1.84 4-3.027 8.135-6.092.021-.017a9.86 9.86 0 0 0 3.265-11.38Z"
            fill="#FFF2DF"
          />
          <path
            d="m110.324 86.384-.055-.14a17.934 17.934 0 0 0-7.138 3.209l-11.658 8.815c3.97 3.003 7.427 5.613 7.427 5.613l8.134-6.092.021-.017a9.857 9.857 0 0 0 3.269-11.388Z"
            fill="#FFCEA2"
          />
          <path
            d="m84.047 103.881 4 3.028 2.437 1.839a1.635 1.635 0 0 0 1.982 0l2.437-1.839 4-3.028s-3.46-2.618-7.43-5.613c-3.97 2.995-7.426 5.613-7.426 5.613Z"
            fill="#FFB38E"
          />
          <path
            d="M79.813 89.453a17.909 17.909 0 0 0-7.136-3.217l-.053.14a9.857 9.857 0 0 0 3.27 11.392l.018.015.049.034 8.086 6.056 7.426-5.613-11.66-8.807Z"
            fill="#FFCEA2"
          />
        </mask>
        <g filter="url(#g)" mask="url(#f)">
          <path fill="#E24329" d="M72 72h47.999v47.998H72z" />
        </g>
      </g>
      <g opacity=".15" filter="url(#h)">
        <mask
          id="i"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="67"
          y="67"
          width="49"
          height="49"
        >
          <path
            d="m106.324 82.384-.055-.14-5.308-13.853a1.382 1.382 0 0 0-1.372-.87c-.29.016-.57.12-.799.3a1.422 1.422 0 0 0-.47.714l-3.585 10.966H80.222l-3.584-10.966a1.393 1.393 0 0 0-.472-.717 1.422 1.422 0 0 0-1.624-.087 1.395 1.395 0 0 0-.546.658l-5.319 13.847-.053.14a9.857 9.857 0 0 0 3.27 11.392l.018.015.049.034 8.086 6.056 4 3.027 2.437 1.84a1.636 1.636 0 0 0 1.982 0l2.437-1.84 4-3.027 8.135-6.092.021-.017a9.86 9.86 0 0 0 3.265-11.38Z"
            fill="#FFF2DF"
          />
          <path
            d="m106.324 82.384-.055-.14a17.93 17.93 0 0 0-7.138 3.209l-11.658 8.815c3.97 3.003 7.427 5.613 7.427 5.613l8.134-6.092.021-.017a9.857 9.857 0 0 0 3.269-11.388Z"
            fill="#FFCEA2"
          />
          <path
            d="m80.047 99.88 4 3.029 2.437 1.839a1.635 1.635 0 0 0 1.982 0l2.437-1.839 4-3.028s-3.46-2.618-7.43-5.613c-3.97 2.995-7.426 5.613-7.426 5.613Z"
            fill="#FFB38E"
          />
          <path
            d="M75.813 85.453a17.909 17.909 0 0 0-7.136-3.217l-.053.14a9.857 9.857 0 0 0 3.27 11.392l.018.015.049.034 8.086 6.056 7.426-5.613-11.66-8.807Z"
            fill="#FFCEA2"
          />
        </mask>
        <g filter="url(#j)" mask="url(#i)">
          <path fill="#E24329" d="M68 68h47.999v47.998H68z" />
        </g>
      </g>
      <g opacity=".2" filter="url(#k)">
        <mask
          id="l"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="63"
          y="63"
          width="49"
          height="49"
        >
          <path
            d="m102.324 78.384-.055-.14-5.308-13.853a1.383 1.383 0 0 0-1.372-.87c-.29.016-.57.12-.799.3a1.422 1.422 0 0 0-.47.714l-3.585 10.966H76.222l-3.584-10.966a1.393 1.393 0 0 0-.472-.717 1.422 1.422 0 0 0-1.624-.087 1.395 1.395 0 0 0-.546.658l-5.319 13.847-.053.14a9.857 9.857 0 0 0 3.27 11.392l.018.015.049.034 8.086 6.056 4 3.027 2.437 1.84a1.636 1.636 0 0 0 1.982 0l2.437-1.84 4-3.027 8.135-6.092.02-.017a9.86 9.86 0 0 0 3.266-11.38Z"
            fill="#FFF2DF"
          />
          <path
            d="m102.324 78.384-.055-.14a17.932 17.932 0 0 0-7.138 3.209l-11.658 8.815c3.97 3.003 7.427 5.613 7.427 5.613l8.134-6.092.02-.017a9.856 9.856 0 0 0 3.27-11.388Z"
            fill="#FFCEA2"
          />
          <path
            d="m76.047 95.88 4 3.029 2.437 1.839a1.635 1.635 0 0 0 1.982 0l2.437-1.84 4-3.027s-3.46-2.618-7.43-5.613c-3.97 2.995-7.426 5.613-7.426 5.613Z"
            fill="#FFB38E"
          />
          <path
            d="M71.813 81.453a17.909 17.909 0 0 0-7.136-3.217l-.053.14a9.857 9.857 0 0 0 3.27 11.392l.018.015.049.034 8.086 6.056 7.426-5.613-11.66-8.807Z"
            fill="#FFCEA2"
          />
        </mask>
        <g filter="url(#m)" mask="url(#l)">
          <path fill="#E24329" d="M64 64h47.999v47.998H64z" />
        </g>
      </g>
      <g opacity=".25" filter="url(#n)">
        <mask
          id="o"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="55"
          y="55"
          width="49"
          height="49"
        >
          <path
            d="m94.324 70.384-.055-.14-5.308-13.853a1.383 1.383 0 0 0-1.372-.87c-.29.016-.57.12-.799.3a1.422 1.422 0 0 0-.47.714l-3.585 10.966H68.222l-3.584-10.966a1.393 1.393 0 0 0-.472-.717 1.422 1.422 0 0 0-1.624-.087 1.395 1.395 0 0 0-.546.658l-5.319 13.847-.053.14a9.857 9.857 0 0 0 3.27 11.392l.018.015.049.034 8.086 6.056 4 3.027 2.437 1.84a1.64 1.64 0 0 0 1.982 0l2.437-1.84 4-3.027 8.135-6.092.02-.017a9.861 9.861 0 0 0 3.266-11.38Z"
            fill="#FFF2DF"
          />
          <path
            d="m94.324 70.384-.055-.14a17.931 17.931 0 0 0-7.138 3.209l-11.658 8.815c3.97 3.003 7.427 5.613 7.427 5.613l8.134-6.092.02-.017a9.86 9.86 0 0 0 3.27-11.388Z"
            fill="#FFCEA2"
          />
          <path
            d="m68.047 87.88 4 3.029 2.437 1.84a1.639 1.639 0 0 0 1.982 0l2.437-1.84 4-3.028s-3.46-2.618-7.43-5.613c-3.97 2.995-7.426 5.613-7.426 5.613Z"
            fill="#FFB38E"
          />
          <path
            d="M63.813 73.453a17.909 17.909 0 0 0-7.136-3.217l-.053.14a9.857 9.857 0 0 0 3.27 11.392l.018.015.049.034 8.086 6.056 7.426-5.613-11.66-8.807Z"
            fill="#FFCEA2"
          />
        </mask>
        <g filter="url(#p)" mask="url(#o)">
          <path fill="#E24329" d="M56 56h47.999v47.998H56z" />
        </g>
      </g>
      <g opacity=".3" filter="url(#q)">
        <mask
          id="r"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="47"
          y="47"
          width="49"
          height="49"
        >
          <path
            d="m86.324 62.384-.055-.14-5.308-13.853a1.383 1.383 0 0 0-1.372-.87c-.29.016-.57.12-.799.3a1.422 1.422 0 0 0-.47.714l-3.585 10.966H60.222l-3.584-10.966a1.393 1.393 0 0 0-.472-.717 1.422 1.422 0 0 0-1.624-.087 1.395 1.395 0 0 0-.546.658l-5.319 13.847-.053.14a9.857 9.857 0 0 0 3.27 11.392l.018.015.049.034 8.086 6.056 4 3.027 2.437 1.84a1.64 1.64 0 0 0 1.982 0l2.437-1.84 4-3.027 8.135-6.092.02-.017a9.861 9.861 0 0 0 3.266-11.38Z"
            fill="#FFF2DF"
          />
          <path
            d="m86.324 62.384-.055-.14a17.931 17.931 0 0 0-7.138 3.209l-11.658 8.815c3.97 3.003 7.427 5.613 7.427 5.613l8.134-6.092.02-.017a9.86 9.86 0 0 0 3.27-11.388Z"
            fill="#FFCEA2"
          />
          <path
            d="m60.047 79.88 4 3.029 2.437 1.84a1.639 1.639 0 0 0 1.982 0l2.437-1.84 4-3.028s-3.46-2.618-7.43-5.613a5711.83 5711.83 0 0 0-7.426 5.613Z"
            fill="#FFB38E"
          />
          <path
            d="M55.813 65.453a17.909 17.909 0 0 0-7.136-3.217l-.053.14a9.857 9.857 0 0 0 3.27 11.392l.018.015.049.034 8.086 6.056 7.426-5.613-11.66-8.807Z"
            fill="#FFCEA2"
          />
        </mask>
        <g filter="url(#s)" mask="url(#r)">
          <path fill="#E24329" d="M48 48h47.999v47.998H48z" />
        </g>
      </g>
      <g opacity=".35" filter="url(#t)">
        <mask
          id="u"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="39"
          y="39"
          width="49"
          height="49"
        >
          <path
            d="m78.324 54.384-.055-.14-5.308-13.853a1.383 1.383 0 0 0-1.372-.87c-.29.016-.57.12-.799.3a1.422 1.422 0 0 0-.47.714l-3.585 10.966H52.222l-3.584-10.966a1.393 1.393 0 0 0-.472-.717 1.422 1.422 0 0 0-1.624-.087 1.395 1.395 0 0 0-.546.658l-5.319 13.847-.053.14a9.857 9.857 0 0 0 3.27 11.392l.018.015.049.034 8.086 6.056 4 3.027 2.437 1.84a1.64 1.64 0 0 0 1.982 0l2.437-1.84 4-3.027 8.135-6.092.02-.017a9.861 9.861 0 0 0 3.266-11.38Z"
            fill="#FFF2DF"
          />
          <path
            d="m78.324 54.384-.055-.14a17.931 17.931 0 0 0-7.138 3.209l-11.658 8.815c3.97 3.003 7.427 5.613 7.427 5.613l8.134-6.092.02-.017a9.86 9.86 0 0 0 3.27-11.388Z"
            fill="#FFCEA2"
          />
          <path
            d="m52.047 71.88 4 3.029 2.437 1.84a1.639 1.639 0 0 0 1.982 0l2.437-1.84 4-3.028s-3.46-2.618-7.43-5.613a5711.83 5711.83 0 0 0-7.426 5.613Z"
            fill="#FFB38E"
          />
          <path
            d="M47.813 57.453a17.909 17.909 0 0 0-7.136-3.217l-.053.14a9.857 9.857 0 0 0 3.27 11.392l.018.015.049.034 8.086 6.056 7.426-5.613-11.66-8.807Z"
            fill="#FFCEA2"
          />
        </mask>
        <g filter="url(#v)" mask="url(#u)">
          <path fill="#E24329" d="M40 40h47.999v47.998H40z" />
        </g>
      </g>
      <g opacity=".4" filter="url(#w)">
        <mask
          id="x"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="38"
          y="38"
          width="49"
          height="49"
        >
          <path
            d="m77.324 53.384-.055-.14-5.308-13.853a1.383 1.383 0 0 0-1.372-.87c-.29.016-.57.12-.799.3a1.422 1.422 0 0 0-.47.714l-3.585 10.966H51.222l-3.584-10.966a1.393 1.393 0 0 0-.472-.717 1.422 1.422 0 0 0-1.624-.087 1.395 1.395 0 0 0-.546.658l-5.319 13.847-.053.14a9.857 9.857 0 0 0 3.27 11.392l.018.015.049.034 8.086 6.056 4 3.027 2.437 1.84a1.64 1.64 0 0 0 1.982 0l2.437-1.84 4-3.027 8.135-6.092.02-.017a9.861 9.861 0 0 0 3.266-11.38Z"
            fill="#FFF2DF"
          />
          <path
            d="m77.324 53.384-.055-.14a17.931 17.931 0 0 0-7.138 3.209l-11.658 8.815c3.97 3.003 7.427 5.613 7.427 5.613l8.134-6.092.02-.017a9.86 9.86 0 0 0 3.27-11.388Z"
            fill="#FFCEA2"
          />
          <path
            d="m51.047 70.88 4 3.029 2.437 1.84a1.639 1.639 0 0 0 1.982 0l2.437-1.84 4-3.028s-3.46-2.618-7.43-5.613a5711.83 5711.83 0 0 0-7.426 5.613Z"
            fill="#FFB38E"
          />
          <path
            d="M46.813 56.453a17.909 17.909 0 0 0-7.136-3.217l-.053.14a9.857 9.857 0 0 0 3.27 11.392l.018.015.049.034 8.086 6.056 7.426-5.613-11.66-8.807Z"
            fill="#FFCEA2"
          />
        </mask>
        <g filter="url(#y)" mask="url(#x)">
          <path fill="#E24329" d="M39 39h47.999v47.998H39z" />
        </g>
      </g>
      <g opacity=".45" filter="url(#z)">
        <mask
          id="A"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="34"
          y="34"
          width="49"
          height="49"
        >
          <path
            d="m73.324 49.384-.055-.14-5.308-13.853a1.383 1.383 0 0 0-1.372-.87c-.29.016-.57.12-.799.3a1.422 1.422 0 0 0-.47.714l-3.585 10.966H47.222l-3.584-10.966a1.393 1.393 0 0 0-.472-.717 1.422 1.422 0 0 0-1.624-.087 1.395 1.395 0 0 0-.546.658l-5.319 13.847-.053.14a9.857 9.857 0 0 0 3.27 11.392l.018.015.049.034 8.086 6.056 4 3.027 2.437 1.84a1.64 1.64 0 0 0 1.982 0l2.437-1.84 4-3.027 8.136-6.092.02-.017a9.861 9.861 0 0 0 3.265-11.38Z"
            fill="#FFF2DF"
          />
          <path
            d="m73.324 49.384-.055-.14a17.931 17.931 0 0 0-7.138 3.209l-11.658 8.815c3.97 3.003 7.427 5.613 7.427 5.613l8.134-6.092.02-.017a9.86 9.86 0 0 0 3.27-11.388Z"
            fill="#FFCEA2"
          />
          <path
            d="m47.047 66.88 4 3.029 2.437 1.84a1.639 1.639 0 0 0 1.982 0l2.437-1.84 4-3.028s-3.46-2.618-7.43-5.613a5711.83 5711.83 0 0 0-7.426 5.613Z"
            fill="#FFB38E"
          />
          <path
            d="M42.813 52.453a17.909 17.909 0 0 0-7.136-3.217l-.053.14a9.857 9.857 0 0 0 3.27 11.392l.018.015.049.034 8.086 6.056 7.426-5.613-11.66-8.807Z"
            fill="#FFCEA2"
          />
        </mask>
        <g filter="url(#B)" mask="url(#A)">
          <path fill="#E24329" d="M35 35h47.999v47.998H35z" />
        </g>
      </g>
      <g opacity=".5" filter="url(#C)">
        <mask
          id="D"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="30"
          y="30"
          width="49"
          height="49"
        >
          <path
            d="m69.324 45.384-.055-.14-5.308-13.853a1.383 1.383 0 0 0-1.372-.87c-.29.016-.57.12-.799.3a1.422 1.422 0 0 0-.47.714l-3.585 10.966H43.222l-3.584-10.966a1.393 1.393 0 0 0-.472-.717 1.422 1.422 0 0 0-1.624-.087 1.395 1.395 0 0 0-.546.658l-5.319 13.847-.052.14a9.857 9.857 0 0 0 3.269 11.392l.018.015.049.034 8.086 6.056 4 3.027 2.437 1.84a1.64 1.64 0 0 0 1.982 0l2.437-1.84 4-3.027 8.136-6.092.02-.017a9.861 9.861 0 0 0 3.265-11.38Z"
            fill="#FFF2DF"
          />
          <path
            d="m69.324 45.384-.055-.14a17.931 17.931 0 0 0-7.138 3.209l-11.658 8.815c3.97 3.003 7.427 5.613 7.427 5.613l8.134-6.092.02-.017a9.86 9.86 0 0 0 3.27-11.388Z"
            fill="#FFCEA2"
          />
          <path
            d="m43.047 62.88 4 3.029 2.437 1.84a1.639 1.639 0 0 0 1.982 0l2.437-1.84 4-3.028s-3.46-2.618-7.43-5.613c-3.97 2.995-7.426 5.613-7.426 5.613Z"
            fill="#FFB38E"
          />
          <path
            d="M38.813 48.453a17.909 17.909 0 0 0-7.136-3.217l-.052.14a9.857 9.857 0 0 0 3.269 11.392l.018.015.049.034 8.086 6.056 7.426-5.613-11.66-8.807Z"
            fill="#FFCEA2"
          />
        </mask>
        <g filter="url(#E)" mask="url(#D)">
          <path fill="#E24329" d="M31 31h47.999v47.998H31z" />
        </g>
      </g>
      <g opacity=".55" filter="url(#F)">
        <mask
          id="G"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="28"
          y="28"
          width="49"
          height="49"
        >
          <path
            d="m67.324 43.384-.055-.14-5.308-13.853a1.383 1.383 0 0 0-1.372-.87c-.29.016-.57.12-.799.3a1.422 1.422 0 0 0-.47.714l-3.585 10.966H41.222l-3.584-10.966a1.393 1.393 0 0 0-.472-.717 1.422 1.422 0 0 0-1.624-.087 1.395 1.395 0 0 0-.546.658l-5.319 13.847-.052.14a9.857 9.857 0 0 0 3.269 11.392l.018.015.049.034 8.086 6.056 4 3.027 2.437 1.84a1.64 1.64 0 0 0 1.982 0l2.437-1.84 4-3.027 8.136-6.092.02-.017a9.861 9.861 0 0 0 3.265-11.38Z"
            fill="#FFF2DF"
          />
          <path
            d="m67.324 43.384-.055-.14a17.931 17.931 0 0 0-7.138 3.209l-11.658 8.815c3.97 3.003 7.427 5.613 7.427 5.613l8.134-6.092.02-.017a9.86 9.86 0 0 0 3.27-11.388Z"
            fill="#FFCEA2"
          />
          <path
            d="m41.047 60.88 4 3.028 2.437 1.84a1.639 1.639 0 0 0 1.982 0l2.437-1.84 4-3.027s-3.46-2.618-7.43-5.613c-3.97 2.995-7.426 5.613-7.426 5.613Z"
            fill="#FFB38E"
          />
          <path
            d="M36.813 46.453a17.909 17.909 0 0 0-7.136-3.217l-.052.14a9.857 9.857 0 0 0 3.269 11.392l.018.015.049.034 8.086 6.056 7.426-5.613-11.66-8.807Z"
            fill="#FFCEA2"
          />
        </mask>
        <g filter="url(#H)" mask="url(#G)">
          <path fill="#E24329" d="M29 29h47.999v47.998H29z" />
        </g>
      </g>
      <g opacity=".6" filter="url(#I)">
        <mask
          id="J"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="26"
          y="26"
          width="49"
          height="49"
        >
          <path
            d="m65.324 41.384-.055-.14-5.308-13.853a1.383 1.383 0 0 0-1.372-.87c-.29.016-.57.12-.799.3a1.422 1.422 0 0 0-.47.714l-3.585 10.966H39.222l-3.584-10.966a1.393 1.393 0 0 0-.472-.717 1.422 1.422 0 0 0-1.624-.087 1.395 1.395 0 0 0-.546.658l-5.319 13.847-.052.14a9.857 9.857 0 0 0 3.269 11.392l.018.015.049.034 8.086 6.056 4 3.027 2.437 1.84a1.64 1.64 0 0 0 1.982 0l2.437-1.84 4-3.027 8.136-6.092.02-.017a9.861 9.861 0 0 0 3.265-11.38Z"
            fill="#FFF2DF"
          />
          <path
            d="m65.324 41.384-.055-.14a17.931 17.931 0 0 0-7.138 3.209l-11.658 8.815c3.97 3.003 7.427 5.613 7.427 5.613l8.134-6.092.02-.017a9.86 9.86 0 0 0 3.27-11.388Z"
            fill="#FFCEA2"
          />
          <path
            d="m39.047 58.88 4 3.028 2.437 1.84a1.639 1.639 0 0 0 1.982 0l2.437-1.84 4-3.027s-3.46-2.618-7.43-5.613c-3.97 2.995-7.426 5.613-7.426 5.613Z"
            fill="#FFB38E"
          />
          <path
            d="M34.813 44.453a17.909 17.909 0 0 0-7.136-3.217l-.052.14a9.857 9.857 0 0 0 3.269 11.392l.018.015.049.034 8.086 6.056 7.426-5.613-11.66-8.807Z"
            fill="#FFCEA2"
          />
        </mask>
        <g filter="url(#K)" mask="url(#J)">
          <path fill="#E24329" d="M27 27h47.999v47.998H27z" />
        </g>
      </g>
      <g opacity=".6" filter="url(#L)">
        <mask
          id="M"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="25"
          y="25"
          width="49"
          height="49"
        >
          <path
            d="m64.324 40.384-.055-.14-5.308-13.853a1.383 1.383 0 0 0-1.372-.87c-.29.016-.57.12-.799.3a1.422 1.422 0 0 0-.47.714l-3.585 10.966H38.222l-3.584-10.966a1.393 1.393 0 0 0-.472-.717 1.422 1.422 0 0 0-1.624-.087 1.395 1.395 0 0 0-.546.658l-5.319 13.847-.052.14a9.857 9.857 0 0 0 3.269 11.392l.018.015.049.034 8.086 6.056 4 3.027 2.437 1.84a1.64 1.64 0 0 0 1.982 0l2.437-1.84 4-3.027 8.136-6.092.02-.017a9.861 9.861 0 0 0 3.265-11.38Z"
            fill="#FFF2DF"
          />
          <path
            d="m64.324 40.384-.055-.14a17.931 17.931 0 0 0-7.138 3.209l-11.658 8.815c3.97 3.003 7.427 5.613 7.427 5.613l8.134-6.092.02-.017a9.86 9.86 0 0 0 3.27-11.388Z"
            fill="#FFCEA2"
          />
          <path
            d="m38.047 57.88 4 3.028 2.437 1.84a1.639 1.639 0 0 0 1.982 0l2.437-1.84 4-3.027s-3.46-2.618-7.43-5.613c-3.97 2.995-7.426 5.613-7.426 5.613Z"
            fill="#FFB38E"
          />
          <path
            d="M33.813 43.453a17.909 17.909 0 0 0-7.136-3.217l-.052.14a9.857 9.857 0 0 0 3.269 11.392l.018.015.049.034 8.086 6.056 7.426-5.613-11.66-8.807Z"
            fill="#FFCEA2"
          />
        </mask>
        <g filter="url(#N)" mask="url(#M)">
          <path fill="#E24329" d="M26 26h47.999v47.998H26z" />
        </g>
      </g>
      <g opacity=".6" filter="url(#O)">
        <mask
          id="P"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="24"
          y="24"
          width="49"
          height="49"
        >
          <path
            d="m63.324 39.384-.055-.14-5.308-13.853a1.383 1.383 0 0 0-1.372-.87c-.29.016-.57.12-.799.3a1.422 1.422 0 0 0-.47.714l-3.585 10.966H37.222l-3.584-10.966a1.393 1.393 0 0 0-.472-.717 1.422 1.422 0 0 0-1.624-.087 1.395 1.395 0 0 0-.546.658l-5.319 13.847-.052.14a9.857 9.857 0 0 0 3.269 11.392l.018.015.049.034 8.086 6.056 4 3.027 2.437 1.84a1.64 1.64 0 0 0 1.982 0l2.437-1.84 4-3.027 8.136-6.092.02-.017a9.861 9.861 0 0 0 3.265-11.38Z"
            fill="#FFF2DF"
          />
          <path
            d="m63.324 39.384-.055-.14a17.931 17.931 0 0 0-7.138 3.209l-11.658 8.815c3.97 3.003 7.427 5.613 7.427 5.613l8.134-6.092.02-.017a9.86 9.86 0 0 0 3.27-11.388Z"
            fill="#FFCEA2"
          />
          <path
            d="m37.047 56.88 4 3.028 2.437 1.84a1.639 1.639 0 0 0 1.982 0l2.437-1.84 4-3.027s-3.46-2.618-7.43-5.613c-3.97 2.995-7.426 5.613-7.426 5.613Z"
            fill="#FFB38E"
          />
          <path
            d="M32.813 42.453a17.909 17.909 0 0 0-7.136-3.217l-.052.14a9.857 9.857 0 0 0 3.269 11.392l.018.015.049.034 8.086 6.056 7.426-5.613-11.66-8.807Z"
            fill="#FFCEA2"
          />
        </mask>
        <g filter="url(#Q)" mask="url(#P)">
          <path fill="#E24329" d="M25 25h47.999v47.998H25z" />
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
            d="m62.824 38.884-.055-.14-5.308-13.853a1.383 1.383 0 0 0-1.372-.87c-.29.016-.57.12-.799.3a1.422 1.422 0 0 0-.47.714l-3.585 10.966H36.722l-3.584-10.966a1.393 1.393 0 0 0-.472-.717 1.422 1.422 0 0 0-1.624-.087 1.395 1.395 0 0 0-.546.658l-5.319 13.847-.052.14a9.857 9.857 0 0 0 3.269 11.392l.018.015.049.034 8.086 6.056 4 3.027 2.437 1.84a1.64 1.64 0 0 0 1.982 0l2.437-1.84 4-3.027 8.136-6.092.02-.017a9.861 9.861 0 0 0 3.265-11.38Z"
            fill="#FFF2DF"
          />
          <path
            d="m62.824 38.884-.055-.14a17.931 17.931 0 0 0-7.138 3.209l-11.658 8.815c3.97 3.003 7.427 5.613 7.427 5.613l8.134-6.092.02-.017a9.86 9.86 0 0 0 3.27-11.388Z"
            fill="#FFCEA2"
          />
          <path
            d="m36.547 56.38 4 3.028 2.437 1.84a1.639 1.639 0 0 0 1.982 0l2.437-1.84 4-3.027s-3.46-2.618-7.43-5.613c-3.97 2.995-7.426 5.613-7.426 5.613Z"
            fill="#FFB38E"
          />
          <path
            d="M32.313 41.953a17.909 17.909 0 0 0-7.136-3.217l-.052.14a9.857 9.857 0 0 0 3.269 11.392l.018.015.049.034 8.086 6.056 7.426-5.613-11.66-8.807Z"
            fill="#FFCEA2"
          />
        </mask>
        <g filter="url(#T)" mask="url(#S)">
          <path fill="#E24329" d="M24.5 24.5h47.999v47.998H24.5z" />
        </g>
      </g>
      <g filter="url(#U)">
        <path
          d="m62.324 38.384-.055-.14-5.308-13.853a1.383 1.383 0 0 0-1.372-.87c-.29.016-.57.12-.799.3a1.422 1.422 0 0 0-.47.714l-3.585 10.966H36.222l-3.584-10.966a1.393 1.393 0 0 0-.472-.717 1.422 1.422 0 0 0-1.624-.087 1.395 1.395 0 0 0-.546.658l-5.319 13.847-.052.14a9.857 9.857 0 0 0 3.269 11.392l.018.015.049.034 8.086 6.056 4 3.027 2.437 1.84a1.64 1.64 0 0 0 1.982 0l2.437-1.84 4-3.027 8.136-6.092.02-.017a9.861 9.861 0 0 0 3.265-11.38Z"
          fill="#FFF2DF"
        />
        <path
          d="m62.324 38.384-.055-.14a17.931 17.931 0 0 0-7.138 3.209l-11.658 8.815c3.97 3.003 7.427 5.613 7.427 5.613l8.134-6.092.02-.017a9.86 9.86 0 0 0 3.27-11.388Z"
          fill="#FFCEA2"
        />
        <path
          d="m36.047 55.88 4 3.028 2.437 1.84a1.639 1.639 0 0 0 1.982 0l2.437-1.84 4-3.027s-3.46-2.618-7.43-5.613c-3.97 2.995-7.426 5.613-7.426 5.613Z"
          fill="#FFA980"
        />
        <path
          d="M31.813 41.453a17.909 17.909 0 0 0-7.136-3.217l-.052.14a9.857 9.857 0 0 0 3.269 11.392l.018.015.049.034 8.086 6.056 7.426-5.613-11.66-8.807Z"
          fill="#FFCEA2"
        />
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
        Gitlab
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
            result="effect1_foregroundBlur_70_13004"
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
            result="effect1_dropShadow_70_13004"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_13004"
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
            result="effect1_foregroundBlur_70_13004"
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
            result="effect1_dropShadow_70_13004"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_13004"
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
            result="effect1_foregroundBlur_70_13004"
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
            result="effect1_dropShadow_70_13004"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_13004"
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
            result="effect1_foregroundBlur_70_13004"
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
            result="effect1_dropShadow_70_13004"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_13004"
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
            result="effect1_foregroundBlur_70_13004"
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
            result="effect1_dropShadow_70_13004"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_13004"
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
            result="effect1_foregroundBlur_70_13004"
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
            result="effect1_dropShadow_70_13004"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_13004"
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
            result="effect1_foregroundBlur_70_13004"
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
            result="effect1_dropShadow_70_13004"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_13004"
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
            result="effect1_foregroundBlur_70_13004"
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
            result="effect1_dropShadow_70_13004"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_13004"
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
            result="effect1_foregroundBlur_70_13004"
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
            result="effect1_dropShadow_70_13004"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_13004"
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
            result="effect1_foregroundBlur_70_13004"
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
            result="effect1_dropShadow_70_13004"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_13004"
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
            result="effect1_foregroundBlur_70_13004"
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
            result="effect1_dropShadow_70_13004"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_13004"
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
            result="effect1_foregroundBlur_70_13004"
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
            result="effect1_dropShadow_70_13004"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_13004"
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
            result="effect1_foregroundBlur_70_13004"
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
            result="effect1_dropShadow_70_13004"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_13004"
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
            result="effect1_foregroundBlur_70_13004"
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
            result="effect1_dropShadow_70_13004"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_13004"
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
            result="effect1_foregroundBlur_70_13004"
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
            result="effect1_dropShadow_70_13004"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_13004"
            result="shape"
          />
        </filter>
        <filter
          id="U"
          x="23.473"
          y="22.517"
          width="49.527"
          height="50.483"
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
          <feColorMatrix values="0 0 0 0 0.7625 0 0 0 0 0.32025 0 0 0 0 0 0 0 0 1 0" />
          <feBlend
            mode="hard-light"
            in2="shape"
            result="effect1_innerShadow_70_13004"
          />
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
            in2="effect1_innerShadow_70_13004"
            result="effect2_innerShadow_70_13004"
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
          <stop stopColor="#FCA326" />
          <stop offset="1" stopColor="#E24329" />
        </linearGradient>
      </defs>
    </svg>
  );
}
