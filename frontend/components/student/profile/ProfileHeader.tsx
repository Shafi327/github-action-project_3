"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit2, Download } from "lucide-react";
import { UserProfile } from "@/lib/api";

export function ProfileHeader({ data }: any) {
	
	return (
		<div className="container">
			<Card className="p-6">
				<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex flex-col sm:flex-row sm:items-center gap-4">
						<Avatar className="h-20 w-20">
							<AvatarImage src="/avatars/01.png" alt="Student" />
							<AvatarFallback>JD</AvatarFallback>
						</Avatar>
						<div className="space-y-1">
							<h1 className="text-2xl capitalize font-bold tracking-tight">
								{data?.user?.name ?? "NA"}{" "}
							</h1>
							<p className="text-muted-foreground">
								{data?.degreeType ?? "NA"}
							</p>
							<div className="flex items-center gap-2">
								<Progress
									value={80}
									className="h-2 w-[120px]"
								/>
								<span className="text-sm text-muted-foreground">
									80% Complete
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-2 sm:flex-row sm:items-center">
						<Button variant="outline" size="sm">
							<Edit2 className="mr-2 h-4 w-4" />
							Edit Profile
						</Button>
						<Button size="sm">
							<Download className="mr-2 h-4 w-4" />
							Download CV
						</Button>
					</div>
				</div>
			</Card>
		</div>
	);
}
