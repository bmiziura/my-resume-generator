import { StyleSheet, Text, View } from "@react-pdf/renderer"
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

  listHeader: {
    fontWeight: "bold",

    marginBottom: "2px",
  },
})

const TechnologyList = ({ title, children }) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.listHeader}>{title}</Text>
      {children}
    </View>
  )
}

const TechnologiesSection = () => {
  return (
    <Section title="Technologie">
      <View style={styles.container}>
        <TechnologyList title="Front-End">
          <List
            text={[
              "React (Next.JS)",
              "JavaScript / TypeScript",
              "HTML",
              "CSS / Tailwind CSS",
            ]}
          />
        </TechnologyList>
        <TechnologyList title="Back-End">
          <List
            text={[
              "Java",
              "Spring (RestAPI, Data, Security)",
              "Maven / Gradle",
              "Bazy danych: MySQL, MongoDB oraz Redis",
            ]}
          />
        </TechnologyList>
      </View>
    </Section>
  )
}

export default TechnologiesSection
