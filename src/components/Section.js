import { StyleSheet, Text, View } from "@react-pdf/renderer"
import React from "react"

const styles = StyleSheet.create({
  container: {
    marginVertical: "8px",
  },

  header: {
    fontSize: "16px",

    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: "#c0c0c0",

    paddingBottom: "4px",
    marginBottom: "4px",

    color: "#003d74",
  },

  content: {
    marginTop: "4px",
  },
})

const Section = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  )
}

export default Section
