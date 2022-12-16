import React from 'react';

interface CheckRadioProps {
  check: string;
}
const CheckRadio = ({ check }: CheckRadioProps) => {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_290_4189)">
        <path
          d="M12.9999 21.6662C17.7862 21.6662 21.6663 17.7861 21.6663 12.9998C21.6663 8.21343 17.7862 4.33334 12.9999 4.33334C8.21358 4.33334 4.3335 8.21343 4.3335 12.9998C4.3335 17.7861 8.21358 21.6662 12.9999 21.6662Z"
          fill={check}
        />
        <path
          d="M18.6075 9.65703L17.7663 8.81586L11.0711 15.511L8.23424 12.6741L7.39307 13.5153L11.062 17.1842L11.0711 17.175L11.0803 17.1842L18.6075 9.65703Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_290_4189">
          <rect width="17.3333" height="17.3333" fill="white" transform="translate(4.3335 4.33334)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckRadio;
