import React from "react";
 import Orb from "./Orb ";


const Header = () => {
  return (
    <div>
      <div className="relative overflow-hidden min-h-[500px] max-h-[500px] w-full  bg-blue-950">
       <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  />
</div>

        {/* النص في المنتصف بدون أنيميشن */}
        <div className="absolute z-10 text-xl font-extrabold text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:text-5xl">
           <h2>Welcome to Tech Pioneer </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;

