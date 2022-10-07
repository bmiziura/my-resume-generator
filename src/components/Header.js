import { Link, StyleSheet, Text, View } from "@react-pdf/renderer"
import React from "react"
import { useLanguage } from "../MyDocument"

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
  const { language } = useLanguage()

  return (
    <View style={styles.headerLinksContainer}>
      <Text>
        {language.header.portfolio}
        <Link src={`https://${language.header.portfolioLink}`}>
          <Text style={styles.link}>{language.header.portfolioLink}</Text>
        </Link>
      </Text>
      <Text>{language.header.email}</Text>
      <Text>{language.header.phoneNumber}</Text>
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
