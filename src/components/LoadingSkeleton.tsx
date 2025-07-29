const SkeletonLine = () => {
  return (
    <div className="w-4/5 h-[18px] rounded-md bg-gradient-to-r from-[#ececec] via-[#d6d6d6] to-[#ececec] bg-[length:200%_100%] animate-skeleton my-2 mx-auto block" />
  );
};

const LoadingSkeleton = () => {
  return (
    <>
      <SkeletonLine />
      <SkeletonLine />
      <SkeletonLine />
      <SkeletonLine />
    </>
  );
};

export default LoadingSkeleton;
