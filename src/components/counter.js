import React from "react";
import CountUp from "react-countup";
import { FaCarAlt,FaUser} from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaAward } from "react-icons/fa";
export default function Counter({ number, title}) {
  return (
    <div className="flex flex-col bg-slate-800 text-center shadow-lg py-4 space-y-3">
      <CountUp duration={10} className="font-bold text-4xl" end={number} />
      <span className="text-lg">{title}</span>
    </div>
  );
}