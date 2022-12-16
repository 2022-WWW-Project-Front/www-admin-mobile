import React from 'react';

interface CloseBtnProps {
  color?: string;
}

const CloseBtn = ({ color = 'var(--black-400)' }: CloseBtnProps) => {
  return (
    <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_905_3149)">
        <path
          d="M38.5 37.5L15.5 14.5"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <path
          d="M15.5 37.5L38.5 14.5"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
      </g>
      <defs>
        <clipPath id="clip0_905_3149">
          <rect width="24" height="24" fill="white" transform="translate(15 14)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CloseBtn;
