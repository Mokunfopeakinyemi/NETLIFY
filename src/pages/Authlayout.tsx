import React from 'react';

interface AuthlayoutProps {
  children: React.ReactNode;
  description: React.ReactNode;
  bottomlink: React.ReactNode;
  authWidth?: string;
}

const Authlayout: React.FC<AuthlayoutProps> = ({
  children,
  description,
  bottomlink,
  authWidth,
}) => {
  return (
    <main
      className="flex h-screen w-full items-center justify-center bg-[#FAFAFA]"
    >
      <div
        className="flex items-center justify-center flex-col gap-[17px] text-center"
        style={{ width: authWidth }}
      >
        <div className="font-bold text-center text-[1.79rem] leading-[2.326875rem] text-body">
          {description}
        </div>
        <div className="w-full flex flex-col gap-[0.8rem] items-center justify-center">
          {children}
        </div>
        <div
          className="font-medium text-[1.048rem] hover:opacity-80 text-body"
          style={{ lineHeight: '1.788rem' }}
        >
          {bottomlink}
        </div>
      </div>
    </main>
  );
};

export default Authlayout;
