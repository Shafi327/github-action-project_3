"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
// 	PieChart,
// 	Pie,
// 	Cell,
// 	ResponsiveContainer,
// 	Legend,
// 	Tooltip,
// } from "recharts";

const data = [
	{ name: "LinkedIn", value: 45 },
	{ name: "Company Website", value: 25 },
	{ name: "Job Boards", value: 20 },
	{ name: "Referrals", value: 10 },
];

const COLORS = [
	"hsl(var(--chart-1))",
	"hsl(var(--chart-2))",
	"hsl(var(--chart-3))",
	"hsl(var(--chart-4))",
];

export function SourceDistribution() {
	return (
		<Card className="md:col-span-2 col-span-4">
			<CardHeader>
				<CardTitle>Application Sources</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[300px]">
					{/* <ResponsiveContainer width="100%" height="100%">
						<PieChart>
							<Pie
								data={data}
								cx="50%"
								cy="50%"
								innerRadius={60}
								outerRadius={80}
								paddingAngle={5}
								dataKey="value"
							>
								{data.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={COLORS[index % COLORS.length]}
									/>
								))}
							</Pie>
							<Tooltip />
							<Legend />
						</PieChart>
					</ResponsiveContainer> */}
				</div>
			</CardContent>
		</Card>
	);
}
