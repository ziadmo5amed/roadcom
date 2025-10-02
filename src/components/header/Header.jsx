import React from "react";
 import Orb from "./Orb ";


const Header = () => {
  return (
<div className="relative overflow-hidden 
  min-h-[300px] md:min-h-[500px] 
  max-h-[500px] md:max-h-[710px] 
  w-full bg-blue-950"
>
  <div className="w-full h-[500px] md:h-[750px] relative">
    <Orb
      hoverIntensity={0.5}
      rotateOnHover={true}
      hue={0}
      forceHoverState={false}
    />
  </div>

  {/* النص في المنتصف بدون أنيميشن */}
  <div className="absolute z-10 w-full text-2xl font-extrabold text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:text-6xl">
    <h2> 
    مرحبا بكم فى   <span className="text-pink-400">Tech Pioneer</span>  
    </h2>
  </div>
</div>
  );
};


export default Header;

