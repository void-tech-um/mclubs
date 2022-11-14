import React from "react";

interface childrenTypes {
  children: React.ReactNode;
  outlined?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

function Button({ children, outlined, className, onClick }: childrenTypes) {
  return (
    <>
      {outlined ? (
        <button
          className={`btn ${className} btn-outline max-w-xs w-full text-primary hover:bg-primary font-inter text-base`}
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        <button
          className={`btn bg-primary ${className} text-white max-w-xs w-full hover:bg-white hover:text-primary font-inter text-base`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
