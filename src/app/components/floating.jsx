import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import { TbBatteryCharging2 } from "react-icons/tb";
import DigitalClock from "./DigitalClock";
import dynamic from 'next/dynamic';




const Example = () => {
  return (
    <section className="">
      <FloatingPhone />
    </section>
  );
};

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-green-500 "
    >
      
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-blue-900 p-1 pl-[3px] pt-[3px]"
      >
       
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-3 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-red-400">
      
      
      
      

      <div className=" grid place-items-center">

      <div className=" mb-5 text-[30px] ">

            <DigitalClock/>
        
      </div>

      

        <div className="  text-[35px]">
            <TbBatteryCharging2 />
        </div>
        <div> Charging </div>

      </div>

      <p className="absolute bottom-2 left-20 right-20 z-10 rounded-lg border-[1px] bg-red-700 text-sm font-medium text-green-500 backdrop-blur">
        
      </p>

      {/* <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-500" /> */}
      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-green-500" />
    </div>
  );
};

export default Example;