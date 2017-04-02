/**
 * External dependencies
 */
import React from 'react';
import { connect } from 'react-redux';
import Gridicon from 'gridicons';

/**
 * Internal dependencies
 */
import {
	showRequestForm as showMagicLoginRequestForm,
} from 'state/login/magic-login/actions';
import {
	emailAddressFormInput,
	isShowingRequestPage as isShowingMagicLoginRequestPage,
	isShowingExpiredPage as isShowingMagicLoginExpiredPage,
	isShowingCheckYourEmailPage,
} from 'state/login/magic-login/selectors';
import { getCurrentQueryArguments } from 'state/ui/selectors';
import Main from 'components/main';
import LoginBlock from 'blocks/login';
import RequestLoginEmailForm from 'auth/request-login-email-form';
import HandleEmailedLinkForm from 'auth/handle-emailed-link-form';
import EmailedLoginLinkSuccessfully from 'auth/emailed-login-link-successfully';
import EmailedLoginLinkExpired from 'auth/emailed-login-link-expired';
import { isEnabled } from 'config';
import { localize } from 'i18n-calypso';

class Login extends React.Component {
	headerContent() {
		const { translate } = this.props;

		// @TODO show currently logged in user if any
		return (
			<div>
				<Gridicon icon="user-circle" size={ 72 } />
				<div>{ translate( 'You are signed out' ) }</div>
			</div>
		);
	}

	mainContent() {
		const {
			handlingMagicLink,
			magicLoginEmailAddress,
			showingCheckYourEmailPage,
			showingMagicLoginExpiredPage,
			showingMagicLoginRequestForm,
			translate,
		} = this.props;

		if ( showingMagicLoginExpiredPage ) {
			return <EmailedLoginLinkExpired />;
		}

		if ( handlingMagicLink ) {
			return <HandleEmailedLinkForm />;
		}

		if ( showingCheckYourEmailPage ) {
			return <EmailedLoginLinkSuccessfully emailAddress={ magicLoginEmailAddress } />;
		}

		if ( showingMagicLoginRequestForm ) {
			return <RequestLoginEmailForm />;
		}

		return <LoginBlock title={ translate( 'Sign in to WordPress.com' ) } />;
	}

	footerContent() {
		const {
			handlingMagicLink,
			showingCheckYourEmailPage,
			showingMagicLoginRequestForm,
			translate,
		} = this.props;

		if ( ! (
			handlingMagicLink ||
			showingCheckYourEmailPage ||
			showingMagicLoginRequestForm
		) ) {
			return <a href="#" onClick={ this.props.onMagicLoginRequestClick }>{ translate( 'Email me a login link' ) }</a>;
		}
	}

	render() {
		return (
			<Main className="wp-login">
				<div className="wp-login__header">
					{ this.headerContent() }
				</div>
				<div className="wp-login__container">
					{ this.mainContent() }
				</div>
				<div className="wp-login__footer">
					{ this.footerContent() }
				</div>
			</Main>
		);
	}
}

const mapState = state => {
	const magicLoginEnabled = isEnabled( 'magic-login' );
	const queryArguments = getCurrentQueryArguments( state );

	const {
		action,
		client_id: clientId,
		email,
		token,
		tt: tokenTime,
	} = queryArguments;

	return {
		handlingMagicLink: (
			magicLoginEnabled &&
			action === 'handleLoginEmail' &&
			clientId &&
			email &&
			token &&
			tokenTime
		),
		magicLoginEmailAddress: emailAddressFormInput( state ),
		showingMagicLoginExpiredPage: magicLoginEnabled && isShowingMagicLoginExpiredPage( state ),
		showingMagicLoginRequestForm: magicLoginEnabled && isShowingMagicLoginRequestPage( state ),
		showingCheckYourEmailPage: magicLoginEnabled && isShowingCheckYourEmailPage( state ),
	};
};

const mapDispatch = dispatch => {
	return {
		onMagicLoginRequestClick: event => {
			event.preventDefault();
			dispatch( showMagicLoginRequestForm() );
		}
	};
};

export default connect( mapState, mapDispatch )( localize( Login ) );
