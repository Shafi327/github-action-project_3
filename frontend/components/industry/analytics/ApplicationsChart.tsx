"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
// 	CartesianGrid,
// 	Line,
// 	LineChart,
// 	ResponsiveContainer,
// 	Tooltip,
// 	XAxis,
// 	YAxis,
// } from "recharts";

const data = [
	{ name: "Jan", applications: 65 },
	{ name: "Feb", applications: 85 },
	{ name: "Mar", applications: 120 },
	{ name: "Apr", applications: 95 },
	{ name: "May", applications: 150 },
	{ name: "Jun", applications: 180 },
];

export function ApplicationsChart() {
	return (
		<Card className="col-span-4">
			<CardHeader>
				<CardTitle>Application Trends</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[300px]">
					{/* <ResponsiveContainer width="100%" height="100%">
						<LineChart data={data}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Line
								type="monotone"
								dataKey="applications"
								stroke="hsl(var(--primary))"
								strokeWidth={2}
							/>
						</LineChart>
					</ResponsiveContainer> */}
				</div>
			</CardContent>
		</Card>
	);
}
