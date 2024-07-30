import { useEffect, useRef } from "react";
import { Game } from "phaser";
import { gameConfig } from "~/game/config/gameConfig";

const GameContainer = () => {
	const gameArea = useRef(null);

	useEffect(() => {
		const makeGame = async () => {
			if (!gameArea.current) {
				return;
			}
			const config = gameConfig;
			config.parent = gameArea.current;
			new Game(config);
		};
		makeGame();
	}, []);

	return <div ref={gameArea}></div>;
};

export default GameContainer;
