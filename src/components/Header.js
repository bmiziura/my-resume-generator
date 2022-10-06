import { Link, StyleSheet, Text, View } from "@react-pdf/renderer"
import React from "react"

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
  },

  header: {
    fontSize: "24px",

    fontWeight: "bold",
    color: "#003d74",
  },

  headerSubText: {
    fontSize: "12px",
    fontWeight: "thin",
    color: "#003d74",
  },

  headerLinksContainer: {
    flexDirection: "row",

    justifyContent: "space-evenly",

    marginVertical: "16px",
  },

  linkContainer: {
    flexDirection: "row",
  },

  link: {
    color: "#003d74",
  },
})

const HeaderLinks = () => {
  return (
    <View style={styles.headerLinksContainer}>
      <Text>
        Portfolio:{" "}
        <Link src="https://bmiziura.github.io">
          <Text style={styles.link}>bmiziura.github.io</Text>
        </Link>
      </Text>
      <Text>Email: bartosz.miziura@o2.pl</Text>
      <Text>Telefon: +48 695 452 798</Text>
    </View>
  )
}

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>BARTOSZ MIZIURA</Text>
      <Text style={styles.headerSubText}>Front-End & Back-End Developer</Text>

      <HeaderLinks />
    </View>
  )
}

export default Header
