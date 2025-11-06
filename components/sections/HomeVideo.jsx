import React from "react";

const HomeVideo = () => {
  return (
    <div className="relative" >

    <div className="bg-black/20 h-screen inset-0 overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src="/homevideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* subtle parallax effect */}
      <div className="bg-black/30 inset-0 absolute " ></div>
    </div>
        </div>
  );
};

export default HomeVideo;
