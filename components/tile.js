import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Tile(props) {
	const [color, setColor] = useState("");

	const onPress = function() {
		setColor({ backgroundColor: "green" });
	};

	return (
		<TouchableOpacity style={[styles.square, color]} onPress={() => onPress()}>
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
