import React from "react";

export default function TriangleIcon({ className, active }) {
  if (active) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        height={24}
        width={24}
        preserveAspectRatio="xMidYMid meet"
        version="1.1"
        id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6"
        x="0px"
        y="0px"
        enableBackground="new 0 0 16 16"
        xmlSpace="preserve"
      >
        <path
          className={className}
          fillRule="evenodd"
          d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"
        />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        height={24}
        width={24}
        preserveAspectRatio="xMidYMid meet"
        version="1.1"
        id="ee51d023-7db6-4950-baf7-c34874b80976"
        x="0px"
        y="0px"
        enableBackground="new 0 0 16 16"
        xmlSpace="preserve"
      >
        <path
          className={className}
          fillRule="evenodd"
          d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"
        />
      </svg>
    );
  }
}
