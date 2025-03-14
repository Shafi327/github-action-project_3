"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Flag, Archive, Trash2, Send } from "lucide-react";
import { format } from "date-fns";

interface MessageViewProps {
	messageId: string | null;
	onBack: () => void;
}

export function MessageView({ messageId, onBack }: MessageViewProps) {
	if (!messageId) {
		return (
			<Card className="flex h-full items-center justify-center p-8">
				<p className="text-muted-foreground">
					Select a message to view
				</p>
			</Card>
		);
	}

	return (
		<Card className="flex h-full flex-col">
			<div className="flex items-center justify-between border-b p-4">
				<Button
					variant="ghost"
					size="sm"
					onClick={onBack}
					className="lg:hidden"
				>
					<ArrowLeft className="mr-2 h-4 w-4" />
					Back
				</Button>
				<div className="flex items-center gap-2">
					<Button variant="ghost" size="icon">
						<Flag className="h-4 w-4" />
					</Button>
					<Button variant="ghost" size="icon">
						<Archive className="h-4 w-4" />
					</Button>
					<Button variant="ghost" size="icon">
						<Trash2 className="h-4 w-4" />
					</Button>
				</div>
			</div>
			<div className="flex-1 overflow-auto p-4">
				<div className="space-y-4">
					<div className="flex items-start justify-between">
						<div className="flex items-start gap-4">
							<Avatar>
								<AvatarImage src="/avatars/sarah.jpg" />
								<AvatarFallback>SC</AvatarFallback>
							</Avatar>
							<div>
								<p className="font-medium">Sarah Chen</p>
								<p className="text-sm text-muted-foreground">
									sarah.chen@example.com
								</p>
							</div>
						</div>
						<p className="text-sm text-muted-foreground">
							{format(new Date(2024, 2, 15, 14, 30), "PPp")}
						</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold">
							Application Status Inquiry
						</h3>
						<div className="mt-4 space-y-4">
							<p>Hi Admin Team,</p>
							<p>
								I wanted to follow up on my application for the
								Senior Frontend Developer position at Tech
								Solutions Inc. It's been two weeks since my
								interview, and I haven't heard back yet. Could
								you please check the status?
							</p>
							<p>
								Best regards,
								<br />
								Sarah
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="border-t p-4">
				<div className="space-y-4">
					<Textarea
						placeholder="Type your reply..."
						className="min-h-[100px]"
					/>
					<div className="flex justify-end">
						<Button>
							<Send className="mr-2 h-4 w-4" />
							Send Reply
						</Button>
					</div>
				</div>
			</div>
		</Card>
	);
}
