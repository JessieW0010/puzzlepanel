import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Tile from "./components/tile";
const width = Dimensions.get("screen").width;

export default function App() {
	const [tiles, setTiles] = useState([
		["gray", "gray", "gray"],
		["gray", "gray", "gray"],
		["gray", "gray", "gray"]
	]);

	const onPress = function() {};

	return (
		<View style={styles.container}>
			<View style={styles.grid}>
				{/* Row 1 */}
				<View style={[styles.row, { paddingTop: "2%" }]}>
					<Tile color={tiles[0][0]} />
					<Tile color={tiles[0][1]} />
					<Tile color={tiles[0][2]} />
				</View>
				{/* Row 2 */}
				<View style={styles.row}>
					<Tile color={tiles[1][0]} />
					<Tile color={tiles[1][1]} />
					<Tile color={tiles[1][2]} />
				</View>
				{/* Row 3  */}
				<View style={[styles.row, { paddingBottom: "2%" }]}>
					<Tile color={tiles[2][0]} />
					<Tile color={tiles[2][1]} />
					<Tile color={tiles[2][2]} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	grid: {
		height: 0.9 * width,
		width: 0.9 * width,
		flexDirection: "column"
	},
	row: {
		backgroundColor: "blue",
		flexDirection: "row",
		flex: 1,
		paddingRight: "2%",
		paddingLeft: "2%"
	}
});
