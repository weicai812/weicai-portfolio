import React from "react";

const Loader = ({ progress }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center",     // Center vertically
        height: "100vh",          // Full viewport height
        textAlign: "center",
        color: "#f1f1f1",
      }}
    >
      <p
        style={{
          fontSize: 14,
          fontWeight: 800,
        }}
      >
        {progress.toFixed(2)}% Loading...
      </p>
    </div>
  );
};

export default Loader;
