import { StyleSheet, Text, View } from "@react-pdf/renderer"
import React from "react"
import List from "../components/List"
import Section from "../components/Section"

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

const ExperienceSection = () => {
  return (
    <Section title="Doświadczenie">
      <View style={styles.container}>
        <View style={styles.item}>
          <View style={styles.firstSection}>
            <Text style={styles.itemDate}>2020-03 - 2022-09</Text>
            <Text style={styles.itemDateSmall}>(ponad 2 lata)</Text>
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemHeader}>
              Java Developer + Zarządzanie serwerami Linux
            </Text>
            <Text style={styles.itemCompany}>
              SOHP Marcin Szuksztul, Redy-Osada 10-100
            </Text>
            <View style={styles.itemListContainer}>
              <List
                text={[
                  "tworzenie, utrzymywanie i wdrażanie nowych funkcjonalności do aplikacji backendowej napisanej w Javie przy użyciu Springa i innych technologii,",
                  "zarządzanie serwerami na systemie linux,",
                  "praca w małym zespole,",
                  "wykorzystywanie kontroli wersji (Git),",
                  "oraz korzystanie z bazy danych MongoDB & Redis.",
                ]}
              />
            </View>
          </View>
        </View>
      </View>
    </Section>
  )
}

export default ExperienceSection
