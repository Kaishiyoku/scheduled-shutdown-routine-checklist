import * as Headless from '@headlessui/react';
import type React from 'react';
import { forwardRef } from 'react';
import {
	NavLink as RouterNavLink,
	type LinkProps,
	type To as LinkTo,
} from 'react-router';

export const Link = forwardRef(function Link(
	{
		href,
		...props
	}: { href: LinkTo } & Omit<LinkProps, 'to'> &
		React.ComponentPropsWithoutRef<'a'>,
	ref: React.ForwardedRef<HTMLAnchorElement>,
) {
	return (
		<Headless.DataInteractive>
			<RouterNavLink {...props} to={href} ref={ref} />
		</Headless.DataInteractive>
	);
});
