import { StyleSheet, View } from "@react-pdf/renderer"
import React from "react"
import List from "../components/List"
import Section from "../components/Section"
import { useLanguage } from "../MyDocument"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  firstSection: {
    minWidth: "100px",
  },

  secondSection: {
    marginTop: "2px",
    marginLeft: "24px",
  },
})

const LanguagesSection = () => {
  const { language } = useLanguage()

  return (
    <Section title={language.sections.languages.header}>
      <View style={styles.container}>
        <View style={styles.firstSection}></View>
        <View style={styles.secondSection}>
          <List text={["Angielski - B1"]} />
        </View>
      </View>
    </Section>
  )
}

export default LanguagesSection
