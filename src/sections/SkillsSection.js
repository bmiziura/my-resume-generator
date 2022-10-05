import { StyleSheet, View } from "@react-pdf/renderer"
import React from "react"
import List from "../components/List"
import Section from "../components/Section"

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

const SkillsSection = () => {
  return (
    <Section title="Umiejętności">
      <View style={styles.container}>
        <View style={styles.firstSection}></View>
        <View style={styles.secondSection}>
          <List
            text={[
              "Komunikatywność i praca w zespole",
              "Efektywne zarządzanie dokumentacją",
              "Szybkie rozwiązywanie problemów",
              "Zarządzanie czasem",
              "Umiejętność pracy pod presją czasu",
            ]}
          />
        </View>
      </View>
    </Section>
  )
}

export default SkillsSection
