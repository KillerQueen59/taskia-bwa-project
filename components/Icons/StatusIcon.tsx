import React from "react";

const StatusIcon = ({ width = 24, height = 24, color = "#DBD8E9" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="vuesax/linear/flag">
        <g id="flag">
          <path
            id="Vector"
            d="M4.29166 2.16669V18.8334"
            stroke={color}
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M4.29166 3.83331H13.625C15.875 3.83331 16.375 5.08331 14.7917 6.66665L13.7917 7.66665C13.125 8.33331 13.125 9.41665 13.7917 9.99998L14.7917 11C16.375 12.5833 15.7917 13.8333 13.625 13.8333H4.29166"
            stroke={color}
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export default StatusIcon;
