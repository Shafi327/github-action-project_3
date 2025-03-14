"use client";
import { TestForm } from "@/components/forms/TestForm";
import { CTASection } from "@/components/home/CTASection";
import { FeaturedJobs } from "@/components/home/FeaturedJobs";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { FileUpload } from "@/components/ui/forms/FileUpload";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col ">
			<div className="md:px-12 px-4 md:mx-auto md:max-w-7xl">
				<HeroSection />
				<FeaturedJobs />
				<FeaturesSection />
			</div>
			<CTASection />
			{/* <TestForm /> */}
			{/* <FileUpload
				maxSize={10 * 1024 * 1024} // 10MB
				maxFiles={3}
				multiple={true}
				dragAndDrop={true}
				showPreview={true}
				onFilesSelected={(files) =>
					console.log("Selected files:", files)
				}
				onFilesRemoved={(files) => console.log("Removed files:", files)}
				onError={(error) => console.error("Upload error:", error)}
				placeholder="Drop files here or click to select"
			/> */}
		</main>
	);
}
