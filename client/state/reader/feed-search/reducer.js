/**
 * External dependencies
 */
import { createReducer, keyedReducer } from 'state/utils';

/**
 * Internal dependencies
 */
import { READER_FEED_SEARCH_RECEIVE } from 'state/action-types';

/**
 * Tracks mappings between queries --> feed results
 * Here is what the state tree may look like:
 * feedsearch: {
		items: {
			'wordpress tavern': [ feed1, feed2, ],
			...
		},
	}
 *
 * @param  {Array} state  Current state
 * @param  {Object} action Action payload
 * @return {Array}        Updated state
 */
export const items = keyedReducer( 'query', createReducer( [], {
	[ READER_FEED_SEARCH_RECEIVE ]: ( state, action ) => state.concat( action.payload )
} ) );

export default items;
