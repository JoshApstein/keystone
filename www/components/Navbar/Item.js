import React, { PropTypes } from 'react';
import Link from 'gatsby-link';
import theme from '../../theme';

export default function Item ({ title, url }) {
	return (
		<li css={styles.item} key={url}>
			<Link
				onlyActiveOnIndex
				css={styles.link}
				activeStyle={styles.link__active}
				to={url}
			>
				{title}
			</Link>
		</li>
	);
};

Item.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

/* eslint quote-props: ["error", "as-needed"] */
const styles = {
	// item
	item: {
		fontWeight: 300,
		margin: '0 0 2px',
		marginLeft: '20px',
	},
	link: {
		borderBottomRightRadius: 3,
		borderTopRightRadius: 3,
		color: 'white',
		display: 'block',
		padding: `0.5em 1rem`,
		textDecoration: 'none',
		transition: 'opacity 100ms',

		':hover': {
			backgroundColor: 'rgba(255, 255, 255, 0.1)',
		},
		[theme.breakpoint.largeUp]: {
			paddingLeft: `2rem`,
			paddingRight: `2rem`,
		},
	},
	link__active: {
		backgroundColor: theme.color.blue,
		opacity: 1,
	},
};
