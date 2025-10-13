import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000", // optional dark background
        color: "#f1f1f1",
      }}
    >
      <div
        style={{
          border: "4px solid rgba(255, 255, 255, 0.2)",
          borderTop: "4px solid #00ffff",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          animation: "spin 1s linear infinite",
        }}
      ></div>
      <p
        style={{
          marginTop: "16px",
          fontSize: "14px",
          fontWeight: "800",
          letterSpacing: "0.5px",
        }}
      >
        Loading...
      </p>
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
