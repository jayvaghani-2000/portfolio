import React, { forwardRef } from "react";

type SanityImageHTMLElement = any;

interface SanityImageProps  {
  image: any;
  sizes?: string | undefined;
  maxWidth?: number | undefined;
  width?: number | undefined;
  height?: number | undefined;
  isAboveTheFold?: boolean | undefined;
  className?:string
}

const SanityImage = forwardRef<SanityImageHTMLElement, SanityImageProps>(
  (
    {
      image,
      sizes = undefined,
      maxWidth = undefined,
      width = undefined,
      height = undefined,
      isAboveTheFold = false,
      ...props
    },
    ref,
  ) => (
    <img
    //   style={{
    //     backgroundColor: image.asset.metadata.palette.dominant.background,
    //   }}
      alt={ `sanity-image-alt`}
      loading={isAboveTheFold ? 'eager' : 'lazy'}
      decoding={isAboveTheFold ? 'sync' : 'async'}
      src={image}
      ref={ref}
      {...props}
    />
  ),
);
SanityImage.displayName = 'SanityImage';

export default SanityImage;