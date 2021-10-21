import React, { useRef, useLayoutEffect, useState } from "react";

const ComponentWithDimensions = props => {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width:0, height: 0 });

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.scrollWidth,
        height: targetRef.current.scrollHeight
      });
    }
  }, []);

  function calc(){
    const row = [];
    const col = [];
    for (let i = 0; i <= dimensions.width/95; i++) {
        row.push(<div className="hexagon"></div>);
    }
    for (let i = 0; i <= (dimensions.height/80); i++){
        col.push(<div className="hexagon-row">{row}</div>)
    }
    return col;
  }

  return (
    <div className="hex-container" ref={targetRef}>
            {calc()}
    </div>
  );
};

export default ComponentWithDimensions;