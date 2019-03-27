import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from 'components/Layout'
import PropTypes from 'prop-types'
import AuthContent from 'components/AuthContent'

function Authentication({ data, location }) {
	const { title } = data.site.siteMetadata
	return (
		<Layout location={location} title={title}>
			<AuthContent />
		</Layout>
	)
}
// Authentication.propTypes = {
// 	classes: PropTypes.object.isRequired,
// }
export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`
export default Authentication
