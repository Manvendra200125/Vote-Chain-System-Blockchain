
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import VoteCard from "@/components/VoteCard";
import BlockchainVisualizer from "@/components/BlockchainVisualizer";
import SmartContractInfo from "@/components/SmartContractInfo";
import { ArrowRight, CheckCircle, ShieldCheck, Vote } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data
const activeElections = [
  {
    id: "1",
    title: "Community Board Election",
    description: "Vote for the next community board representative",
    expiresAt: "2025-05-01T23:59:59Z",
    totalVotes: 156,
    status: "active" as const,
  },
  {
    id: "2", 
    title: "Budget Allocation Proposal",
    description: "How should we allocate the community budget for 2025?",
    expiresAt: "2025-04-30T23:59:59Z",
    totalVotes: 89,
    status: "active" as const,
  },
];

const recentBlocks = [
  { id: 1, hash: "0x8fe56bfd2e9f0d9d4c32518b9fef0d304c1a821778add5bd7bbbc82bad818bce", status: "confirmed" as const, timestamp: "2025-04-18T10:15:00Z" },
  { id: 2, hash: "0xdb567f5b66fabc8ec159f46518d75f39a2bacde6c3d53f33ff4a0e2b7325eab2", status: "confirmed" as const, timestamp: "2025-04-18T10:10:00Z" },
  { id: 3, hash: "0x9a2b5fb5421c75bd1d5d09781830f8a489bce2472349fd8b1c5efa77c23d28d6", status: "confirmed" as const, timestamp: "2025-04-18T10:05:00Z" },
  { id: 4, hash: "0xb5bc0d69c25a6f6ed698df87f0c55c5c5b2ee437aaddf942452c567e8b4c3a21", status: "confirmed" as const, timestamp: "2025-04-18T10:00:00Z" },
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleVoteClick = (id: string) => {
    navigate(`/vote/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-vote-gradient text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Secure Voting on the Blockchain</h1>
              <p className="text-lg opacity-90">
                Vote with confidence using our transparent, secure, and tamper-proof blockchain voting system.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-white text-vote-purple hover:bg-gray-100"
                  onClick={() => navigate("/elections")}
                >
                  View Elections
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-vote-blue-light rounded-full filter blur-3xl opacity-20"></div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-vote-purple rounded-full filter blur-3xl opacity-20"></div>
                <div className="relative z-10">
                  <div className="flex flex-col items-center justify-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 float-card">
                    <Vote className="h-16 w-16 mb-4" />
                    <span className="text-xl font-semibold">Blockchain Voting</span>
                    <span className="text-sm opacity-80">Transparent & Secure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why VoteChain?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-vote-blue/10 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-vote-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Tamper-Proof</h3>
              <p className="text-gray-600">
                Built on blockchain technology, every vote is cryptographically secured and immutable.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-vote-purple/10 rounded-full flex items-center justify-center mb-4">
                <Vote className="h-6 w-6 text-vote-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Voting</h3>
              <p className="text-gray-600">
                Every transaction is public and verifiable, ensuring complete transparency in the voting process.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blockchain/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-blockchain" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
              <p className="text-gray-600">
                Results are calculated in real-time as votes are cast and verified on the blockchain.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Active Elections */}
      <div className="py-8 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Active Elections</h2>
            <Button 
              variant="outline"
              onClick={() => navigate("/elections")}
            >
              View All 
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeElections.map((election) => (
              <VoteCard 
                key={election.id}
                {...election}
                onClick={() => handleVoteClick(election.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Blockchain Status */}
      <div className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Recent Blockchain Activity</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <BlockchainVisualizer blocks={recentBlocks} />
            </div>
            <div>
              <SmartContractInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
