"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
// 	BarChart,
// 	Bar,
// 	XAxis,
// 	YAxis,
// 	CartesianGrid,
// 	Tooltip,
// 	ResponsiveContainer,
// } from "recharts";

const data = [
	{ stage: "Applications", count: 1000 },
	{ stage: "Screened", count: 450 },
	{ stage: "Interviewed", count: 200 },
	{ stage: "Offered", count: 50 },
	{ stage: "Hired", count: 30 },
];

export function HiringFunnel() {
	return (
		<Card className="md:col-span-2 col-span-4">
			<CardHeader>
				<CardTitle>Hiring Funnel</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[300px]">
					{/* <ResponsiveContainer width="100%" height="100%">
						<BarChart data={data}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="stage" />
							<YAxis />
							<Tooltip />
							<Bar dataKey="count" fill="hsl(var(--primary))" />
						</BarChart>
					</ResponsiveContainer> */}
				</div>
			</CardContent>
		</Card>
	);
}
