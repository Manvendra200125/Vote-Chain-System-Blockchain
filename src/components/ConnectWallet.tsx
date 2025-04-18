
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Wallet, ChevronDown, LogOut, Copy, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ConnectWalletProps {
  className?: string;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({ className }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const { toast } = useToast();

  const connectWallet = () => {
    // In a real app, this would use Web3 providers like ethers.js
    // For demo purposes, we'll simulate a connection
    setTimeout(() => {
      const mockAddress = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F";
      setWalletAddress(mockAddress);
      setIsConnected(true);
      toast({
        title: "Wallet connected",
        description: "Your wallet has been successfully connected",
      });
    }, 1000);
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress("");
    toast({
      title: "Wallet disconnected",
      description: "Your wallet has been disconnected",
    });
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    toast({
      title: "Address copied",
      description: "Wallet address copied to clipboard",
    });
  };

  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  const viewOnExplorer = () => {
    // In a real app, this would open the wallet on a blockchain explorer
    window.open(`https://etherscan.io/address/${walletAddress}`, "_blank");
  };

  if (!isConnected) {
    return (
      <Button 
        className={`bg-vote-blue hover:bg-vote-blue-dark ${className}`}
        onClick={connectWallet}
      >
        <Wallet className="h-4 w-4 mr-2" />
        <span className="hidden md:inline">Connect Wallet</span>
        <span className="inline md:hidden">Connect</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline"
          className={`border-vote-blue text-vote-blue hover:bg-vote-blue/10 ${className}`}
        >
          <Wallet className="h-4 w-4 mr-2" />
          <span className="hidden md:inline">{formatAddress(walletAddress)}</span>
          <span className="inline md:hidden">Wallet</span>
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Wallet</DropdownMenuLabel>
        <DropdownMenuItem 
          className="flex items-center cursor-pointer" 
          onClick={copyAddress}
        >
          <Copy className="h-4 w-4 mr-2" />
          Copy Address
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="flex items-center cursor-pointer"
          onClick={viewOnExplorer}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          View on Explorer
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          className="flex items-center cursor-pointer text-red-500 focus:text-red-500"
          onClick={disconnectWallet}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ConnectWallet;
