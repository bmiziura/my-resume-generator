import { StyleSheet, Text, View } from "@react-pdf/renderer"
import React from "react"

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",

    marginBottom: "3px",
  },

  bullet: {
    fontWeight: "bold",

    marginRight: "4px",
  },

  text: {
    width: "410px",
  },
})

const List = ({ text }) => {
  return (
    <View>
      {text.map((txt, index) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>{txt}</Text>
        </View>
      ))}
    </View>
  )
}

export default List
