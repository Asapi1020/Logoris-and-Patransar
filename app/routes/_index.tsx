import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
	return [
		{ title: "Logoris and Patransar" },
		{ name: "description", content: "A browser game" },
	];
};

export default function Index() {
	const [GameComponent, setGameComponent] =
		useState<React.ComponentType | null>(null);

	useEffect(() => {
		const loadGameComponent = async () => {
			const module = await import("~/components/gameWindow");
			setGameComponent(() => module.default);
		};

		loadGameComponent();
	}, []);

	return (
		<div>
			<h1>Logoris and Patransar</h1>
			{GameComponent ? <GameComponent /> : <p>Loading...</p>}
		</div>
	);
}
