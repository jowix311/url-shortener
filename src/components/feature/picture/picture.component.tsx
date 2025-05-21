import { CommonAtomicProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PictureImageProps, PictureBlockProps } from "./picture.types";

export const Picture = ({ children, className }: CommonAtomicProps) => {
  return <div className={cn("", className)}>{children}</div>;
};

export const PictureBlock = ({
  children,
  pictureBlockProps = {}, // Default to an empty object, since it's optional
}: CommonAtomicProps & PictureBlockProps) => {
  const { className = "" } = pictureBlockProps;

  return <div className={cn("relative", className)}>{children}</div>;
};
export const PictureImage = ({
  pictureImageProps,
}: CommonAtomicProps & PictureImageProps) => {
  const { imageSource, imageAlt, className = "" } = pictureImageProps;

  return (
    <Image
      src={imageSource}
      alt={imageAlt}
      className={cn("object-cover", className)}
      fill
    />
  );
};
