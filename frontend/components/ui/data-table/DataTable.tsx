"use client";

import * as React from "react";
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
	getPaginationRowModel,
	getFilteredRowModel,
	RowSelectionState,
} from "@tanstack/react-table";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableProps } from "./types";
import { DataTableToolbar } from "./DataTableToolbar";
import { DataTablePagination } from "./DataTablePagination";

export function DataTable<TData>({
	columns: userColumns,
	data = [], // Provide default empty array
	quickActions,
	enableRowSelection = false,
	pagination = false,
	pageSize = false,
	onPageChange,
	onPageSizeChange,
	totalItems = 0, // Provide default value
	currentPage = 1, // Provide default value
	itemsPerPage = 10, // Provide default value
}: DataTableProps<TData>) {
	const [rowSelection, setRowSelection] = React.useState<RowSelectionState>(
		{}
	);

	// Ensure data is always an array
	const safeData = React.useMemo(() => {
		return Array.isArray(data) ? data : [];
	}, [data]);

	// Add selection column if enableRowSelection is true
	const columns = React.useMemo(() => {
		if (!enableRowSelection) return userColumns;

		const selectionColumn: ColumnDef<TData> = {
			id: "select",
			header: ({ table }) => (
				<Checkbox
					checked={table.getIsAllPageRowsSelected()}
					onCheckedChange={(value) =>
						table.toggleAllPageRowsSelected(!!value)
					}
					aria-label="Select all"
				/>
			),
			cell: ({ row }) => (
				<Checkbox
					checked={row.getIsSelected()}
					onCheckedChange={(value) => row.toggleSelected(!!value)}
					aria-label="Select row"
				/>
			),
			enableSorting: false,
			enableHiding: false,
		};

		return [selectionColumn, ...userColumns];
	}, [userColumns, enableRowSelection]);

	const table = useReactTable({
		data: safeData,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onRowSelectionChange: setRowSelection,
		state: {
			rowSelection,
		},
		// Add manual pagination mode since we're handling it on the server
		manualPagination: true,
		pageCount: Math.ceil(totalItems / itemsPerPage),
	});

	return (
		<div className="space-y-4">
			{quickActions && quickActions.length > 0 && (
				<DataTableToolbar table={table} quickActions={quickActions} />
			)}
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef
														.header,
													header.getContext()
											  )}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{safeData.length > 0 ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={
										row.getIsSelected() && "selected"
									}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			{pagination && safeData.length > 0 && (
				<DataTablePagination
					table={table}
					totalItems={totalItems}
					currentPage={currentPage}
					itemsPerPage={itemsPerPage}
					onPageChange={onPageChange}
					onPageSizeChange={onPageSizeChange}
				/>
			)}
		</div>
	);
}
