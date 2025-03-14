"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, FileEdit, Trash2 } from "lucide-react";
import Modal from "@/components/modal/Modal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// const applications = [
// 	{
// 		id: 1,
// 		program: "Computer Science BSc",
// 		university: "Tech University",
// 		status: "In Progress",
// 		submittedDate: "2024-03-15",
// 		deadline: "2024-04-30",
// 		requirements: ["Transcript", "CV", "Statement of Purpose"],
// 		completedRequirements: 2,
// 	},
// 	{
// 		id: 2,
// 		program: "Data Science MSc",
// 		university: "Digital Institute",
// 		status: "Accepted",
// 		submittedDate: "2024-03-10",
// 		deadline: "2024-04-15",
// 		requirements: ["Transcript", "CV", "Research Proposal", "References"],
// 		completedRequirements: 4,
// 	},
// 	{
// 		id: 3,
// 		program: "Software Engineering MSc",
// 		university: "Code Academy",
// 		status: "Rejected",
// 		submittedDate: "2024-03-05",
// 		deadline: "2024-04-01",
// 		requirements: ["Transcript", "CV", "Portfolio", "Interview"],
// 		completedRequirements: 4,
// 	},
// 	{
// 		id: 4,
// 		program: "Artificial Intelligence MSc",
// 		university: "Innovation University",
// 		status: "Draft",
// 		submittedDate: "-",
// 		deadline: "2024-05-15",
// 		requirements: ["Transcript", "CV", "Research Proposal"],
// 		completedRequirements: 1,
// 	},
// ];

const getStatusColor = (status: string) => {
	switch (status.toLowerCase()) {
		case "accepted":
			return "bg-green-500/10 text-green-500";
		case "rejected":
			return "bg-red-500/10 text-red-500";
		case "pending":
			return "bg-yellow-500/10 text-yellow-500";
		case "draft":
			return "bg-gray-500/10 text-gray-500";
		default:
			return "bg-gray-500/10 text-gray-500";
	}
};

export function ApplicationList({ applications }: any) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Applications</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Company</TableHead>
							<TableHead>Job</TableHead>
							<TableHead>Status</TableHead>
							{/* <TableHead>Requirements</TableHead> */}
							<TableHead>Submitted</TableHead>
							{/* <TableHead>Deadline</TableHead> */}
							{/* <TableHead className="text-right">
								Actions
							</TableHead> */}
						</TableRow>
					</TableHeader>
					<TableBody>
						{applications.map((application: any) => (
							<TableRow key={application?.id}>
								<TableCell className="font-medium ">
									<div className="flex items-center gap-2">
										<div className="">
											<Avatar className="h-8 w-8">
												<AvatarImage
													src={`${application?.job?.industry?.user?.avatar}`}
													alt="Student"
												/>
												<AvatarFallback>
													{
														application?.job
															?.industry
															?.companyName
													}
												</AvatarFallback>
											</Avatar>
										</div>
										<div className="flex flex-col">
											<p className="capitalize">
												{
													application?.job?.industry
														?.companyName
												}
											</p>
											<p className="text-gray-500 text-xs">
												{
													application?.job?.industry
														?.user?.email
												}
											</p>
										</div>
									</div>
								</TableCell>
								<TableCell className="font-medium capitalize">
									{application?.job?.title}
								</TableCell>
								<TableCell>
									<Badge
										className={getStatusColor(
											application?.status
										)}
									>
										{application?.status}
									</Badge>
								</TableCell>
								{/* <TableCell>
									<div className="flex items-center gap-2">
										<div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
											<div
												className="h-full bg-primary"
												style={{
													width: `${
														(application?.completedRequirements /
															application
																?.requirements
																?.length) *
														100
													}%`,
												}}
											/>
										</div>
										<span className="text-sm text-muted-foreground">
											{application?.completedRequirements}
											/{application?.requirements?.length}
										</span>
									</div>
								</TableCell> */}
								<TableCell>
									{application?.createdAt.slice(0, 10)}
								</TableCell>
								<TableCell>{application?.deadline}</TableCell>
								{/* <TableCell className="text-right">
									<div className="flex justify-end gap-2">
										<Button variant="ghost" size="icon">
											<Eye className="h-4 w-4" />
										</Button>
										<Button variant="ghost" size="icon">
											<FileEdit className="h-4 w-4" />
										</Button>
										<Modal>
											<Modal.Open opens="deleteApplication">
												<Button
													variant="ghost"
													size="icon"
													className="text-destructive"
												>
													<Trash2 className="h-4 w-4" />
												</Button>
											</Modal.Open>
											<Modal.Window name="deleteApplication">
												<div>Delete Modal</div>
											</Modal.Window>
										</Modal>
									</div>
								</TableCell> */}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
