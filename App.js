import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.grid}>
				<Text>Hi</Text>
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
		backgroundColor: "green",
		height: 0.9 * width,
		width: 0.9 * width
	}
});
