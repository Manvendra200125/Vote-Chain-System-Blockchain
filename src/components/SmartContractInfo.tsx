
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileCode, Shield, Cpu } from "lucide-react";

interface SmartContractInfoProps {
  className?: string;
}

const SmartContractInfo: React.FC<SmartContractInfoProps> = ({ className }) => {
  // This would be fetched from the blockchain in a real app
  const contractDetails = {
    address: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    name: "VoteChain Election Contract",
    network: "Ethereum",
    deployer: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b",
    deployDate: "2025-03-15",
    lastActivity: "2025-04-17",
    totalVotes: 842,
    activeElections: 3
  };

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <FileCode className="h-5 w-5 mr-2 text-vote-purple" />
              Smart Contract
            </CardTitle>
            <CardDescription>
              Blockchain voting contract information
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="text-sm text-gray-500 mb-1">Contract Address</div>
              <div className="font-mono text-sm truncate">{contractDetails.address}</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="text-sm text-gray-500 mb-1">Network</div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-vote-blue mr-2"></div>
                {contractDetails.network}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Total Votes</div>
              <div className="text-xl font-semibold">{contractDetails.totalVotes}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Active Elections</div>
              <div className="text-xl font-semibold">{contractDetails.activeElections}</div>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-vote-blue" />
                <span className="text-sm font-medium">Security Status</span>
              </div>
              <Badge className="bg-vote-blue">Verified</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Cpu className="h-4 w-4 mr-2 text-vote-blue" />
                <span className="text-sm font-medium">Last Activity</span>
              </div>
              <span className="text-sm">{new Date(contractDetails.lastActivity).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SmartContractInfo;
