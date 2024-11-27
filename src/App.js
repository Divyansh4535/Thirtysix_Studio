import React from "react";
import Canvas from "./Canvas";
import data from "./data";
const App = () => {
  return (
    <>
      <div className="bg-black relative text-white min-h-screen w-full">
        {data[0].map((item, idx) => (
          <Canvas details={item} />
        ))}
      </div>
      <div className="bg-black relative text-white min-h-screen w-full">
        {data[1].map((item, idx) => (
          <Canvas details={item} />
        ))}
      </div>
      <div className="bg-black relative text-white min-h-screen w-full">
        {data[2].map((item, idx) => (
          <Canvas details={item} />
        ))}
      </div>
      <div className="bg-black relative text-white min-h-screen w-full">
        {data[3].map((item, idx) => (
          <Canvas details={item} />
        ))}
      </div>
      <div className="bg-black relative text-white min-h-screen w-full">
        {data[4].map((item, idx) => (
          <Canvas details={item} />
        ))}
      </div>
      {/* <h1 className="text-center text-white text-2xl"> End of the world</h1> */}
    </>
  );
};

export default App;
