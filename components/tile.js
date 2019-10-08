import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Tile({ color }) {
	return (
		<TouchableOpacity
			style={[styles.square, { backgroundColor: color }]}
			onPress={() => props.onPress()}
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
