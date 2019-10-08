import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Tile() {
	return (
		<TouchableOpacity style={styles.square}>
			{/* <Text>8</Text> */}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	square: {
		backgroundColor: "gray",
		flex: 1,
		margin: "2%"
	}
});
