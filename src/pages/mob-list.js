import React from 'react';
import { Link, graphql } from 'gatsby';
import { Box, Image, Grid, Container } from 'theme-ui'
import icon from "../../src/images/BTN3M1.png"

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import SEO from '@rocketseat/gatsby-theme-docs/src/components/SEO';

export default function Moblist({data}) {
    return (
        <Layout title="Mob list">
        <SEO title="Mob list" />
        <Image
            src={icon}
            sx={{
              // values referencing scales defined in a theme
              borderRadius: '5px',
              marginBottom: '16px',
            }}
        />
        <Container
        p={4}
        sx={{
            marginBottom: '16px',
            background: '#feebc8',
            textDecorationColor: '#2d3748',
            borderRadius: '5px',
        }}>
        <p>Click on any mob to get see it's loot table.</p>
        </Container>
        <Grid
        gap={2}
        columns={[2, '1fr 1fr']}>
            {data.allLootTableJson.edges.map(({ node }) => (
                  <div>
                  <Link to={`/${node._key}`}>
                    <Box>
                      <h3>{node.Mob}</h3>
                    </Box>
                  </Link>
                  </div>
                ))}
        </Grid>
        </Layout>
    )
}

export const query = graphql`
  {
    allLootTableJson {
      edges {
        node {
          Mob
          _key
        }
      }
    }
  }
`