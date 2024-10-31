import React from "react";

const LockedLevel = ({ lockedLevel }: { lockedLevel: string }) => {
  return (
    <div className="text-[#fcff56] border border-[#fcff56] px-1 rounded-sm font-bold">
      <p className="text-xs">{lockedLevel}</p>
    </div>
  );
};

export default LockedLevel;
