import React, { useState } from "react";



//create your first component
export const Home = () => {
	const [selectedColor, setSelectedColor] = useState ("");
	return (
	<div className="container text-center">
      <div className="traffic-light1"></div>
		<div className="traffic-light2">
			<div 
            onClick={() => setSelectedColor("red")}
			className={"light red" + ((selectedColor === "red") ? " glow" : "")
			}></div>
			<div 
			onClick={() => setSelectedColor("yellow")}
			className={"light yellow" + ((selectedColor === "yellow") ? " glow" : "")
			}></div>
			<div 
			onClick={() => setSelectedColor("green")}
			className={"light green" + ((selectedColor === "green") ? " glow" : "")
		    }></div>
		
	  </div>
	</div>
	);
};


