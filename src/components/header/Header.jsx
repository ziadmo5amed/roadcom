import React from "react";
import Hyperspeed from "./Hyperspeed";

const Header = () => {
  return (
    <div>
      <div className="relative overflow-hidden min-h-[500px] max-h-[500px] w-full  bg-blue-950">
        {/* الخلفية الانيميشن */}
        <Hyperspeed
          count={200}
          gravity={0.7}
          friction={0.8}
          wallBounce={0.95}
          followCursor={true}
        />

        {/* النص في المنتصف بدون أنيميشن */}
        <div className="absolute z-10 text-xl font-extrabold text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:text-5xl">
           <h2>Welcome to Tech Pioneer </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;

