import { forwardRef, type ElementRef, type HTMLAttributes } from "react";
type ImageHTMLElement = ElementRef<"img">;

interface ImageProps extends HTMLAttributes<ImageHTMLElement> {
  metadata: any;
  alt: string;
  isAboveTheFold?: "lazy" | "eager";
}

const Image = forwardRef<ImageHTMLElement, ImageProps>(
  ({ metadata, alt, isAboveTheFold = false, ...props }, ref) => (
    <img
      src={metadata.src}
      width={metadata.width}
      height={metadata.height}
      alt={"image-alt"}
      loading={isAboveTheFold ? "eager" : "lazy"}
      decoding="async"
      ref={ref}
      {...props}
    />
  )
);
Image.displayName = "Image";

export default Image;
