import NextImage, { type ImageProps } from 'next/image';

type CustomImageProps = {
  readonly src?: string;
  readonly alt?: string;
} & Omit<ImageProps, 'src'>;

const CustomImage = (props: CustomImageProps) => {
  const { src, alt, layout, ...rest } = props;
  return src ? (
    <NextImage src={src} alt={alt || ''} layout={layout} {...rest} />
  ) : null;
};

export default CustomImage;
