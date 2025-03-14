// "use client";

// import { PageHeader } from "@/components/PageHeader";
// import { FeaturedResources } from "@/components/student/resources/FeaturedResources";
// import { ResourceCategories } from "@/components/student/resources/RescourceCategories";
// import { ResourceList } from "@/components/student/resources/ResourceList";

// export default function ResourcesPage() {
// 	return (
// 		<div className="container mx-auto px-4 py-8">
// 			<PageHeader
// 				title="Career Resources"
// 				description="Access guides, templates, and materials to support your career journey"
// 			/>
// 			<div className="mb-8">
// 				<FeaturedResources />
// 			</div>
// 			<div className="grid gap-8 md:grid-cols-12">
// 				<aside className="md:col-span-3">
// 					<ResourceCategories />
// 				</aside>
// 				<main className="md:col-span-9">
// 					<ResourceList />
// 				</main>
// 			</div>
// 		</div>
// 	);
// }

"use client";

import { PageHeader } from "@/components/PageHeader";
import { FeaturedResources } from "@/components/student/resources/FeaturedResources";
import { ResourceTabs } from "@/components/student/resources/ResourceTabs";

export default function ResourcesPage() {
	return (
		<div className="container mx-auto px-4 py-8 max-w-7xl">
			<PageHeader
				title="Career Resources"
				description="Access guides, templates, and materials to support your career journey"
			/>
			<div className="mb-8">
				<FeaturedResources />
			</div>
			<ResourceTabs />
		</div>
	);
}
