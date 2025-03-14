"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { MessagesList } from "./MessagesList";
import { MessageView } from "./MessageView";

export function MessagesContent() {
	const [selectedMessageId, setSelectedMessageId] = useState<string | null>(
		null
	);

	return (
		<div className="grid h-full gap-4 md:grid-cols-12">
			<div
				className={cn(
					"col-span-12 md:col-span-5 lg:col-span-4",
					selectedMessageId && "hidden md:block"
				)}
			>
				<MessagesList
					selectedId={selectedMessageId}
					onSelect={setSelectedMessageId}
				/>
			</div>
			<div
				className={cn(
					"col-span-12 md:col-span-7 lg:col-span-8",
					!selectedMessageId && "hidden md:block"
				)}
			>
				<MessageView
					messageId={selectedMessageId}
					onBack={() => setSelectedMessageId(null)}
				/>
			</div>
		</div>
	);
}
