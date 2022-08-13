import React, { FC, ReactNode } from "react";

const AuthHoc = (
  WrappedComponent: FC<{
    children: ReactNode;
  }>
) => {
  const WrapComponent: FC<{
    children: ReactNode;
  }> = ({ children, ...props }) => {
    
    return <WrappedComponent {...props}>{children}</WrappedComponent>;
  };

  return WrapComponent;
};

export default AuthHoc;
