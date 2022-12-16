import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo = ({ width = 85, height = 30 }: LogoProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 85 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M65.3726 29.598V22.6874H52.6687V29.598H65.3726Z" fill="white" />
      <path d="M6.93969 0H0V29.5974H6.93969V0Z" fill="white" />
      <path d="M19.9153 0H12.9756V23.314H19.9153V0Z" fill="white" />
      <path d="M32.8977 0H25.958V29.5974H32.8977V0Z" fill="white" />
      <path d="M13.2637 29.598V22.6874H0.559777V29.598H13.2637Z" fill="white" />
      <path d="M32.4043 29.598V22.6874H19.7004V29.598H32.4043Z" fill="white" />
      <path d="M45.9724 0H39.0327V23.314H45.9724V0Z" fill="white" />
      <path d="M58.949 0H52.0093V29.5974H58.949V0Z" fill="white" />
      <path d="M39.3208 29.598V22.6874H26.0557V29.598H39.3208Z" fill="white" />
      <path d="M58.459 29.598V22.6874H45.7551V29.598H58.459Z" fill="white" />
      <path d="M72.0246 0H65.085V23.314H72.0246V0Z" fill="white" />
      <path d="M85.0002 0H78.0605V29.5974H85.0002V0Z" fill="white" />
      <path d="M84.5151 29.5981V22.6875H71.8112V29.5981H84.5151Z" fill="white" />
    </svg>
  );
};

export default Logo;
