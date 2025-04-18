
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import VoteOption from "./VoteOption";
import { ArrowLeft, Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VotingOption {
  id: string;
  text: string;
  description?: string;
}

interface VotingInterfaceProps {
  id: string;
  title: string;
  description: string;
  options: VotingOption[];
  onVoteSubmit: (voteId: string, optionId: string) => Promise<boolean>;
  onBack: () => void;
}

const VotingInterface: React.FC<VotingInterfaceProps> = ({
  id,
  title,
  description,
  options,
  onVoteSubmit,
  onBack
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isVoteSubmitted, setIsVoteSubmitted] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!selectedOption) {
      toast({
        title: "Error",
        description: "Please select an option to vote",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const success = await onVoteSubmit(id, selectedOption);
      if (success) {
        setIsVoteSubmitted(true);
        toast({
          title: "Vote submitted!",
          description: "Your vote has been recorded on the blockchain",
          variant: "default"
        });
      }
    } catch (error) {
      toast({
        title: "Error submitting vote",
        description: "There was an error recording your vote. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto border-vote-blue">
      <CardHeader>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="mr-2"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isVoteSubmitted ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold">Vote Submitted!</h3>
            <p className="text-center text-gray-500 max-w-md">
              Your vote has been successfully recorded on the blockchain. Thank you for participating!
            </p>
          </div>
        ) : (
          <VoteOption
            options={options}
            selectedOption={selectedOption}
            onChange={setSelectedOption}
          />
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {!isVoteSubmitted && (
          <Button
            onClick={handleSubmit}
            disabled={!selectedOption || isSubmitting}
            className="w-full bg-vote-blue hover:bg-vote-blue-dark"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting Vote...
              </>
            ) : (
              "Submit Vote"
            )}
          </Button>
        )}
        {isVoteSubmitted && (
          <Button
            onClick={onBack}
            className="w-full"
          >
            Return to Elections
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default VotingInterface;
