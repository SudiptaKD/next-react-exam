import React from 'react';
import NextImage from 'next/image';
import { ImageProps } from '@/types';

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <NextImage src={src} alt={alt} className={className} width={500} height={500} />
);

export default Image;