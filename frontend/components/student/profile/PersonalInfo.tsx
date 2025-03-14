"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe, Calendar } from "lucide-react";

export function PersonalInfo({ data }: any) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Personal Information</CardTitle>
				<CardDescription>
					Your contact and basic information
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="flex items-center gap-2">
					<Mail className="h-4 w-4 text-muted-foreground" />
					<span>{data?.user?.email ?? "NA"}</span>
				</div>
				<div className="flex items-center gap-2">
					<Phone className="h-4 w-4 text-muted-foreground" />
					<span>{data?.user?.phone ?? "NA"}</span>
				</div>
				<div className="flex items-center gap-2">
					<MapPin className="h-4 w-4 text-muted-foreground" />
					<span>{data?.user?.location ?? "NA"}</span>
				</div>
				{/* <div className="flex items-center gap-2">
					<Globe className="h-4 w-4 text-muted-foreground" />
					<span>{data.?.portfolio ?? "NA"}</span>
				</div> */}
				{/* <div className="flex items-center gap-2">
					<Calendar className="h-4 w-4 text-muted-foreground" />
					<span>{data?.createdAt?.slice(0, 10) ?? "NA"}</span>
				</div> */}
			</CardContent>
		</Card>
	);
}
