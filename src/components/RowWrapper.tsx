/* eslint-disable react/jsx-key */
import React from "react";

const RowWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="md:container mx-auto sm:px-10 md:px-10 lg:px-20">
      {children}
    </div>
  );
};

export default RowWrapper;
