import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from 'components/Layout'
import { rhythm } from 'utils/typography'

const DashboardIndex = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title
	return (
		<Layout location={location} title={siteTitle}>
			<div>Hello World</div>
		</Layout>
	)
}

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`
export default DashboardIndex
