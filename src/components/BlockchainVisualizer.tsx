
import React from "react";
import BlockchainNode from "./BlockchainNode";
import { ArrowRight } from "lucide-react";

interface Block {
  id: number;
  hash: string;
  status: "pending" | "confirmed" | "rejected";
  timestamp: string;
}

interface BlockchainVisualizerProps {
  blocks: Block[];
  className?: string;
}

const BlockchainVisualizer: React.FC<BlockchainVisualizerProps> = ({ 
  blocks,
  className 
}) => {
  return (
    <div className={`p-4 rounded-xl bg-gray-50 ${className}`}>
      <h3 className="text-lg font-bold mb-4 text-vote-gradient">Blockchain Status</h3>
      <div className="flex flex-wrap md:flex-nowrap gap-3 items-center overflow-x-auto pb-4">
        {blocks.map((block, index) => (
          <React.Fragment key={block.id}>
            <BlockchainNode 
              hash={block.hash} 
              status={block.status} 
              className="min-w-36 shrink-0" 
            />
            {index < blocks.length - 1 && (
              <ArrowRight className="text-vote-blue shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BlockchainVisualizer;
