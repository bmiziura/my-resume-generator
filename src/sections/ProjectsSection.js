import { Link, StyleSheet, Text, View } from "@react-pdf/renderer"
import React from "react"
import Section from "../components/Section"
import { useLanguage } from "../MyDocument"

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

  link: {
    color: "#003d74",
  },
})

const ProjectItem = ({ data }) => {
  return (
    <View style={styles.projectContainer}>
      <Text style={styles.header}>{data.header}</Text>
      <Text style={styles.description}>{data.description}</Text>

      <View style={styles.technologyList}>
        {data.tags.map((tag, index) => (
          <Text style={styles.technologyItem} key={index}>
            {tag}
          </Text>
        ))}
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.demoText}>
          Demo:{" "}
          <Link src={data.demoLink}>
            <Text style={styles.link}>{data.demoLink}</Text>
          </Link>
        </Text>
        <Text style={styles.githubText}>
          Github:{" "}
          <Link src={data.githubLink}>
            <Text style={styles.link}>{data.githubLink}</Text>
          </Link>
        </Text>
      </View>
    </View>
  )
}

const ProjectsSection = () => {
  const { language } = useLanguage()

  return (
    <Section title={language.sections.projects.header}>
      <View style={styles.container}>
        {language.sections.projects.list.map((data, index) => (
          <ProjectItem key={index} data={data} />
        ))}
      </View>
    </Section>
  )
}

export default ProjectsSection
