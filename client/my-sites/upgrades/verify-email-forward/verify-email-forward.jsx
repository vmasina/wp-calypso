/**
 * External Dependencies
 */

import React from 'react';
import { localize } from 'i18n-calypso';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import DocumentHead from 'components/data/document-head';
import Main from 'components/main';
import SectionHeader from 'components/section-header';
import Card from 'components/card';
import FormButton from 'components/forms/form-button';

class VerifyEmailForward extends React.Component {
	render() {
		const { translate, mailbox, destination } = this.props;
		return (
			<Main wideLayout>
				<DocumentHead title={ translate( 'Verify Email Forwarding', { context: 'Header' } ) } />
				<SectionHeader label={ translate( 'Verify Email Forwarding', { context: 'Header' } ) } />
				<Card>
					<p>
						{ translate(
							'We will forward all emails arriving to {{strong}}%(inboxEmail)s{{/strong}} ' +
							'to {{strong}}%(destinationEmail)s{{/strong}}.', {
								args: {
									inboxEmail: mailbox,
									destinationEmail: destination
								},
								components: {
									strong: <strong />
								}
							} ) }
					</p>
					<FormButton>
						{ translate( 'Continue' ) }
					</FormButton>
					<FormButton isPrimary={ false }>
						{ translate( 'Cancel' ) }
					</FormButton>
				</Card>
			</Main>
		);
	}
}

export default connect()( localize( VerifyEmailForward ) );
