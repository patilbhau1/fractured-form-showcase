import React from 'react';

type Props = React.VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
  shadow: string; // pass a hex with alpha
};

export default function BoundlessVideo({ src, shadow, ...rest }: Props) {
  return (
    <div
      className="boundless relative rounded-lg overflow-hidden"
      style={{
        boxShadow: `0px 0px 150px 50px ${shadow}`,
      }}
    >
      <video
        src={src}
        playsInline
        controls
        className="relative z-10 w-full h-full object-cover rounded-lg"
        {...rest}
      />
    </div>
  );
}