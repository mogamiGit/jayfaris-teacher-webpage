import React from 'react';
import classNames from 'classnames';
import * as motion from "motion/react-client";

const BackgroundBubble: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 255 241"
    focusable="false"
    fill='white'
    {...props}
  >
    <path d="M245.274 162.019C249.025 151.979 252.416 141.715 253.717 131.078C255.387 117.423 251.879 103.661 246.941 91.0207C242.271 79.0571 236.556 66.0518 228.923 55.6637C224.727 49.9578 219.496 45.0976 214.218 40.3709C186.316 15.3932 154.355 -0.487239 116.223 0.60765C103.903 0.954809 91.6251 2.79745 79.7059 5.91298C48.5684 14.0757 30.0878 39.9703 14.9926 66.4346C4.61161 84.6293 -0.583373 105.593 1.07587 126.547C2.88377 149.37 13.2114 169.897 25.1742 189.036C30.8142 198.062 38.9333 205.228 47.136 212.011C56.8325 220.022 66.9812 227.784 78.6431 232.502C86.9242 235.849 95.7706 237.576 104.62 238.786C115.671 240.3 126.865 241.03 137.989 240.22C184.308 236.864 228.956 205.69 245.274 162.019Z" />
  </svg>
);

const iconVariant = {
  hidden: { scale: 0.5, opacity: 0 },
  show: (d: number) => ({
    scale: 0.9,
    opacity: 1,
    transition: {
      scale: { type: "spring", delay: d },
      opacity: { ease: "linear", delay: d },
    },
  }),
};

interface Props {
  label: string;
  iconSrc: string;
  href: string;
  size?: number;
  delay?: number;
  className?: string;
}

const SocialIcon: React.FC<Props> = ({
  label,
  iconSrc,
  href,
  delay = 0,
  className,
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={classNames(
        "relative inline-flex flex-col items-center justify-center",
        "w-[8rem] sm:w-[10rem]",
        "h-[8rem] sm:h-[10rem]",
        "focus:outline-none",
        className
      )}
      variants={iconVariant}
      custom={delay}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.1 }}
    >
      <img src={iconSrc} alt="" aria-hidden="true" className="w-12 sm:w-16" />
      <span className="mt-2 text-sm font-semibold">{label}</span>
      <BackgroundBubble className="absolute inset-0 -z-10 w-full h-full" />
    </motion.a>
  );
};

export default SocialIcon;