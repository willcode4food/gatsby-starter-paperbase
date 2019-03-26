import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from 'components/Layout'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Content from 'components/Content'

function DashboardIndex({ data, location, classes }) {
	const { title } = data.site.siteMetadata
	return (
		<Layout location={location} title={title}>
			<Content />
		</Layout>
	)
}
DashboardIndex.propTypes = {
	classes: PropTypes.object.isRequired,
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
