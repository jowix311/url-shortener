import { PictureBlock, PictureImage } from "./picture.component";
import { PictureBlockProps, PictureImageProps } from "./picture.types";

// PictureBlockImage composite component is for convenience
export const PictureBlockImage = ({
  pictureBlockProps,
  pictureImageProps,
}: PictureBlockProps & PictureImageProps) => {
  return (
    <PictureBlock pictureBlockProps={pictureBlockProps}>
      <PictureImage pictureImageProps={pictureImageProps} />
    </PictureBlock>
  );
};
