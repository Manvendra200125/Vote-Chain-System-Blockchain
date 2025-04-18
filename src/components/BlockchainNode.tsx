
import React from "react";
import { cn } from "@/lib/utils";

interface BlockchainNodeProps {
  status: "pending" | "confirmed" | "rejected";
  hash: string;
  className?: string;
}

const BlockchainNode: React.FC<BlockchainNodeProps> = ({ 
  status, 
  hash, 
  className 
}) => {
  const statusColors = {
    pending: "bg-yellow-500",
    confirmed: "bg-green-500",
    rejected: "bg-red-500",
  };

  return (
    <div 
      className={cn(
        "blockchain-node rounded-lg p-4 bg-white shadow-lg border transition-all", 
        statusColors[status],
        className
      )}
    >
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono bg-gray-100 rounded px-2 py-1">
            {hash.substring(0, 8)}...{hash.substring(hash.length - 8)}
          </span>
          <span className="text-xs capitalize bg-gray-100 bg-opacity-50 px-2 py-1 rounded-full">
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlockchainNode;
