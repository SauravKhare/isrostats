import { ReactElement } from "react";
import { Link } from "react-router-dom";

function Card({
  bg,
  pad,
  colspan,
  rowspan,
  link,
  children,
}: {
  bg: string;
  pad: string;
  colspan: string;
  rowspan: string;
  link?: string;
  children: ReactElement;
}) {
  return link ? (
    <Link className={`${colspan} ${rowspan}`} to={link}>
      <div
        className={`flex bg-${bg} ${pad} justify-center items-center rounded-[20px] font-inter text-xl gap-3.5 cursor-pointer hover:scale-105 shadow-2xl duration-100 h-full`}
      >
        {children}
      </div>
    </Link>
  ) : (
    <div
      className={`flex bg-${bg} ${pad} ${colspan} ${rowspan} justify-center items-center rounded-[20px] font-inter text-xl gap-3.5 cursor-pointer hover:scale-105 shadow-2xl duration-100 h-full`}
    >
      {children}
    </div>
  );
}

export default Card;
