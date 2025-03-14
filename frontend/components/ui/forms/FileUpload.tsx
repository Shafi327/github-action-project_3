"use client";

import * as React from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import { Upload, X, File as FileIcon, AlertCircle } from "lucide-react";

import { z } from "zod";
import { toast } from "sonner";
import { Button } from "../button";
import { Progress } from "../progress";

// File validation schema
const fileSchema = z.object({
	name: z.string(),
	size: z.number(),
	type: z.string(),
});

export type FileWithPreview = {
	file: File;
	preview: string;
};

export interface FileUploadProps {
	/** Maximum file size in bytes */
	maxSize?: number;
	/** Maximum number of files allowed */
	maxFiles?: number;
	/** Accepted file types */
	accept?: Record<string, string[]>;
	/** Whether to enable drag and drop */
	dragAndDrop?: boolean;
	/** Whether to allow multiple files */
	multiple?: boolean;
	/** Whether to show preview */
	showPreview?: boolean;
	/** Custom class names */
	className?: string;
	/** Custom preview class names */
	previewClassName?: string;
	/** Callback when files are selected */
	onFilesSelected?: (files: File[]) => void;
	/** Callback when files are removed */
	onFilesRemoved?: (files: File[]) => void;
	/** Callback when there's an error */
	onError?: (error: string) => void;
	/** Custom placeholder text */
	placeholder?: string;
	/** Whether the component is disabled */
	disabled?: boolean;
	/** Custom validation function */
	validate?: (file: File) => boolean | string;
}

export function FileUpload({
	maxSize = 5 * 1024 * 1024, // 5MB default
	maxFiles = 1,
	accept = {
		"image/*": [],
		"application/pdf": [".pdf"],
		"application/msword": [".doc"],
		"application/vnd.openxmlformats-officedocument.wordprocessingml.document":
			[".docx"],
	},
	dragAndDrop = true,
	multiple = false,
	showPreview = true,
	className,
	previewClassName,
	onFilesSelected,
	onFilesRemoved,
	onError,
	placeholder = "Click or drag files to upload",
	disabled = false,
	validate,
}: FileUploadProps) {
	const [files, setFiles] = React.useState<FileWithPreview[]>([]);
	const [uploadProgress, setUploadProgress] = React.useState<number>(0);
	const [isUploading, setIsUploading] = React.useState<boolean>(false);

	const onDrop = React.useCallback(
		(acceptedFiles: File[]) => {
			if (disabled) return;

			const newFiles = acceptedFiles.map((file) =>
				Object.assign(file, {
					preview: file.type.startsWith("image/")
						? URL.createObjectURL(file)
						: null,
				})
			);

			// Validate files
			const validFiles = newFiles.filter((file) => {
				// Size validation
				if (file.size > maxSize) {
					onError?.(
						`File ${file.name} is too large. Maximum size is ${
							maxSize / 1024 / 1024
						}MB`
					);
					return false;
				}

				// Custom validation
				if (validate) {
					const validationResult = validate(file);
					if (typeof validationResult === "string") {
						onError?.(validationResult);
						return false;
					}
					return validationResult;
				}

				return true;
			});

			if (validFiles.length + files.length > maxFiles) {
				onError?.(`Maximum ${maxFiles} files allowed`);
				return;
			}

			setFiles((prev: any) => [...prev, ...validFiles]);
			onFilesSelected?.(validFiles.map((f: any) => f.file));
		},
		[maxSize, maxFiles, files, onFilesSelected, onError, validate, disabled]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept,
		multiple,
		disabled,
		noClick: !dragAndDrop,
	});

	const removeFile = (fileToRemove: FileWithPreview) => {
		setFiles((prev) => prev.filter((f) => f !== fileToRemove));
		if (fileToRemove.preview) {
			URL.revokeObjectURL(fileToRemove.preview);
		}
		onFilesRemoved?.([fileToRemove.file]);
	};

	// Cleanup previews on unmount
	React.useEffect(() => {
		return () => {
			files.forEach((file) => {
				if (file.preview) {
					URL.revokeObjectURL(file.preview);
				}
			});
		};
	}, []);

	// Simulated upload progress
	const simulateUpload = async () => {
		setIsUploading(true);
		setUploadProgress(0);

		for (let i = 0; i <= 100; i += 10) {
			await new Promise((resolve) => setTimeout(resolve, 100));
			setUploadProgress(i);
		}

		setIsUploading(false);
		toast.success("Files uploaded successfully!");
	};

	return (
		<div className={cn("w-full", className)}>
			<div
				{...(dragAndDrop ? getRootProps() : {})}
				className={cn(
					"relative border-2 border-dashed rounded-lg p-6",
					"transition-colors duration-200",
					isDragActive
						? "border-primary bg-primary/5"
						: "border-muted-foreground/25",
					disabled && "opacity-50 cursor-not-allowed",
					className
				)}
			>
				<input {...getInputProps()} />

				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<Upload className="h-10 w-10 text-muted-foreground" />
					<div className="text-sm text-muted-foreground">
						{isDragActive ? (
							<p>Drop the files here ...</p>
						) : (
							<p>{placeholder}</p>
						)}
					</div>
					{!disabled && dragAndDrop && (
						<Button
							type="button"
							variant="secondary"
							size="sm"
							className="mt-2"
							onClick={(e: any) => e.stopPropagation()}
						>
							Select Files
						</Button>
					)}
				</div>
			</div>

			{/* File Preview */}
			{showPreview && files.length > 0 && (
				<div className={cn("mt-4 space-y-2", previewClassName)}>
					{files.map((file, index) => (
						<div
							key={index}
							className="flex items-center justify-between p-2 border rounded-lg"
						>
							<div className="flex items-center space-x-2">
								{file.preview ? (
									<img
										src={file.preview}
										alt={file?.file?.name}
										className="h-10 w-10 object-cover rounded"
									/>
								) : (
									<FileIcon className="h-10 w-10 text-muted-foreground" />
								)}
								<div className="flex flex-col">
									<span className="text-sm font-medium">
										{file?.file?.name}
									</span>
									<span className="text-xs text-muted-foreground">
										{(file?.file?.size / 1024).toFixed(1)} KB
									</span>
								</div>
							</div>
							<Button
								type="button"
								variant="ghost"
								size="sm"
								className="h-8 w-8 p-0"
								onClick={() => removeFile(file)}
							>
								<X className="h-4 w-4" />
							</Button>
						</div>
					))}

					{isUploading && (
						<div className="mt-4">
							<Progress value={uploadProgress} className="h-2" />
							<p className="text-sm text-muted-foreground mt-2">
								Uploading... {uploadProgress}%
							</p>
						</div>
					)}

					{files.length > 0 && !isUploading && (
						<Button
							type="button"
							className="mt-4"
							onClick={simulateUpload}
							disabled={isUploading}
						>
							Upload {files.length}{" "}
							{files.length === 1 ? "file" : "files"}
						</Button>
					)}
				</div>
			)}
		</div>
	);
}
