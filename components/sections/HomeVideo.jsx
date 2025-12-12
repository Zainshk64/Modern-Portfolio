import React from "react";

const HomeVideo = () => {
  return (
    <div className="relative lg:px-24">
      <div className="bg-black/20 lg:h-screen inset-0 overflow-hidden">
        <video
          className="w-full h-full object-contain"
          src="/hamail-homevideo.mp4"
          autoPlay
          muted
          controls
          loop
          playsInline
        />
        {/* subtle parallax effect */}
        {/* <div className="bg-black/30 inset-0 absolute " ></div> */}
      </div>
    </div>
  );
};

export default HomeVideo;
