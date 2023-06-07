import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  bgColor?: string | undefined;
}

const SocialButton: React.FC<Props> = ({ children, bgColor = "black" }) => {
  let bgHoverColorClass;

  switch (bgColor) {
    case "javascript":
      bgHoverColorClass = "hover:bg-javascript";
      break;
    case "react":
      bgHoverColorClass = "hover:bg-react";
      break;
    case "nodejs":
      bgHoverColorClass = "hover:bg-nodejs";
      break;
    case "linkedin":
      bgHoverColorClass = "hover:bg-linkedin";
      break;
    default:
      bgHoverColorClass = "hover:bg-black";
      break;
  }

  return (
    <button
      className={`group h-9 w-9 bg-white ${bgHoverColorClass} rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center`}
    >
      <div className="fill-black group-hover:fill-white transition-colors duration-200 ease-in-out">
        {children}
      </div>
    </button>
  );
};

export default SocialButton;
