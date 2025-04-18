
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import VotingInterface from "@/components/VotingInterface";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data
interface ElectionData {
  id: string;
  title: string;
  description: string;
  expiresAt: string;
  totalVotes: number;
  status: "active" | "ended" | "upcoming";
  options: {
    id: string;
    text: string;
    description: string;
  }[];
}

const elections: Record<string, ElectionData> = {
  "1": {
    id: "1",
    title: "Community Board Election",
    description: "Vote for the next community board representative",
    expiresAt: "2025-05-01T23:59:59Z",
    totalVotes: 156,
    status: "active",
    options: [
      {
        id: "option-1",
        text: "John Doe",
        description: "Community activist with 5 years of experience"
      },
      {
        id: "option-2",
        text: "Jane Smith",
        description: "Current board member seeking re-election"
      },
      {
        id: "option-3",
        text: "Alex Johnson",
        description: "Local business owner and volunteer"
      }
    ]
  },
  "2": {
    id: "2",
    title: "Budget Allocation Proposal",
    description: "How should we allocate the community budget for 2025?",
    expiresAt: "2025-04-30T23:59:59Z",
    totalVotes: 89,
    status: "active",
    options: [
      {
        id: "option-1",
        text: "Infrastructure Focus",
        description: "60% infrastructure, 20% education, 20% social programs"
      },
      {
        id: "option-2",
        text: "Education Priority",
        description: "50% education, 30% infrastructure, 20% social programs"
      },
      {
        id: "option-3",
        text: "Balanced Approach",
        description: "40% infrastructure, 30% education, 30% social programs"
      }
    ]
  }
};

const VotePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [election, setElection] = useState<typeof elections[string] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate API call
    const fetchElection = async () => {
      setLoading(true);
      try {
        // In a real app, this would be an API call
        setTimeout(() => {
          if (id && elections[id]) {
            setElection(elections[id]);
          } else {
            toast({
              title: "Not Found",
              description: "The requested election could not be found",
              variant: "destructive"
            });
            navigate("/");
          }
          setLoading(false);
        }, 800);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load election data",
          variant: "destructive"
        });
        setLoading(false);
        navigate("/");
      }
    };

    fetchElection();
  }, [id, navigate, toast]);

  const handleVoteSubmit = async (voteId: string, optionId: string) => {
    // Simulate blockchain transaction
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        // In a real app, this would be a blockchain transaction
        console.log(`Submitting vote for election ${voteId}, option ${optionId}`);
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto py-8 px-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-8 w-8 text-vote-blue animate-spin mb-4" />
            <p className="text-gray-500">Loading election data...</p>
          </div>
        ) : election ? (
          <VotingInterface
            id={election.id}
            title={election.title}
            description={election.description}
            options={election.options}
            onVoteSubmit={handleVoteSubmit}
            onBack={() => navigate("/")}
          />
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500">Election not found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VotePage;
