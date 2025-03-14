"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";

interface MessagesListProps {
	selectedId: string | null;
	onSelect: (id: string) => void;
}

const messages = [
	{
		id: "1",
		sender: {
			name: "Sarah Chen",
			avatar: "/avatars/sarah.jpg",
			initials: "SC",
		},
		subject: "Application Status Inquiry",
		preview: "Hi, I wanted to follow up on my application...",
		timestamp: new Date(2024, 2, 15, 14, 30),
		unread: true,
		flagged: false,
	},
	{
		id: "2",
		sender: {
			name: "Tech Solutions Inc.",
			avatar: "/avatars/tech.jpg",
			initials: "TS",
		},
		subject: "New Job Posting Review",
		preview: "Please review our latest job posting for...",
		timestamp: new Date(2024, 2, 15, 12, 45),
		unread: true,
		flagged: true,
	},
	{
		id: "3",
		sender: {
			name: "Michael Brown",
			avatar: "/avatars/michael.jpg",
			initials: "MB",
		},
		subject: "Account Verification",
		preview: "I'm having trouble verifying my student...",
		timestamp: new Date(2024, 2, 15, 10, 15),
		unread: false,
		flagged: false,
	},
];

export function MessagesList({ selectedId, onSelect }: MessagesListProps) {
	return (
		<Card className="h-full">
			<div className="divide-y">
				{messages.map((message) => (
					<div
						key={message.id}
						className={cn(
							"flex cursor-pointer items-start gap-4 p-4 transition-colors hover:bg-muted/50",
							selectedId === message.id && "bg-muted",
							message.unread && "bg-primary/5"
						)}
						onClick={() => onSelect(message.id)}
					>
						<Avatar>
							<AvatarImage src={message.sender.avatar} />
							<AvatarFallback>
								{message.sender.initials}
							</AvatarFallback>
						</Avatar>
						<div className="flex-1 space-y-1">
							<div className="flex items-center justify-between gap-2">
								<p className="font-medium">
									{message.sender.name}
								</p>
								<span className="text-xs text-muted-foreground">
									{formatDistanceToNow(message.timestamp, {
										addSuffix: true,
									})}
								</span>
							</div>
							<p className="font-medium">{message.subject}</p>
							<p className="text-sm text-muted-foreground line-clamp-1">
								{message.preview}
							</p>
							<div className="flex items-center gap-2">
								{message.unread && (
									<Badge
										variant="secondary"
										className="bg-primary/10 text-primary"
									>
										New
									</Badge>
								)}
								{message.flagged && (
									<Badge
										variant="secondary"
										className="bg-destructive/10 text-destructive"
									>
										Flagged
									</Badge>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</Card>
	);
}
