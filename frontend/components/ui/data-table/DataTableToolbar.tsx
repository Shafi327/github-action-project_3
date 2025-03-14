"use client";

import { Button } from "@/components/ui/button";
import { DataTableToolbarProps } from "./types";

export function DataTableToolbar<TData>({
	table,
	quickActions,
}: DataTableToolbarProps<TData>) {
	const selectedRows = table.getFilteredSelectedRowModel().rows;
	const hasSelectedRows = selectedRows.length > 0;

	return (
		<div className="flex items-center justify-between py-4">
			<div className="flex flex-1 items-center space-x-2">
				{/* Add filter components here if needed */}
			</div>
			{quickActions && hasSelectedRows && (
				<div className="flex items-center space-x-2">
					{quickActions.map((action, index) => (
						<Button
							key={index}
							variant="outline"
							size="sm"
							onClick={() =>
								action.onClick(
									selectedRows.map((row: any) => row.original)
								)
							}
							disabled={action.disabled}
							className="h-8"
						>
							{action.icon && (
								<span className="mr-2">{action.icon}</span>
							)}
							{action.label}
						</Button>
					))}
				</div>
			)}
		</div>
	);
}
