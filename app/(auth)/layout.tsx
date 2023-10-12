import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen w-screen p-16">{children}</div>;
};

export default AuthLayout;
