import { ColumnDef } from "@tanstack/react-table";

export interface DataTableProps<TData> {
	columns: ColumnDef<TData>[];
	data: TData[];
	quickActions?: QuickTableAction<TData>[];
	enableRowSelection?: boolean;
	pagination?: boolean;
	pageSize?: boolean;
	onPageChange?: (page: number) => void;
	onPageSizeChange?: (pageSize: number) => void;
	totalItems?: number;
	currentPage?: number;
	itemsPerPage?: number;
}

export interface QuickTableAction<TData> {
	label: string;
	icon?: React.ReactNode;
	onClick: (selectedRows: TData[]) => void;
	disabled?: boolean;
}

export interface DataTablePaginationProps {
	table: any;
	totalItems?: number;
	currentPage?: number;
	itemsPerPage?: number;
	onPageChange?: (page: number) => void;
	onPageSizeChange?: (pageSize: number) => void;
}

export interface DataTableToolbarProps<TData> {
	table: any;
	quickActions?: QuickTableAction<TData>[];
}
