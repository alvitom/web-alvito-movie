import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = ({ count = 1, height = 20 }) => {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <Skeleton key={index} height={height} />
      ))}
    </>
  );
};

export default SkeletonLoader;
