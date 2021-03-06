import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      viewBox="0 0 800 321"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <defs>
        <style>
          {
            "@font-face{font-family:&quot;AmaticSC-Bold&quot;;src:url(data:application/font-woff;charset=utf-8;base64,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) format(&quot;woff&quot;);font-weight:700;font-style:normal}"
          }
        </style>
      </defs>
      <style>
        {
          ".prefix__B{font-family:AmaticSC-Bold,Amatic SC}.prefix__C{font-weight:700}.prefix__D{stroke:#c1e9d1}.prefix__E{font-size:85.333px}.prefix__F{fill:#fdfcfc}"
        }
      </style>
      <text
        x={177.258}
        y={25.721}
        fontSize={49.446}
        fill="#efe6c8"
        strokeWidth={0.31}
        transform="matrix(1.40537 .12034 -.09663 1.12842 -239.042 36.343)"
        className="prefix__B prefix__C prefix__D"
      >
        {"art-th\xE9rapie"}
      </text>
      <text
        x={177.258}
        y={25.721}
        fontSize={19.696}
        fill="#c8eeef"
        strokeWidth={0.23}
        transform="matrix(1.76852 -.23504 .21404 1.61053 -226.889 266.993)"
        className="prefix__B prefix__C prefix__D"
      >
        {"les"}
      </text>
      <text
        x={177.258}
        y={25.721}
        fontSize={29.544}
        fill="#c8eeef"
        strokeWidth={0.22}
        transform="matrix(1.76852 -.23504 .24664 1.85582 -304.687 270.809)"
        className="prefix__B prefix__C prefix__D"
      >
        {"avec"}
      </text>
      <text
        x={177.258}
        y={25.721}
        fontSize={29.544}
        fill="#c8efc9"
        strokeWidth={0.2}
        transform="matrix(1.9918 -.26471 .24957 1.87785 -227.703 259.952)"
        className="prefix__B prefix__C prefix__D"
      >
        {"institutions"}
      </text>
      <text
        x={177.258}
        y={25.721}
        fontSize={36.416}
        fill="#efc8c8"
        strokeWidth={0.23}
        transform="matrix(1.7441 -.2541 .2541 1.7441 -43.907 75.212)"
        className="prefix__B prefix__C prefix__D"
      >
        {"spectacles"}
      </text>
      <text
        x={177.258}
        y={25.721}
        fontSize={41.476}
        fill="#ebc8ef"
        strokeWidth={0.27}
        transform="matrix(1.42268 .23316 -.25323 1.54516 -209.806 81.527)"
        className="prefix__B prefix__C prefix__D"
      >
        {"sophrologie"}
      </text>
      <text
        x={286.39}
        y={159.604}
        fontSize={58.667}
        fill="#8bcfaa"
        stroke="#00ecff"
        strokeWidth={0.32}
        transform="matrix(1.09022 -.13133 .1196 .99282 -42.447 45.293)"
        className="prefix__B prefix__C"
      >
        {"\xE9quipe"}
      </text>
      <text
        x={195.954}
        y={143.937}
        transform="rotate(8.552 -105.66 2807.035)"
        className="prefix__B prefix__C prefix__E prefix__F"
      >
        {"tout"}
      </text>
      <text
        x={195.954}
        y={121.702}
        fontSize={56}
        transform="rotate(4.928 -1836.672 1221.174)"
        className="prefix__B prefix__C prefix__F"
      >
        {"\xE9crits"}
      </text>
      <text
        x={407.363}
        y={118.253}
        transform="rotate(-6.494 812.199 -2130.142)"
        className="prefix__B prefix__C prefix__E prefix__F"
      >
        {"haut"}
      </text>
      <text
        x={515.819}
        y={312.42}
        fill="#f9f9f9"
        className="prefix__B prefix__C prefix__E"
      >
        {"r\xEAver"}
      </text>
    </svg>
  );
}

export default SvgComponent;
