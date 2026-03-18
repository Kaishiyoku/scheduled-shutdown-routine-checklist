import * as Headless from '@headlessui/react';
import React, { forwardRef } from 'react';
import {Link as RouterLink, LinkProps, To as LinkTo} from 'react-router';

export const Link = forwardRef(function Link(
    {href, ...props}: {href: LinkTo} & Omit<LinkProps, 'to'> & React.ComponentPropsWithoutRef<'a'>,
	ref: React.ForwardedRef<HTMLAnchorElement>,
) {
	return (
		<Headless.DataInteractive>
			<RouterLink {...props} to={href} ref={ref} />
		</Headless.DataInteractive>
	);
});
