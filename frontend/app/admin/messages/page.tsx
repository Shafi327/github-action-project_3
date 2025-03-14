"use client";

import { MessagesContent } from "@/components/admin/messages/MessagesContent";
import { MessagesHeader } from "@/components/admin/messages/MessagesHeader";

export default function MessagesPage() {
	return (
		<div className="flex h-[calc(100vh-8rem)] flex-col gap-4">
			<MessagesHeader />
			<MessagesContent />
		</div>
	);
}
