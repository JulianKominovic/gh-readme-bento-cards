import { BentoLogoProps, getBentoCardSizes } from "@/const/bento-cards";
import { roundedRect } from "@/utils/rounding-svg";

export default function Pinterest({
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
            d="M105.623 110.755C110.677 107.341 114 101.558 114 95c0-10.493-8.507-19-19-19-4.704 0-9.008 1.71-12.326 4.54a19.1 19.1 0 0 0-3.43 3.837A18.912 18.912 0 0 0 76 95a19.304 19.304 0 0 0 .06 1.518c.584 7.388 5.397 13.588 12.016 16.181-.166-1.503-.316-3.815.066-5.456.345-1.483 2.228-9.445 2.228-9.445s-.569-1.138-.569-2.82c0-2.643 1.532-4.615 3.438-4.615 1.621 0 2.404 1.217 2.404 2.676 0 1.04-.422 2.41-.868 3.852-.252.817-.511 1.657-.705 2.475-.448 1.891.948 3.433 2.813 3.433 3.377 0 5.973-3.56 5.973-8.7 0-4.55-3.269-7.73-7.936-7.73-5.406 0-8.58 4.054-8.58 8.245 0 1.633.63 3.384 1.414 4.336a.568.568 0 0 1 .132.545c-.081.338-.218.896-.334 1.366l-.194.789c-.082.347-.275.421-.635.254-2.373-1.105-3.857-4.574-3.857-7.361 0-5.994 4.355-11.498 12.555-11.498 6.591 0 11.713 4.697 11.713 10.974 0 6.548-4.129 11.818-9.86 11.818-1.925 0-3.735-1-4.355-2.182 0 0-.952 3.628-1.183 4.517-.43 1.65-1.587 3.719-2.362 4.981 1.778.55 3.667.847 5.626.847.94 0 1.863-.068 2.766-.2a18.883 18.883 0 0 0 7.857-3.045Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#d)" mask="url(#c)">
          <path fill="#A30A00" d="M76 76h47.999v47.998H76z" />
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
            d="M101.623 106.755C106.677 103.341 110 97.558 110 91c0-10.493-8.507-19-19-19-4.704 0-9.008 1.71-12.326 4.54a19.1 19.1 0 0 0-3.43 3.837A18.912 18.912 0 0 0 72 91a19.304 19.304 0 0 0 .06 1.518c.584 7.388 5.397 13.588 12.016 16.181-.166-1.503-.316-3.815.066-5.456.345-1.483 2.228-9.445 2.228-9.445s-.569-1.138-.569-2.82c0-2.643 1.532-4.615 3.438-4.615 1.621 0 2.404 1.217 2.404 2.676 0 1.04-.422 2.41-.868 3.852-.252.817-.511 1.657-.705 2.475-.448 1.89.948 3.433 2.813 3.433 3.377 0 5.973-3.56 5.973-8.7 0-4.55-3.269-7.73-7.936-7.73-5.406 0-8.58 4.054-8.58 8.245 0 1.633.63 3.384 1.414 4.336a.568.568 0 0 1 .132.545c-.081.338-.218.896-.334 1.366l-.194.789c-.082.347-.275.421-.635.254-2.373-1.105-3.857-4.574-3.857-7.361 0-5.994 4.355-11.498 12.555-11.498 6.59 0 11.713 4.697 11.713 10.974 0 6.548-4.13 11.818-9.86 11.818-1.925 0-3.735-1-4.355-2.182 0 0-.952 3.628-1.183 4.517-.43 1.65-1.587 3.719-2.362 4.981 1.778.55 3.667.847 5.626.847.94 0 1.863-.068 2.766-.2a18.883 18.883 0 0 0 7.857-3.045Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#g)" mask="url(#f)">
          <path fill="#A30A00" d="M72 72h47.999v47.998H72z" />
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
            d="M97.623 102.755C102.677 99.341 106 93.558 106 87c0-10.493-8.507-19-19-19-4.704 0-9.008 1.71-12.326 4.54a19.1 19.1 0 0 0-3.43 3.837A18.912 18.912 0 0 0 68 87a19.304 19.304 0 0 0 .06 1.518c.584 7.388 5.397 13.588 12.016 16.181-.166-1.503-.316-3.815.066-5.456.345-1.483 2.228-9.445 2.228-9.445s-.569-1.138-.569-2.82c0-2.643 1.532-4.615 3.438-4.615 1.621 0 2.404 1.217 2.404 2.676 0 1.04-.422 2.41-.868 3.852-.252.817-.511 1.657-.705 2.475-.448 1.89.948 3.433 2.813 3.433 3.377 0 5.973-3.56 5.973-8.7 0-4.55-3.269-7.73-7.936-7.73-5.406 0-8.58 4.054-8.58 8.245 0 1.633.63 3.384 1.414 4.336a.568.568 0 0 1 .132.545c-.081.338-.218.896-.334 1.366l-.194.789c-.082.347-.275.421-.635.254-2.373-1.105-3.857-4.574-3.857-7.361 0-5.994 4.355-11.498 12.555-11.498 6.59 0 11.713 4.697 11.713 10.974 0 6.548-4.13 11.818-9.86 11.818-1.925 0-3.735-1-4.355-2.182 0 0-.952 3.628-1.183 4.517-.43 1.65-1.587 3.719-2.362 4.981 1.778.55 3.667.847 5.626.847.94 0 1.863-.068 2.766-.2a18.884 18.884 0 0 0 7.857-3.045Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#j)" mask="url(#i)">
          <path fill="#A30A00" d="M68 68h47.999v47.998H68z" />
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
            d="M93.623 98.755C98.677 95.341 102 89.558 102 83c0-10.493-8.507-19-19-19-4.704 0-9.008 1.71-12.326 4.54a19.1 19.1 0 0 0-3.43 3.837A18.912 18.912 0 0 0 64 83a19.304 19.304 0 0 0 .06 1.518c.584 7.388 5.397 13.588 12.016 16.181-.166-1.503-.316-3.815.066-5.456.345-1.483 2.228-9.445 2.228-9.445s-.569-1.138-.569-2.82c0-2.643 1.532-4.615 3.438-4.615 1.621 0 2.404 1.217 2.404 2.676 0 1.04-.422 2.41-.868 3.852-.252.817-.511 1.657-.705 2.475-.448 1.89.948 3.433 2.813 3.433 3.377 0 5.973-3.56 5.973-8.7 0-4.55-3.269-7.73-7.936-7.73-5.406 0-8.58 4.054-8.58 8.245 0 1.633.63 3.384 1.414 4.336a.568.568 0 0 1 .132.545c-.081.338-.218.896-.334 1.366l-.194.789c-.082.347-.275.421-.635.254-2.373-1.105-3.857-4.574-3.857-7.361 0-5.994 4.355-11.498 12.555-11.498 6.59 0 11.713 4.697 11.713 10.974 0 6.548-4.13 11.818-9.86 11.818-1.925 0-3.735-1-4.355-2.182 0 0-.952 3.628-1.183 4.517-.43 1.65-1.587 3.719-2.362 4.981 1.778.55 3.667.847 5.626.847.94 0 1.863-.068 2.766-.2a18.885 18.885 0 0 0 7.857-3.045Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#m)" mask="url(#l)">
          <path fill="#A30A00" d="M64 64h47.999v47.998H64z" />
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
            d="M85.623 90.755C90.677 87.341 94 81.558 94 75c0-10.493-8.507-19-19-19-4.704 0-9.008 1.71-12.326 4.54a19.1 19.1 0 0 0-3.43 3.837A18.912 18.912 0 0 0 56 75c0 .503.02 1.002.058 1.495l.002.023c.584 7.388 5.397 13.588 12.016 16.18-.166-1.502-.316-3.814.066-5.455.345-1.483 2.228-9.445 2.228-9.445s-.569-1.138-.569-2.82c0-2.643 1.532-4.615 3.438-4.615 1.621 0 2.404 1.217 2.404 2.676 0 1.04-.422 2.41-.868 3.852-.252.817-.511 1.657-.705 2.475-.448 1.89.948 3.433 2.813 3.433 3.377 0 5.973-3.56 5.973-8.7 0-4.55-3.269-7.73-7.936-7.73-5.406 0-8.58 4.054-8.58 8.245 0 1.633.63 3.384 1.414 4.336a.568.568 0 0 1 .132.545c-.081.338-.218.896-.334 1.366l-.194.789c-.082.347-.275.421-.635.254-2.373-1.105-3.857-4.574-3.857-7.361 0-5.994 4.355-11.498 12.555-11.498 6.59 0 11.713 4.697 11.713 10.974 0 6.548-4.13 11.818-9.86 11.818-1.925 0-3.735-1-4.355-2.182 0 0-.952 3.628-1.183 4.517-.43 1.65-1.587 3.719-2.362 4.98a19.16 19.16 0 0 0 8.392.647 18.89 18.89 0 0 0 7.857-3.044Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#p)" mask="url(#o)">
          <path fill="#A30A00" d="M56 56h47.999v47.998H56z" />
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
            d="M77.623 82.755C82.677 79.341 86 73.558 86 67c0-10.493-8.507-19-19-19-4.704 0-9.008 1.71-12.326 4.54a19.1 19.1 0 0 0-3.43 3.837A18.912 18.912 0 0 0 48 67c0 .503.02 1.002.058 1.495l.002.023c.584 7.388 5.397 13.588 12.016 16.18-.166-1.502-.316-3.814.066-5.455.345-1.483 2.228-9.445 2.228-9.445s-.569-1.138-.569-2.82c0-2.643 1.532-4.615 3.438-4.615 1.621 0 2.404 1.217 2.404 2.676 0 1.04-.422 2.41-.868 3.852-.252.817-.511 1.657-.705 2.475-.448 1.89.948 3.433 2.813 3.433 3.377 0 5.973-3.56 5.973-8.7 0-4.55-3.269-7.73-7.936-7.73-5.406 0-8.58 4.054-8.58 8.245 0 1.633.63 3.384 1.414 4.336a.568.568 0 0 1 .132.545c-.081.338-.219.896-.334 1.366l-.194.789c-.082.347-.275.421-.635.254-2.373-1.105-3.857-4.574-3.857-7.361 0-5.994 4.355-11.498 12.555-11.498 6.59 0 11.713 4.697 11.713 10.974 0 6.548-4.13 11.818-9.86 11.818-1.925 0-3.735-1-4.355-2.182 0 0-.952 3.628-1.183 4.517-.43 1.65-1.587 3.719-2.362 4.98a19.16 19.16 0 0 0 8.392.647 18.89 18.89 0 0 0 7.857-3.044Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#s)" mask="url(#r)">
          <path fill="#A30A00" d="M48 48h47.999v47.998H48z" />
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
            d="M69.623 74.755C74.677 71.341 78 65.558 78 59c0-10.493-8.507-19-19-19-4.704 0-9.008 1.71-12.326 4.54a19.1 19.1 0 0 0-3.43 3.837A18.912 18.912 0 0 0 40 59c0 .503.02 1.002.058 1.495l.002.023c.584 7.388 5.397 13.588 12.016 16.18-.166-1.502-.316-3.814.066-5.455.345-1.483 2.228-9.445 2.228-9.445s-.569-1.138-.569-2.82c0-2.643 1.532-4.615 3.438-4.615 1.621 0 2.404 1.217 2.404 2.676 0 1.04-.422 2.41-.867 3.852-.253.817-.512 1.657-.706 2.475-.448 1.89.948 3.433 2.813 3.433 3.377 0 5.973-3.56 5.973-8.7 0-4.55-3.269-7.73-7.936-7.73-5.406 0-8.58 4.054-8.58 8.245 0 1.633.63 3.384 1.414 4.336a.568.568 0 0 1 .132.545c-.081.338-.219.896-.334 1.366l-.194.789c-.082.347-.275.421-.635.254-2.373-1.105-3.857-4.574-3.857-7.361 0-5.993 4.355-11.498 12.554-11.498 6.592 0 11.714 4.697 11.714 10.974 0 6.548-4.13 11.818-9.86 11.818-1.925 0-3.735-1-4.355-2.182 0 0-.952 3.628-1.183 4.517-.43 1.65-1.587 3.719-2.362 4.98a19.16 19.16 0 0 0 8.392.647 18.89 18.89 0 0 0 7.857-3.044Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#v)" mask="url(#u)">
          <path fill="#A30A00" d="M40 40h47.999v47.998H40z" />
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
            d="M68.623 73.755C73.677 70.341 77 64.558 77 58c0-10.493-8.507-19-19-19-4.704 0-9.008 1.71-12.326 4.54a19.1 19.1 0 0 0-3.43 3.837A18.912 18.912 0 0 0 39 58c0 .503.02 1.002.058 1.495l.002.023c.584 7.388 5.397 13.588 12.016 16.18-.166-1.502-.316-3.814.066-5.455.345-1.483 2.228-9.445 2.228-9.445s-.569-1.138-.569-2.82c0-2.643 1.532-4.615 3.438-4.615 1.621 0 2.404 1.217 2.404 2.676 0 1.04-.422 2.41-.867 3.852-.253.817-.512 1.657-.706 2.475-.448 1.89.948 3.433 2.813 3.433 3.377 0 5.973-3.56 5.973-8.7 0-4.55-3.269-7.73-7.936-7.73-5.406 0-8.58 4.054-8.58 8.245 0 1.633.63 3.384 1.414 4.336a.568.568 0 0 1 .132.545c-.081.338-.219.896-.334 1.366l-.194.789c-.082.347-.275.421-.635.254-2.373-1.105-3.857-4.574-3.857-7.361 0-5.993 4.355-11.498 12.554-11.498 6.592 0 11.714 4.697 11.714 10.974 0 6.548-4.13 11.818-9.86 11.818-1.925 0-3.735-1-4.355-2.182 0 0-.952 3.628-1.183 4.517-.43 1.65-1.587 3.719-2.362 4.98a19.16 19.16 0 0 0 8.392.647 18.89 18.89 0 0 0 7.857-3.044Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#y)" mask="url(#x)">
          <path fill="#A30A00" d="M39 39h47.999v47.998H39z" />
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
            d="M64.623 69.755C69.677 66.341 73 60.558 73 54c0-10.493-8.507-19-19-19-4.704 0-9.008 1.71-12.326 4.54a19.1 19.1 0 0 0-3.43 3.837A18.912 18.912 0 0 0 35 54c0 .503.02 1.002.058 1.495l.002.023c.584 7.388 5.397 13.588 12.016 16.18-.166-1.502-.316-3.814.066-5.455.345-1.483 2.228-9.445 2.228-9.445s-.569-1.138-.569-2.82c0-2.643 1.532-4.615 3.438-4.615 1.621 0 2.404 1.217 2.404 2.676 0 1.04-.422 2.41-.867 3.852-.253.817-.512 1.657-.706 2.475-.448 1.89.948 3.433 2.813 3.433 3.377 0 5.973-3.56 5.973-8.7 0-4.55-3.269-7.73-7.936-7.73-5.406 0-8.58 4.054-8.58 8.245 0 1.633.63 3.384 1.414 4.336a.568.568 0 0 1 .132.545c-.081.338-.219.896-.334 1.366l-.194.789c-.082.347-.275.421-.635.254-2.373-1.105-3.857-4.574-3.857-7.361 0-5.993 4.355-11.498 12.554-11.498 6.592 0 11.714 4.697 11.714 10.974 0 6.548-4.13 11.818-9.86 11.818-1.925 0-3.735-1-4.355-2.182 0 0-.952 3.628-1.183 4.517-.43 1.65-1.587 3.719-2.362 4.98a19.16 19.16 0 0 0 8.392.647 18.89 18.89 0 0 0 7.857-3.044Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#B)" mask="url(#A)">
          <path fill="#A30A00" d="M35 35h47.999v47.998H35z" />
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
            d="M60.623 65.755C65.677 62.341 69 56.558 69 50c0-10.493-8.507-19-19-19-4.704 0-9.008 1.71-12.326 4.54a19.1 19.1 0 0 0-3.43 3.837A18.912 18.912 0 0 0 31 50a19.304 19.304 0 0 0 .06 1.518c.584 7.388 5.397 13.588 12.016 16.18-.166-1.502-.316-3.814.066-5.455.345-1.483 2.228-9.445 2.228-9.445s-.569-1.138-.569-2.82c0-2.643 1.532-4.615 3.438-4.615 1.621 0 2.404 1.217 2.404 2.676 0 1.04-.422 2.41-.867 3.852-.253.817-.512 1.657-.706 2.475-.448 1.89.948 3.433 2.813 3.433 3.377 0 5.973-3.56 5.973-8.7 0-4.55-3.269-7.73-7.936-7.73-5.406 0-8.58 4.054-8.58 8.245 0 1.633.63 3.384 1.414 4.336a.568.568 0 0 1 .132.545c-.081.338-.219.896-.334 1.366l-.194.789c-.082.347-.275.421-.635.254-2.373-1.105-3.857-4.574-3.857-7.361 0-5.993 4.355-11.498 12.554-11.498 6.592 0 11.714 4.697 11.714 10.974 0 6.548-4.13 11.818-9.86 11.818-1.925 0-3.735-1-4.355-2.182 0 0-.952 3.628-1.183 4.517-.43 1.65-1.587 3.719-2.362 4.98a19.16 19.16 0 0 0 8.392.647 18.89 18.89 0 0 0 7.857-3.044Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#E)" mask="url(#D)">
          <path fill="#A30A00" d="M31 31h47.999v47.998H31z" />
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
            d="M58.623 63.755C63.677 60.341 67 54.558 67 48c0-10.493-8.507-19-19-19-4.704 0-9.008 1.71-12.326 4.54a19.1 19.1 0 0 0-3.43 3.837A18.912 18.912 0 0 0 29 48a19.304 19.304 0 0 0 .06 1.518c.584 7.388 5.397 13.588 12.016 16.18-.166-1.502-.316-3.814.066-5.455.345-1.483 2.228-9.445 2.228-9.445s-.569-1.138-.569-2.82c0-2.643 1.532-4.615 3.438-4.615 1.621 0 2.404 1.217 2.404 2.676 0 1.04-.422 2.41-.867 3.852-.253.817-.512 1.657-.706 2.475-.448 1.89.948 3.433 2.813 3.433 3.377 0 5.973-3.56 5.973-8.7 0-4.55-3.269-7.73-7.936-7.73-5.406 0-8.58 4.054-8.58 8.245 0 1.633.63 3.384 1.414 4.336a.568.568 0 0 1 .132.545c-.081.338-.219.896-.334 1.366l-.194.789c-.082.347-.275.421-.635.254-2.373-1.105-3.857-4.574-3.857-7.361 0-5.993 4.355-11.498 12.554-11.498 6.592 0 11.714 4.697 11.714 10.974 0 6.548-4.13 11.818-9.86 11.818-1.925 0-3.735-1-4.355-2.182 0 0-.952 3.628-1.183 4.517-.43 1.65-1.587 3.719-2.362 4.98a19.16 19.16 0 0 0 8.392.647 18.89 18.89 0 0 0 7.857-3.044Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#H)" mask="url(#G)">
          <path fill="#A30A00" d="M29 29h47.999v47.998H29z" />
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
            d="M56.623 61.755C61.677 58.341 65 52.558 65 46c0-10.493-8.507-19-19-19-4.704 0-9.008 1.71-12.326 4.54a19.1 19.1 0 0 0-3.43 3.837A18.912 18.912 0 0 0 27 46a19.304 19.304 0 0 0 .06 1.518c.584 7.388 5.397 13.588 12.016 16.18-.166-1.502-.316-3.814.066-5.455.345-1.483 2.228-9.445 2.228-9.445s-.569-1.138-.569-2.82c0-2.643 1.532-4.615 3.438-4.615 1.621 0 2.404 1.217 2.404 2.676 0 1.04-.422 2.41-.867 3.852-.253.817-.512 1.657-.706 2.475-.448 1.89.948 3.433 2.813 3.433 3.377 0 5.973-3.56 5.973-8.7 0-4.55-3.269-7.73-7.936-7.73-5.406 0-8.58 4.054-8.58 8.245 0 1.633.63 3.384 1.414 4.336a.568.568 0 0 1 .132.545c-.081.338-.219.896-.334 1.366l-.194.789c-.082.347-.275.421-.635.254-2.373-1.105-3.857-4.574-3.857-7.361 0-5.993 4.355-11.498 12.554-11.498 6.592 0 11.714 4.697 11.714 10.974 0 6.548-4.13 11.818-9.86 11.818-1.925 0-3.735-1-4.355-2.182 0 0-.952 3.628-1.183 4.517-.43 1.65-1.587 3.719-2.362 4.98a19.16 19.16 0 0 0 8.392.647 18.89 18.89 0 0 0 7.857-3.044Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#K)" mask="url(#J)">
          <path fill="#A30A00" d="M27 27h47.999v47.998H27z" />
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
            d="M55.623 60.755C60.677 57.341 64 51.558 64 45c0-10.493-8.507-19-19-19-4.704 0-9.008 1.71-12.326 4.54a19.1 19.1 0 0 0-3.43 3.837A18.912 18.912 0 0 0 26 45a19.304 19.304 0 0 0 .06 1.518c.584 7.388 5.397 13.588 12.016 16.18-.166-1.502-.316-3.814.066-5.455.345-1.483 2.228-9.445 2.228-9.445s-.569-1.138-.569-2.82c0-2.643 1.532-4.615 3.438-4.615 1.621 0 2.404 1.217 2.404 2.676 0 1.04-.422 2.41-.867 3.852-.253.817-.512 1.657-.706 2.475-.448 1.89.948 3.433 2.813 3.433 3.377 0 5.973-3.56 5.973-8.7 0-4.55-3.269-7.73-7.936-7.73-5.406 0-8.58 4.054-8.58 8.245 0 1.633.63 3.384 1.414 4.336a.568.568 0 0 1 .132.545c-.081.338-.219.896-.334 1.366l-.194.789c-.082.347-.275.421-.635.254-2.373-1.105-3.857-4.574-3.857-7.361 0-5.993 4.355-11.498 12.554-11.498 6.592 0 11.714 4.697 11.714 10.974 0 6.548-4.13 11.818-9.86 11.818-1.925 0-3.735-1-4.355-2.182 0 0-.952 3.628-1.183 4.517-.43 1.65-1.587 3.719-2.362 4.98a19.16 19.16 0 0 0 8.392.647 18.89 18.89 0 0 0 7.857-3.044Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#N)" mask="url(#M)">
          <path fill="#A30A00" d="M26 26h47.999v47.998H26z" />
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
            d="M54.623 59.755C59.677 56.341 63 50.558 63 44c0-10.493-8.507-19-19-19-4.704 0-9.008 1.71-12.326 4.54a19.1 19.1 0 0 0-3.43 3.837A18.912 18.912 0 0 0 25 44a19.304 19.304 0 0 0 .06 1.518c.584 7.388 5.397 13.588 12.016 16.18-.166-1.502-.316-3.814.066-5.455.345-1.483 2.228-9.445 2.228-9.445s-.569-1.138-.569-2.82c0-2.643 1.532-4.615 3.438-4.615 1.621 0 2.404 1.217 2.404 2.676 0 1.04-.422 2.41-.867 3.852-.253.817-.512 1.657-.706 2.475-.448 1.89.948 3.433 2.813 3.433 3.377 0 5.973-3.56 5.973-8.7 0-4.55-3.269-7.73-7.936-7.73-5.406 0-8.58 4.054-8.58 8.245 0 1.633.63 3.384 1.414 4.336a.568.568 0 0 1 .132.545c-.081.338-.219.896-.334 1.366l-.194.789c-.082.347-.275.421-.635.254-2.373-1.105-3.857-4.574-3.857-7.361 0-5.993 4.355-11.498 12.554-11.498 6.592 0 11.714 4.697 11.714 10.974 0 6.548-4.13 11.818-9.86 11.818-1.925 0-3.735-1-4.355-2.182 0 0-.952 3.628-1.183 4.517-.43 1.65-1.587 3.719-2.362 4.98a19.16 19.16 0 0 0 8.392.647 18.89 18.89 0 0 0 7.857-3.044Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#Q)" mask="url(#P)">
          <path fill="#A30A00" d="M25 25h47.999v47.998H25z" />
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
            d="M54.123 59.255C59.177 55.841 62.5 50.058 62.5 43.5c0-10.493-8.507-19-19-19-4.704 0-9.008 1.71-12.326 4.54a19.1 19.1 0 0 0-3.43 3.837A18.912 18.912 0 0 0 24.5 43.5a19.304 19.304 0 0 0 .06 1.518c.584 7.388 5.397 13.588 12.016 16.18-.166-1.502-.316-3.814.066-5.455.345-1.483 2.228-9.445 2.228-9.445s-.569-1.138-.569-2.82c0-2.643 1.532-4.615 3.438-4.615 1.621 0 2.404 1.217 2.404 2.676 0 1.04-.422 2.41-.867 3.852-.253.817-.512 1.657-.706 2.475-.448 1.89.948 3.433 2.813 3.433 3.377 0 5.973-3.56 5.973-8.7 0-4.55-3.269-7.73-7.936-7.73-5.406 0-8.58 4.054-8.58 8.245 0 1.633.63 3.384 1.414 4.336a.568.568 0 0 1 .132.545c-.081.338-.219.896-.334 1.366l-.194.789c-.082.347-.275.421-.635.254-2.373-1.105-3.857-4.574-3.857-7.361 0-5.993 4.355-11.498 12.554-11.498 6.592 0 11.714 4.697 11.714 10.974 0 6.548-4.13 11.818-9.86 11.818-1.925 0-3.735-1-4.355-2.182 0 0-.952 3.628-1.183 4.517-.43 1.65-1.587 3.719-2.362 4.98a19.16 19.16 0 0 0 8.392.647 18.89 18.89 0 0 0 7.857-3.044Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#T)" mask="url(#S)">
          <path fill="#A30A00" d="M24.5 24.5h47.999v47.998H24.5z" />
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
            d="M53.623 58.755C58.677 55.341 62 49.558 62 43c0-10.493-8.507-19-19-19-4.704 0-9.008 1.71-12.326 4.54a19.1 19.1 0 0 0-3.43 3.837A18.912 18.912 0 0 0 24 43a19.304 19.304 0 0 0 .06 1.518c.584 7.388 5.397 13.588 12.016 16.18-.166-1.502-.316-3.814.066-5.455.345-1.483 2.228-9.445 2.228-9.445s-.569-1.138-.569-2.82c0-2.643 1.532-4.615 3.438-4.615 1.621 0 2.404 1.217 2.404 2.676 0 1.04-.422 2.41-.867 3.852-.253.817-.512 1.657-.706 2.475-.448 1.89.948 3.433 2.813 3.433 3.377 0 5.973-3.56 5.973-8.7 0-4.55-3.269-7.73-7.936-7.73-5.406 0-8.58 4.054-8.58 8.245 0 1.633.63 3.384 1.414 4.336a.568.568 0 0 1 .132.545c-.081.338-.219.896-.334 1.366l-.194.789c-.082.347-.275.421-.635.254-2.373-1.105-3.857-4.574-3.857-7.361 0-5.993 4.355-11.498 12.554-11.498 6.592 0 11.714 4.697 11.714 10.974 0 6.548-4.13 11.818-9.86 11.818-1.925 0-3.735-1-4.355-2.182 0 0-.952 3.628-1.183 4.517-.43 1.65-1.587 3.719-2.362 4.98a19.16 19.16 0 0 0 8.392.647 18.89 18.89 0 0 0 7.857-3.044Z"
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
        Pinterest
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
            result="effect1_foregroundBlur_1_25725"
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
            result="effect1_dropShadow_1_25725"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25725"
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
            result="effect1_foregroundBlur_1_25725"
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
            result="effect1_dropShadow_1_25725"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25725"
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
            result="effect1_foregroundBlur_1_25725"
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
            result="effect1_dropShadow_1_25725"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25725"
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
            result="effect1_foregroundBlur_1_25725"
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
            result="effect1_dropShadow_1_25725"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25725"
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
            result="effect1_foregroundBlur_1_25725"
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
            result="effect1_dropShadow_1_25725"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25725"
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
            result="effect1_foregroundBlur_1_25725"
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
            result="effect1_dropShadow_1_25725"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25725"
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
            result="effect1_foregroundBlur_1_25725"
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
            result="effect1_dropShadow_1_25725"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25725"
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
            result="effect1_foregroundBlur_1_25725"
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
            result="effect1_dropShadow_1_25725"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25725"
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
            result="effect1_foregroundBlur_1_25725"
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
            result="effect1_dropShadow_1_25725"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25725"
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
            result="effect1_foregroundBlur_1_25725"
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
            result="effect1_dropShadow_1_25725"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25725"
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
            result="effect1_foregroundBlur_1_25725"
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
            result="effect1_dropShadow_1_25725"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25725"
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
            result="effect1_foregroundBlur_1_25725"
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
            result="effect1_dropShadow_1_25725"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25725"
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
            result="effect1_foregroundBlur_1_25725"
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
            result="effect1_dropShadow_1_25725"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25725"
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
            result="effect1_foregroundBlur_1_25725"
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
            result="effect1_dropShadow_1_25725"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25725"
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
            result="effect1_foregroundBlur_1_25725"
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
            result="effect1_dropShadow_1_25725"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25725"
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
          <feColorMatrix values="0 0 0 0 0.983333 0 0 0 0 0.381042 0 0 0 0 0.473702 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1_25725" />
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
            in2="effect1_innerShadow_1_25725"
            result="effect2_innerShadow_1_25725"
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
          <stop stopColor="#FF1539" />
          <stop offset="1" stopColor="#D50020" />
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
          <stop offset="1" stopColor="#FFCFD6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
