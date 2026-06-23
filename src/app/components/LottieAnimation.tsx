import Lottie from "lottie-react";
import { CSSProperties } from "react";

interface LottieAnimationProps {
  animationData: object;
  className?: string;
  style?: CSSProperties;
  loop?: boolean;
  autoplay?: boolean;
}

export function LottieAnimation({
  animationData,
  className,
  style,
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
      style={style}
    />
  );
}
