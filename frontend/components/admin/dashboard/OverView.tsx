"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
// 	LineChart,
// 	Line,
// 	XAxis,
// 	YAxis,
// 	CartesianGrid,
// 	Tooltip,
// 	ResponsiveContainer,
// } from "recharts";

interface OverviewProps {
	className?: string;
}

const data = [
	{ name: "Jan", students: 100, applications: 240, jobs: 60 },
	{ name: "Feb", students: 120, applications: 300, jobs: 80 },
	{ name: "Mar", students: 150, applications: 380, jobs: 90 },
	{ name: "Apr", students: 180, applications: 420, jobs: 100 },
	{ name: "May", students: 220, applications: 500, jobs: 120 },
	{ name: "Jun", students: 250, applications: 580, jobs: 150 },
];

export function Overview({ className }: OverviewProps) {
	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle>Platform Overview</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[350px]">
					{/* <ResponsiveContainer width="100%" height="100%">
						<LineChart data={data}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Line
								type="monotone"
								dataKey="students"
								stroke="hsl(var(--primary))"
								strokeWidth={2}
								name="New Students"
							/>
							<Line
								type="monotone"
								dataKey="applications"
								stroke="hsl(var(--chart-2))"
								strokeWidth={2}
								name="Applications"
							/>
							<Line
								type="monotone"
								dataKey="jobs"
								stroke="hsl(var(--chart-3))"
								strokeWidth={2}
								name="New Jobs"
							/>
						</LineChart>
					</ResponsiveContainer> */}
				</div>
			</CardContent>
		</Card>
	);
}
