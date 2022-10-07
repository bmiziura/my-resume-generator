import { StyleSheet, View } from "@react-pdf/renderer"
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
})

const SkillsSection = () => {
  const { language } = useLanguage()

  return (
    <Section title={language.sections.skills.header}>
      <View style={styles.container}>
        {language.sections.skills.columns.map((data, index) => (
          <View style={styles.listContainer} key={index}>
            <List text={data.skills} />
          </View>
        ))}
      </View>
    </Section>
  )
}

export default SkillsSection
