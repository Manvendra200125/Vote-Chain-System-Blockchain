
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import VoteCard from "@/components/VoteCard";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import ResultsChart from "@/components/ResultsChart";

// Mock data
const elections = [
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
  {
    id: "3",
    title: "Park Renovation Options",
    description: "Select the design for our community park renovation",
    expiresAt: "2025-04-20T23:59:59Z",
    totalVotes: 203,
    status: "ended" as const,
  },
  {
    id: "4",
    title: "Annual Festival Theme",
    description: "Choose the theme for our annual community festival",
    expiresAt: "2025-03-15T23:59:59Z",
    totalVotes: 312,
    status: "ended" as const,
  },
  {
    id: "5",
    title: "New Community Center Proposal",
    description: "Vote on the proposal to build a new community center",
    expiresAt: "2025-06-01T23:59:59Z",
    totalVotes: 0,
    status: "upcoming" as const,
  }
];

interface VoteResult {
  optionId: string;
  optionText: string;
  votes: number;
  percentage: number;
}

const completedElectionResults: Record<string, VoteResult[]> = {
  "3": [
    { optionId: "1", optionText: "Modern Urban Design", votes: 85, percentage: 41.9 },
    { optionId: "2", optionText: "Nature-Focused Design", votes: 98, percentage: 48.3 },
    { optionId: "3", optionText: "Traditional Design", votes: 20, percentage: 9.8 }
  ],
  "4": [
    { optionId: "1", optionText: "Science & Technology", votes: 87, percentage: 27.9 },
    { optionId: "2", optionText: "Arts & Culture", votes: 142, percentage: 45.5 },
    { optionId: "3", optionText: "International Cuisines", votes: 83, percentage: 26.6 }
  ]
};

const ElectionsPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("active");

  const activeElections = elections.filter(election => election.status === "active");
  const endedElections = elections.filter(election => election.status === "ended");
  const upcomingElections = elections.filter(election => election.status === "upcoming");

  const handleVoteClick = (id: string, status: "active" | "ended" | "upcoming") => {
    if (status === "active") {
      navigate(`/vote/${id}`);
    } else if (status === "ended") {
      setActiveTab("ended");
      // In a real app, you might scroll to the specific result
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto py-8 px-6">
        <h1 className="text-3xl font-bold mb-8">Elections</h1>
        
        <Tabs defaultValue="active" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="active">Active ({activeElections.length})</TabsTrigger>
            <TabsTrigger value="ended">Completed ({endedElections.length})</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming ({upcomingElections.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active">
            {activeElections.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeElections.map((election) => (
                  <VoteCard 
                    key={election.id}
                    {...election}
                    onClick={() => handleVoteClick(election.id, election.status)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border">
                <p className="text-gray-500">No active elections at the moment.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="ended">
            {endedElections.length > 0 ? (
              <div className="space-y-8">
                {endedElections.map((election) => (
                  <div key={election.id} className="space-y-4">
                    <VoteCard 
                      {...election}
                      onClick={() => handleVoteClick(election.id, election.status)}
                    />
                    <ResultsChart 
                      title={`Results: ${election.title}`}
                      results={completedElectionResults[election.id as keyof typeof completedElectionResults] || []}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border">
                <p className="text-gray-500">No completed elections yet.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="upcoming">
            {upcomingElections.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingElections.map((election) => (
                  <VoteCard 
                    key={election.id}
                    {...election}
                    onClick={() => handleVoteClick(election.id, election.status)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border">
                <p className="text-gray-500">No upcoming elections scheduled.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ElectionsPage;
