import { StyleSheet, Text, View } from "@react-pdf/renderer"
import React from "react"
import List from "../components/List"
import Section from "../components/Section"
import { useLanguage } from "../MyDocument"

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },

  item: {
    flexDirection: "row",
  },

  firstSection: {
    width: "100px",
  },

  itemDate: {},
  itemDateSmall: {
    fontSize: "8px",
    color: "#222",
  },

  itemContent: {
    marginLeft: "24px",
  },

  itemHeader: {
    fontWeight: "bold",

    fontSize: "12px",
  },
  itemCompany: {
    marginTop: "2px",
    marginBottom: "4px",
  },

  itemListContainer: {},
})

const ExperienceItem = ({ data }) => {
  return (
    <View style={styles.item}>
      <View style={styles.firstSection}>
        <Text style={styles.itemDate}>{data.date}</Text>
        <Text style={styles.itemDateSmall}>{data.dateStamp}</Text>
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.itemHeader}>{data.header}</Text>
        <Text style={styles.itemCompany}>
          SOHP Marcin Szuksztul, Redy-Osada 10-100
        </Text>
        <View style={styles.itemListContainer}>
          <List text={data.list} />
        </View>
      </View>
    </View>
  )
}

const ExperienceSection = () => {
  const { language } = useLanguage()

  return (
    <Section title={language.sections.experience.header}>
      <View style={styles.container}>
        {language.sections.experience.list.map((data, index) => (
          <ExperienceItem key={index} data={data} />
        ))}
      </View>
    </Section>
  )
}

export default ExperienceSection
