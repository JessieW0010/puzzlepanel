import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	TouchableOpacity
} from "react-native";

const width = Dimensions.get("screen").width;

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.grid}>
				{/* Row 1 */}
				<View style={[styles.row, { paddingTop: "2%" }]}>
					<TouchableOpacity style={styles.square}>
						<Text>0</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.square}>
						<Text>1</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.square}>
						<Text>2</Text>
					</TouchableOpacity>
				</View>
				{/* Row 2 */}
				<View style={styles.row}>
					<TouchableOpacity style={styles.square}>
						<Text>3</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.square}>
						<Text>4</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.square}>
						<Text>5</Text>
					</TouchableOpacity>
				</View>
				{/* Row 3  */}
				<View style={[styles.row, { paddingBottom: "2%" }]}>
					<TouchableOpacity style={styles.square}>
						<Text>6</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.square}>
						<Text>7</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.square}>
						<Text>8</Text>
					</TouchableOpacity>
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
	},
	square: {
		backgroundColor: "gray",
		flex: 1,
		margin: "2%"
	}
});
