import { StyleSheet, View } from "@react-pdf/renderer"
import React from "react"
import List from "../components/List"
import Section from "../components/Section"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  listContainer: {
    flex: 1,
  },
})

const SkillsSection = () => {
  return (
    <Section title="Umiejętności">
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <List
            text={[
              "Komunikatywność i praca w zespole,",
              "Samodzielność i dobre zarządzanie czasem,",
              "Dobra organizacja pracy,",
              "Pomysłowość,",
              "Umiejętność pracy pod presją czasu,",
            ]}
          />
        </View>
        <View style={styles.listContainer}>
          <List
            text={[
              "Zaangażowanie",
              "Szybkie rozwiązywanie problemów,",
              "Zarządzanie dokumentacją,",
              "Zdolność adaptacji,",
              "Umiejętność szybkiego uczenia się.",
            ]}
          />
        </View>
      </View>
    </Section>
  )
}

export default SkillsSection
