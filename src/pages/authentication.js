import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
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
