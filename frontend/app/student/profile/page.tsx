"use client";

import { Education } from "@/components/student/profile/Education";
import { Experience } from "@/components/student/profile/Experience";
import { PersonalInfo } from "@/components/student/profile/PersonalInfo";
import { ProfileHeader } from "@/components/student/profile/ProfileHeader";
import { Skills } from "@/components/student/profile/Skills";
import { useStudentProfile } from "@/hooks";
import { useProfile } from "@/lib/api/queries";

export default function ProfilePage() {
	const { data, isError, isLoading } = useStudentProfile();
	return (
		<div className="flex max-w-7xl mx-auto min-h-screen flex-col gap-8 pb-8 pt-6 px-4">
			{isError && <div>Something went wrong </div>}
			{isLoading ? (
				<div>Loading...</div>
			) : data && Object.keys(data).length ? (
				<>
					<ProfileHeader data={data} />
					<div className="container grid gap-8 lg:grid-cols-3">
						<div className="lg:col-span-2 space-y-8">
							<Experience data={data?.experiences} />
							<Education education={data?.education} />
						</div>
						<div className="space-y-8">
							<PersonalInfo data={data} />
							<Skills />
						</div>
					</div>
				</>
			) : (
				!isError && <div>Empty Data Component</div>
			)}

			{/* <ProfileHeader data={""} />
			<div className="container grid gap-8 lg:grid-cols-3">
				<div className="lg:col-span-2 space-y-8">
					<Experience />
					<Education />
				</div>
				<div className="space-y-8">
					<PersonalInfo data={""} />
					<Skills />
				</div>
			</div> */}
		</div>
	);
}
