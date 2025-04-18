
import React from "react";
import Navbar from "@/components/Navbar";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ChevronRight, HelpCircle, ShieldAlert, Vote } from "lucide-react";

const HelpPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto py-8 px-6">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="h-8 w-8 text-vote-purple" />
          <h1 className="text-3xl font-bold">Help Center</h1>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Blockchain Voting Guide</CardTitle>
            <CardDescription>
              Learn how to use our secure blockchain voting system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does blockchain voting work?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Blockchain voting uses distributed ledger technology to create a secure, transparent, and immutable record of each vote. Here's how it works:
                  </p>
                  <ol className="space-y-2 list-decimal pl-5">
                    <li>You connect your wallet to authenticate your identity</li>
                    <li>Cast your vote in an active election</li>
                    <li>Your vote is encrypted and added to a "block"</li>
                    <li>The block is verified by multiple nodes in the network</li>
                    <li>Once verified, the block is added to the chain permanently</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How do I connect my wallet?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    To connect your wallet, click on the "Connect Wallet" button in the top right corner of the page. You can connect using MetaMask, WalletConnect, or other supported wallet providers. Once connected, your wallet address will be used to verify your identity and eligibility to vote.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Is my vote anonymous?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes, your vote is anonymous. While your wallet address is used to verify your eligibility to vote, the actual vote content is encrypted. This means that observers can see that a vote was cast, but cannot determine which option you selected. Our system uses zero-knowledge proofs to maintain privacy while ensuring vote integrity.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Can I change my vote once submitted?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    No, once your vote is submitted and confirmed on the blockchain, it cannot be changed. This immutability is one of the key security features of blockchain voting. Make sure to carefully review your selection before submitting your vote.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How can I verify my vote was counted?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    You can verify your vote was properly recorded by:
                  </p>
                  <ol className="space-y-2 list-decimal pl-5">
                    <li>Checking the transaction hash provided after voting</li>
                    <li>Using a blockchain explorer to verify the transaction was included in a block</li>
                    <li>Reviewing the encrypted vote data (which preserves your anonymity)</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Vote className="h-5 w-5 text-vote-blue" />
                Getting Started
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-vote-blue" />
                  <span>Create your blockchain wallet</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-vote-blue" />
                  <span>Connect your wallet to VoteChain</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-vote-blue" />
                  <span>Browse active elections</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-vote-blue" />
                  <span>Cast your first secure vote</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-vote-purple" />
                Security Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-vote-purple" />
                  <span>Never share your wallet's private key</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-vote-purple" />
                  <span>Verify you're on the official VoteChain domain</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-vote-purple" />
                  <span>Disconnect your wallet after voting</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-vote-purple" />
                  <span>Report suspicious activity immediately</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Need Additional Help?</CardTitle>
            <CardDescription>
              Contact our support team for personalized assistance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              If you couldn't find an answer to your question, reach out to our support team through one of these channels:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="font-medium mb-2">Email Support</h3>
                <p className="text-sm text-gray-600">support@votechain.example</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="font-medium mb-2">Community Forum</h3>
                <p className="text-sm text-gray-600">forum.votechain.example</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HelpPage;
