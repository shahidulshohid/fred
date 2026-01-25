"use client";

import React from "react";

interface AuthSideImageProps {
  src?: string;
  alt?: string;
}

const AuthSide = ({
  src = "/authImg/authLeftImg.svg",
  alt = "Auth Image",
}: AuthSideImageProps) => {
  return (
    <div className="hidden md:block md:col-span-1">
      <div className="h-screen">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AuthSide;
