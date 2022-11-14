import React from "react";

interface childrenTypes {
  children: React.ReactNode;
  outlined?: boolean;
  size?: "sm" | "lg" | "xs";
}

function Button({ children, outlined, size }: childrenTypes) {
  return (
    <>
      {outlined ? (
        <button
          className={`btn btn-${size} btn-outline max-w-xs w-full text-primary hover:bg-primary font-inter text-base`}
        >
          {children}
        </button>
      ) : (
        <button
          className={`btn bg-primary btn-${size} text-white max-w-xs w-full hover:bg-white hover:text-primary font-inter text-base`}
        >
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
