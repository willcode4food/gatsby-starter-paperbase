import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'

function AnalyticsPage({ data, location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return <Layout location={location} title={pageTitle} />
}
AnalyticsPage.propTypes = {
	data: PropTypes.object.isRequired,
	location: PropTypes.object,
}
export default AnalyticsPage
