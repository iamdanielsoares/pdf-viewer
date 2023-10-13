import { ButtonHTMLAttributes, ReactElement } from "react";

import {
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineZoomIn,
  AiOutlineZoomOut,
  AiOutlinePrinter,
  AiOutlineExpandAlt,
  AiOutlineCloudDownload,
  AiOutlineSearch,
} from "react-icons/ai";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: string;
};

export const Button = ({ icon, ...rest }: Props) => {
  const icons: Record<string, ReactElement> = {
    pageDown: <AiOutlineDown />,
    pageUp: <AiOutlineUp />,
    zoomIn: <AiOutlineZoomIn />,
    zoomOut: <AiOutlineZoomOut />,
    print: <AiOutlinePrinter />,
    expand: <AiOutlineExpandAlt />,
    download: <AiOutlineCloudDownload />,
    search: <AiOutlineSearch />,
  };

  return (
    <button
      className="px-2 py-1 bg-transparent hover:bg-gray-300 rounded transition duration-300 text-blue-600 cursor-pointer disabled:text-gray-400"
      {...rest}
    >
      {icons[icon]}
    </button>
  );
};
