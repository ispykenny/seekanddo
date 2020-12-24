import React from 'react';
import Svg, { Circle } from "react-native-svg"

function SettingsIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="#205DBF"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Circle cx={12} cy={12} r={1} />
      <Circle cx={19} cy={12} r={1} />
      <Circle cx={5} cy={12} r={1} />
    </Svg>
  )
}

export default SettingsIcon;