/**
 * External dependencies
 */
import dispatcher from 'dispatcher';

/**
 * Internal dependencies
 */
import { action as ActionTypes } from 'lib/olark-store/constants';
import config from 'config';

/**
 * Module variables
 */
const olarkActions = {
	setUserEligibility( isUserEligible ) {
		dispatcher.handleServerAction( {
			isUserEligible,
			type: ActionTypes.OLARK_USER_ELIGIBILITY,
		} );
	},

	setLocale( locale ) {
		dispatcher.handleServerAction( {
			locale,
			type: ActionTypes.OLARK_LOCALE,
		} );
	},

	setReady() {
		dispatcher.handleServerAction( {
			type: ActionTypes.OLARK_READY
		} );
	},

	setOperatorsAvailable() {
		dispatcher.handleServerAction( {
			type: ActionTypes.OLARK_OPERATORS_AVAILABLE
		} );
	},

	setOperatorsAway() {
		dispatcher.handleServerAction( {
			type: ActionTypes.OLARK_OPERATORS_AWAY
		} );
	},

	setClosed( isSupportClosed ) {
		dispatcher.handleServerAction( {
			isSupportClosed,
			type: ActionTypes.OLARK_SET_CLOSED
		} );
	},

	setExpanded( isOlarkExpanded ) {
		dispatcher.handleServerAction( {
			isOlarkExpanded,
			type: ActionTypes.OLARK_SET_EXPANDED
		} );
	},

	olarkApiDeprecated() {
		if ( config( 'env' ) === 'development' ) {
			throw new Error( 'olarkApi methods are deprecated with no alternative' );
		}
	},

	updateDetails() {
		this.olarkApiDeprecated();
	},

	sendNotificationToVisitor() {
		this.olarkApiDeprecated();
	},

	sendNotificationToOperator() {
		this.olarkApiDeprecated();
	},

	expandBox() {
		this.olarkApiDeprecated();
	},

	shrinkBox() {
		this.olarkApiDeprecated();
	},

	hideBox() {
		this.olarkApiDeprecated();
	},

	focusBox() {
		if ( ! document ) {
			return;
		}

		const chatInput = document.querySelector( '#habla_wcsend_input' );
		chatInput && chatInput.focus();
	}
};

export default olarkActions;

