"use client";

import { getUser } from "@/lib/getToken";
import { useEffect, useState } from "react";

export const useUser = () => {
	const [user, setUser] = useState<any>();

	const userData = async () => {
		const userData = await getUser();

		if (userData) {
			setUser(userData);
		}
	};

	useEffect(() => {
		userData();
	}, []);

	return user;
};
