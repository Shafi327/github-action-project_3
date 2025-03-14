import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Tooltip } from "@/components/ui/tooltip";

// Define the type for our data structure
interface Application {
	status: string;
	student: {
		id: number;
		university: string;
		course: string;
		gpa: string;
		year: string;
		skills: string[];
		languages: string[];
	};
}

export const useApplicationColumns: ColumnDef<Application>[] = [
	// {
	// 	accessorKey: "student.id",
	// 	header: "ID",
	// 	cell: ({ row }) => {
	// 		console.log("row", row?.original);
	// 		return <div className="w-[80px]">{row?.original?.student?.id}</div>;
	// 	},
	// },
	{
		accessorKey: "student.university",
		header: "University",
		cell: ({ row }) => (
			<div className="max-w-[200px] truncate">
				{row?.original?.student?.university}
			</div>
		),
	},
	{
		accessorKey: "student.course",
		header: "Course",
		cell: ({ row }) => <div>{row?.original?.student?.course}</div>,
	},
	{
		accessorKey: "student.gpa",
		header: "GPA",
		cell: ({ row }) => <div>{row?.original?.student?.gpa}</div>,
	},
	{
		accessorKey: "student.year",
		header: "Year",
		cell: ({ row }) => <div>{row?.original?.student?.year}</div>,
	},
	{
		accessorKey: "student.skills",
		header: "Skills",
		cell: ({ row }) => {
			const skills = row?.original?.student?.skills;
			return (
				<div className="flex flex-wrap gap-1">
					{skills.map((skill, index) => (
						<Badge
							key={index}
							variant="secondary"
							className="text-xs"
						>
							{skill}
						</Badge>
					))}
				</div>
			);
		},
	},
	{
		accessorKey: "student.languages",
		header: "Languages",
		cell: ({ row }) => {
			const languages = row?.original?.student?.languages;
			return (
				<div className="flex flex-wrap gap-1">
					{languages.map((language, index) => (
						<Badge
							key={index}
							variant="outline"
							className="text-xs"
						>
							{language}
						</Badge>
					))}
				</div>
			);
		},
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => {
			const status = row.getValue("status") as string;
			return (
				<Badge variant={status === "pending" ? "secondary" : "default"}>
					{status.charAt(0).toUpperCase() + status.slice(1)}
				</Badge>
			);
		},
	},
];
