import { StyleSheet, Text, View } from "@react-pdf/renderer"
import React from "react"

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
  },

  header: {
    fontSize: "24px",

    fontWeight: "bold",
  },

  headerSubText: {
    fontSize: "12px",
    fontWeight: "thin",
  },

  headerLinksContainer: {
    flexDirection: "row",

    justifyContent: "space-evenly",

    marginVertical: "16px",
  },

  linkContainer: {
    flexDirection: "row",
  },
})

const HeaderLinks = () => {
  return (
    <View style={styles.headerLinksContainer}>
      <Text>Portfolio: www.bmiziura.github.io</Text>
      <Text>Email: bartosz.miziura@o2.pl</Text>
      <Text>Telefon: +48 695 452 798</Text>
    </View>
  )
}

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>BARTOSZ MIZIURA</Text>
      <Text style={styles.headerSubText}>Front-End & Backend Developer</Text>

      <HeaderLinks />
    </View>
  )
}

export default Header
