import React from "react"
import { graphql } from "gatsby"
import { Box, Image, Grid } from 'theme-ui'
import icon from "../../src/images/BTN3M1.png"

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import SEO from '@rocketseat/gatsby-theme-docs/src/components/SEO';


export default function mobstats({data}) {
    return (
        <Layout>
        <SEO title="Dark Lineage Owen - creature page" />
        <Image
            src={icon}
            sx={{
              // values referencing scales defined in a theme
              borderRadius: '5px',
              marginBottom: '20px',
            }}
        />
        <div>
        {data.allUnitsJson.edges.map(({ node }) => (
            <h1>{node.Name}</h1>
        ))}
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Health</th>
              <th>HP/5</th>
              <th>Mana</th>
              <th>MP/5</th>
              <th>Armor</th>
              <th>Defense</th>
              <th>Damage</th>
            </tr>
          </thead>
          <tbody>
            {data.allUnitsJson.edges.map(({ node }) => (
              <tr>
                <td>{node.level}</td>
                <td>{node.HP}</td>
                <td>{node.regenHP}</td>
                <td>{node.manaN}</td>
                <td>{node.regenMana}</td>
                <td>{node.armor}</td>
                <td>{node.def}</td>
                <td>{node.dmgplus1}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Loot table</h2>
        {data.allLootTableJson.edges.map(({ node }) => (
            <Grid
            gap={2}
            columns={[2, '1fr 1fr']}
            sx={{
                marginBottom:'10em',
            }}>
                {node.Drops.map(({ Item_Name }) => (
                <Box
                sx={{
                    borderRadius: '3px',
                    background: 'rgb(250, 250, 249)',
                    paddingTop: '5px',
                    paddingLeft: '5px',
                }}><p>{Item_Name}</p></Box>
                ))}
            </Grid>
        ))}
        </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        allUnitsJson(filter: {_key: {eq: $slug }}) {
            edges {
              node {
                _key
                Name
                HP
                regenHP
                manaN
                regenMana
                armor
                def
                level
                dmgplus1
              }
            }
          }
          allLootTableJson(filter: {_key: {eq: $slug }}) {
            edges {
              node {
                Drops {
                  _key
                  Item_Name
                  Drop_Chance
                }
              }
            }
          }
        }
      `