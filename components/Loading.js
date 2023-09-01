/* eslint-disable @next/next/no-img-element */
import React from 'react';
import MtButton from '../images/MtButton.png';

export default function Loading() {
  return (
    <div className="text-center mt-5">
      <img
        src={MtButton}
        alt="Spinning Logo"
        className="spinning-image"
      />
    </div>
  );
}
