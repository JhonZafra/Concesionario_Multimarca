import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-10 py-2 px-4">
      <h2>Layout Autenticación</h2>
      <div className="flex w-full">{children}</div>
    </div>
  );
};

export default AuthLayout;
