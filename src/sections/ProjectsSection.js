import { StyleSheet, Text, View } from "@react-pdf/renderer"
import React from "react"
import Section from "../components/Section"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    flexWrap: "wrap",
  },

  projectContainer: {
    flex: 1,
  },

  header: {
    fontWeight: "bold",

    marginBottom: "2px",
  },
  description: {
    fontSize: "9px",

    maxWidth: "200px",

    marginVertical: "2px",
  },

  technologyList: {
    flexDirection: "row",

    flexWrap: "wrap",

    maxWidth: "200px",

    marginVertical: "4px",

    fontSize: "9px",
  },

  technologyItem: {
    backgroundColor: "#ddd",

    paddingHorizontal: "5px",
    paddingVertical: "3px",

    marginRight: "2px",
    marginBottom: "2px",

    borderRadius: "100px",
  },

  bottomContainer: {},

  demoText: {},
  githubText: {},
})

const ProjectsSection = () => {
  return (
    <Section title="Moje Projekty">
      <View style={styles.container}>
        <View style={styles.projectContainer}>
          <Text style={styles.header}>Klon OLX.pl</Text>
          <Text style={styles.description}>
            Klon OLX.pl to projekt strony napisanej w TypeScript'cie przy użyciu
            Next.JS (React).
          </Text>

          <View style={styles.technologyList}>
            <Text style={styles.technologyItem}>TypeScript</Text>
            <Text style={styles.technologyItem}>Next.JS (React)</Text>
            <Text style={styles.technologyItem}>Tailwind CSS</Text>
            <Text style={styles.technologyItem}>tRPC</Text>
            <Text style={styles.technologyItem}>Prisma</Text>
          </View>

          <View style={styles.bottomContainer}>
            <Text style={styles.demoText}>
              Demo: https://olx-clone-nextjs.vercel.app
            </Text>
            <Text style={styles.githubText}>
              Github: https://github.com/bmiziura/olx-clone
            </Text>
          </View>
        </View>
        <View style={styles.projectContainer}>
          <Text style={styles.header}>Moja Strona (Portfolio)</Text>
          <Text style={styles.description}>
            Moja responsywna strona internetowa stworzona przy użyciu HTML, CSS,
            JavaScript.
          </Text>

          <View style={styles.technologyList}>
            <Text style={styles.technologyItem}>HTML</Text>
            <Text style={styles.technologyItem}>JavaScript</Text>
            <Text style={styles.technologyItem}>CSS</Text>
            <Text style={styles.technologyItem}>Swiper.js</Text>
          </View>

          <View style={styles.bottomContainer}>
            <Text style={styles.demoText}>
              Demo: https://bmiziura.github.io/
            </Text>
            <Text style={styles.githubText}>
              Github: https://github.com/bmiziura/bmiziura.github.io
            </Text>
          </View>
        </View>
      </View>
    </Section>
  )
}

export default ProjectsSection
