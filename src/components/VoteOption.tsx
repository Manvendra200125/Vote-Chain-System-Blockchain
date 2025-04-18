
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface Option {
  id: string;
  text: string;
  description?: string;
}

interface VoteOptionProps {
  options: Option[];
  onChange: (optionId: string) => void;
  selectedOption: string | null;
  className?: string;
}

const VoteOption: React.FC<VoteOptionProps> = ({ 
  options, 
  onChange, 
  selectedOption,
  className 
}) => {
  return (
    <RadioGroup 
      className={cn("space-y-3", className)}
      value={selectedOption || undefined}
      onValueChange={onChange}
    >
      {options.map((option) => (
        <div 
          key={option.id}
          className={cn(
            "flex items-start space-x-3 rounded-lg border p-4 transition-all",
            selectedOption === option.id 
              ? "border-vote-purple bg-vote-purple/5" 
              : "hover:border-gray-300"
          )}
        >
          <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
          <div className="space-y-1">
            <Label 
              htmlFor={option.id} 
              className="text-base font-medium cursor-pointer"
            >
              {option.text}
            </Label>
            {option.description && (
              <p className="text-sm text-gray-500">{option.description}</p>
            )}
          </div>
        </div>
      ))}
    </RadioGroup>
  );
};

export default VoteOption;
