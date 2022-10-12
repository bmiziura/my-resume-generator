import { Text } from "@react-pdf/renderer"
import React from "react"
import { useLanguage } from "../MyDocument"

const RodoSection = () => {
  const { language } = useLanguage()

  return (
    <Text
      style={{
        fontSize: 6,
      }}
    >
      {language.sections.rodo}
    </Text>
  )
}

export default RodoSection
