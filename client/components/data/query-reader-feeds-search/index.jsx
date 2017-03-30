/**
 * External dependencies
 */
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import { requestFeedSearch } from 'state/reader/feed-search/actions';

class QueryFeedSearch extends Component {
	static propTypes = {
		query: PropTypes.string,
		requestFeedSearch: PropTypes.func,
	}

	componentWillMount() {
		this.props.requestFeedSearch( this.props.query );
	}

	render() {
		return null;
	}
}

export default connect( null, { requestFeedSearch } )( QueryFeedSearch );
