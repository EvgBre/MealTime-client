/* eslint-disable react/jsx-boolean-value */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import MtButton from '../images/MtButton.png';

export default function Loading() {
  return (
    <div className="text-center mt-5">
      <Image
        src={MtButton}
        alt="Spinning Logo"
        className="spinning-image"
        priority={true}
      />
    </div>
  );
}
