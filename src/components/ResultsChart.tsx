
import React from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface VoteResult {
  optionId: string;
  optionText: string;
  votes: number;
  percentage: number;
}

interface ResultsChartProps {
  results: VoteResult[];
  title: string;
}

const ResultsChart: React.FC<ResultsChartProps> = ({ results, title }) => {
  const colors = ["#4361EE", "#7209B7", "#F72585", "#4CC9F0", "#3A0CA3"];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={results}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="optionText" 
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => value.length > 15 ? `${value.substring(0, 15)}...` : value}
              />
              <YAxis />
              <Tooltip
                formatter={(value: number, name: string, props: any) => {
                  return [`${value} votes (${props.payload.percentage}%)`, "Votes"];
                }}
                labelFormatter={(label) => `Option: ${label}`}
              />
              <Bar dataKey="votes" radius={[4, 4, 0, 0]}>
                {results.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsChart;
