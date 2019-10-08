import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Tile from "./components/tile";
const width = Dimensions.get("screen").width;

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.grid}>
				{/* Row 1 */}
				<View style={[styles.row, { paddingTop: "2%" }]}>
					<Tile />
					<Tile />
					<Tile />
				</View>
				{/* Row 2 */}
				<View style={styles.row}>
					<Tile />
					<Tile />
					<Tile />
				</View>
				{/* Row 3  */}
				<View style={[styles.row, { paddingBottom: "2%" }]}>
					<Tile />
					<Tile />
					<Tile />
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
