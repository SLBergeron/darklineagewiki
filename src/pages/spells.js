import React from 'react';
import { graphql } from 'gatsby';
import { Box, Image, Message, Grid } from 'theme-ui'
import spellbook from "../../src/images/BTNTomeOfRetraining.png"

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import SEO from '@rocketseat/gatsby-theme-docs/src/components/SEO';

export default function Spells({data}) {
    return (
        <Layout title="Spell list">
        <SEO title="Spell list" />
        <Image
            src={spellbook}
            sx={{
              // values referencing scales defined in a theme
              borderRadius: '5px',
              marginBottom: '20px',
            }}
        />
        <Message>
        A list of available spells.
        </Message>
        <Grid
        gap={2}
        columns={[2, '1fr 1fr']}>
            {data.allSpellsJson.edges.map(({ node }, index) => (
                    <Box bg='muted'><h3>{node.Text___Name}</h3></Box>
                ))}
        </Grid>
        </Layout>
    )
}

export const query = graphql`
  {
    allSpellsJson {
      edges {
        node {
          Text___Name
          Art___Interface_Icon
        }
      }
    }
  }
`