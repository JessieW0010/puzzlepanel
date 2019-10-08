import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Tile(props) {
	const [color, setColor] = useState("gray");

	const onPress = function() {
		color === "gray" ? setColor("green") : setColor("gray");
	};

	return (
		<TouchableOpacity
			style={[styles.square, { backgroundColor: color }]}
			onPress={() => onPress()}
		>
			{/* <Text>8</Text> */}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	square: {
		flex: 1,
		margin: "2%"
	}
});
