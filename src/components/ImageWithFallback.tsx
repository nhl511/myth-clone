import Image, { ImageProps } from "next/image";
import React, { useEffect, useState } from "react";

interface ImageWithFallbackProps extends ImageProps {
  src: any;
  fallbackSrc: string;
}

const ImageWithFallback = ({
  src,
  fallbackSrc,
  ...rest
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    if (!src) {
      setImgSrc(fallbackSrc);
    }
  }, [src]);

  return <Image {...rest} src={imgSrc} />;
};

export default ImageWithFallback;
