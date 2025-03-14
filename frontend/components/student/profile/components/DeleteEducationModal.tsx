import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Trash } from "lucide-react";
import React from "react";

export const DeleteEducationModal = ({
	handleDelete,
	onCloseModal,
	id,
}: any) => {
	const onConfirmDelete = () => {
		handleDelete(
			id,
			{
				onSuccess: () => {
					toast({
						title: "Education deleted",
						description: `Education deleted successfully.`,
						variant: "success",
					});
					onCloseModal();
				},
			},
			{
				onError: () => {
					toast({
						title: "Error",
						description: `Error while deleting education please try again.`,
						variant: "destructive",
					});
				},
			}
		);
		onCloseModal();
	};
	return (
		<div className="p-6 text-center">
			<Trash className="mx-auto h-10 w-10 text-red-500" />
			<h2 className="mt-4 text-lg font-semibold text-gray-900">
				Are you sure you want to delete this item?
			</h2>
			<p className="mt-2 text-sm text-gray-600">
				This action cannot be undone.
			</p>
			<div className="mt-6 flex justify-center gap-3">
				<Button variant="outline">Cancel</Button>
				<Button variant="destructive" onClick={onConfirmDelete}>
					Confirm Delete
				</Button>
			</div>
		</div>
	);
};
