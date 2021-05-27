import React from 'react';

import { SkeletonPulse } from './styles';

interface ShimmerProps {
  width?: string;
  height?: string;
}

export const Shimmer: React.FC<ShimmerProps> = ({
  width = '100%',
  height = '50px',
  ...rest
}) => {
  return (
    <>
      <div
        style={{
          width: `${width}`,
          height: `${height}`,
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        {...rest}
      >
        <SkeletonPulse />
      </div>
      <br></br>
    </>
  );
};
