"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Upload, Download, Plus } from "lucide-react";

interface CandidateActionsProps {
	type?: "notes" | "documents";
}

export function CandidateActions({ type = "notes" }: CandidateActionsProps) {
	if (type === "documents") {
		const documents = [
			{ name: "Resume.pdf", date: "2024-03-15" },
			{ name: "Cover Letter.pdf", date: "2024-03-15" },
			{ name: "Portfolio.pdf", date: "2024-03-14" },
		];

		return (
			<div className="space-y-4">
				<div className="flex justify-end">
					<Button>
						<Upload className="mr-2 h-4 w-4" />
						Upload Document
					</Button>
				</div>
				{documents.map((doc, index) => (
					<Card
						key={index}
						className="flex items-center justify-between p-4"
					>
						<div className="flex items-center gap-2">
							<FileText className="h-4 w-4 text-muted-foreground" />
							<div>
								<p className="font-medium">{doc.name}</p>
								<p className="text-sm text-muted-foreground">
									Uploaded: {doc.date}
								</p>
							</div>
						</div>
						<Button variant="outline" size="sm">
							<Download className="mr-2 h-4 w-4" />
							Download
						</Button>
					</Card>
				))}
			</div>
		);
	}

	return (
		<div className="space-y-4">
			<div className="flex justify-end">
				<Button>
					<Plus className="mr-2 h-4 w-4" />
					Add Note
				</Button>
			</div>
			<Card className="p-4">
				<div className="space-y-4">
					<Textarea
						placeholder="Add interview notes, feedback, or general comments about the candidate..."
						className="min-h-[100px]"
					/>
					<div className="flex justify-end">
						<Button>Save Note</Button>
					</div>
				</div>
			</Card>
		</div>
	);
}
