
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VoteCardProps {
  id: string;
  title: string;
  description: string;
  expiresAt: string;
  totalVotes: number;
  status: "active" | "ended" | "upcoming";
  className?: string;
  onClick?: () => void;
}

const VoteCard: React.FC<VoteCardProps> = ({ 
  id, 
  title, 
  description, 
  expiresAt, 
  totalVotes, 
  status,
  className,
  onClick
}) => {
  const statusIcons = {
    active: <Clock className="h-4 w-4 text-green-500" />,
    ended: <CheckCircle className="h-4 w-4 text-gray-500" />,
    upcoming: <Clock className="h-4 w-4 text-blue-500" />,
  };

  const statusText = {
    active: "Voting Open",
    ended: "Voting Closed",
    upcoming: "Upcoming",
  };

  const isActive = status === "active";

  return (
    <Card className={cn("hover:shadow-md transition-all", className, isActive && "border-vote-blue-light border-2")}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <div className="flex items-center gap-1 text-sm px-2 py-1 rounded-full bg-gray-100">
            {statusIcons[status]}
            <span>{statusText[status]}</span>
          </div>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>Expires: {new Date(expiresAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="h-4 w-4" />
            <span>{totalVotes} votes cast</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onClick}
          className={cn(
            "w-full", 
            isActive 
              ? "bg-vote-blue hover:bg-vote-blue-dark" 
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          )}
          disabled={!isActive}
        >
          {isActive ? "Cast Your Vote" : "View Results"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VoteCard;
