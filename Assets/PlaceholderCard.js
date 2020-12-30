import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={'100%'}
      height={180}
      viewBox="0 0 750 360"
    >
      <G data-name="Group 1" transform="translate(-400 -1026)">
        <Rect
          data-name="Rectangle 1"
          width={'100%'}
          height={360}
          rx={20}
          transform="translate(400 1026)"
          fill="#ebebeb"
        />
        <Path
          data-name="Path 1"
          d="M439.1 1079.246h128.941"
          fill="none"
          stroke="#ccc"
          strokeLinecap="round"
          strokeWidth={10}
        />
        <Path
          data-name="Path 2"
          d="M439.1 1325.246h270.79"
          fill="none"
          stroke="#ccc"
          strokeLinecap="round"
          strokeWidth={20}
        />
        <G data-name="Path 3" fill="none">
          <Path d="M1097.5 1093c-8.334-5.591-12.705-10.677-14.5-14.933-4.8-11.408 8.917-16.867 14.5-10.129 5.583-6.738 19.3-1.279 14.5 10.129-1.795 4.256-6.166 9.342-14.5 14.933z" />
          <Path
            d="M1097.5 1088.126c6.977-5.057 9.737-9.06 10.811-11.611.633-1.504 1.15-3.654.018-5.359-.87-1.31-2.577-2.156-4.349-2.156-.808 0-2.325.194-3.4 1.491l-3.08 3.714-3.08-3.714c-1.075-1.297-2.592-1.491-3.4-1.491-1.772 0-3.479.847-4.349 2.157-1.132 1.705-.615 3.854.018 5.357 1.074 2.553 3.834 6.555 10.811 11.612m0 4.874c-8.334-5.59-12.705-10.677-14.498-14.933-3.366-7.995 2.366-13.067 8.018-13.067 2.412 0 4.81.924 6.48 2.938 1.67-2.014 4.068-2.938 6.48-2.938 5.653 0 11.384 5.07 8.018 13.067-1.793 4.256-6.164 9.342-14.498 14.933z"
            fill="#ccc"
          />
        </G>
      </G>
    </Svg>
  )
}

export default SvgComponent