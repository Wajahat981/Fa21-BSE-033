import React from 'react';  // Import React library
import { View, StyleSheet, Text } from 'react-native';  // Import necessary components from 'react-native'
const SQUARE_SIZE = 40;  // Define the size of each square
const LIGHT_COLOR = 'yellow';  // Define the color for light squares
const DARK_COLOR = 'brown';  // Define the color for dark squares

// Functional component for rendering a single square
const Square = ({ color }) => (
  <View style={[styles.square, { backgroundColor: color }]} />  // Render a View with specified background color
);

// Functional component for rendering a row of squares
const Row = ({ rowNumber }) => (
  <View style={styles.row}>
    {/* Create 8 squares in the row */}
    {[...Array(8)].map((_, index) => (
      <Square
        key={index}  // Unique key for each square
        color={(rowNumber + index) % 2 === 0 ? LIGHT_COLOR : DARK_COLOR}  // Alternate between light and dark colors based on row number and index
      />
    ))}
  </View>
);

// Main chessboard component
const Chessboard = () => (
  <View style={styles.container}>
    {/* Create 8 rows in the chessboard */}
    {[...Array(8)].map((_, index) => (
      <Row key={index} rowNumber={index} />  // Pass row number as prop to each row
    ))}
  </View>
);

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',  // Display rows vertically
  },
  row: {
    flexDirection: 'row',  // Display squares horizontally within a row
  },
  square: {
    width: SQUARE_SIZE,  // Set width of square
    height: SQUARE_SIZE,  // Set height of square
  },
});

export default Chessboard;