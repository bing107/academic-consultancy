import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const paragraphStyles = {
  marginBottom: 48,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

// markup
const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulListOfLinks(
          filter: { title: { eq: "Scholarships 2022" } }
        ) {
          edges {
            node {
              id
              title
              list_items {
                url
                title
              }
            }
          }
        }
      }
    `
  );

  return (
    <main style={pageStyles}>
      <title>EU Academic Consultancy</title>
      <h1 style={headingStyles}>EU Academic Consultancy</h1>
      <p style={paragraphStyles}>
        A curated knowledge base of articles, blogs and resources for your
        academic career in the EU
      </p>
      <ul style={listStyles}>
        {data.allContentfulListOfLinks.edges[0].node.list_items.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
                target="_blank"
                rel="noreferrer"
              >
                {link.title}
              </a>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;
