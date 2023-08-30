import React from "react";
import { Row } from "react-bootstrap";
import '../../App.css'
const Leetcode = () => {
  // const imageStyle = {
  //   width: "100%", // Adjust the width as needed
  // };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="yellow">LeetCode</strong> Stat
      </h1>
      
      <img className="leetcode" src="https://leetcard.jacoblin.cool/Rajveer810214?theme=dark&font=Syne%20Mono&ext=heatmap" alt="LeetCode Stats"  />
    </Row>
  );
}

export default Leetcode;
