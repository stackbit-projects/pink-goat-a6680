import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const SpeakingPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Speaking Engagements</h1>
    <p>I would love to speak at your conference!</p>
    <p>I will be speaking at the following conferences next year:</p>
    <ul>
      <li>JS Heroes</li>
      <li>self.conference</li>
      <li>Strange Loop</li>
    </ul>
  </Layout>
)
export default SpeakingPage