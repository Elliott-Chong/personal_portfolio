import React from "react";

const Timeline = () => {
  const timelineRef = React.useRef();

  return (
    <div id="timeline" className="w-1 h-screen relative bg-white">
      <div
        id="timeline-circle"
        ref={timelineRef}
        className="w-5 h-5 absolute bg-white"
      ></div>
    </div>
  );
};

export default Timeline;
