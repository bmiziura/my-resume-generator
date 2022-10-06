import { Document, Font, Page, StyleSheet } from "@react-pdf/renderer"
import React from "react"
import Header from "./components/Header"

import boldSans from "./fonts/OpenSans-Bold.ttf"
import lightSans from "./fonts/OpenSans-Light.ttf"
import regularSans from "./fonts/OpenSans-Regular.ttf"
import ExperienceSection from "./sections/ExperienceSection"
import LanguagesSection from "./sections/LanguagesSection"
import ProjectsSection from "./sections/ProjectsSection"
import SkillsSection from "./sections/SkillsSection"
import TechnologiesSection from "./sections/TechnologiesSection"

Font.register({
  family: "Open Sans",
  fonts: [
    { src: regularSans, fontWeight: "normal" },
    { src: boldSans, fontWeight: "bold" },
    { src: lightSans, fontWeight: "thin" },
  ],
})

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",

    padding: "32px",

    fontFamily: "Open Sans",
    fontSize: "10px",

    color: "#363d49",
  },
})

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" wrap={false} style={styles.page}>
      <Header />

      <ExperienceSection />
      <TechnologiesSection />
      <ProjectsSection />
      <SkillsSection />
      <LanguagesSection />
    </Page>
  </Document>
)

export default MyDocument
