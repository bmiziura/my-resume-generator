import { StyleSheet, Text, View } from "@react-pdf/renderer"
import React from "react"
import List from "../components/List"
import Section from "../components/Section"

import { useLanguage } from "../MyDocument"

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
  const { language } = useLanguage()

  return (
    <Section title={language.sections.technologies.header}>
      <View style={styles.container}>
        {language.sections.technologies.columns.map((column, index) => (
          <TechnologyList key={index} title={column.header}>
            <List text={column.list} />
          </TechnologyList>
        ))}
      </View>
    </Section>
  )
}

export default TechnologiesSection
