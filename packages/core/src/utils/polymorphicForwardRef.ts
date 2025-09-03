import React from 'react';
import type { PolymorphicComponent } from '../Primitive/Primitive';
import type { PolymorphicProps } from '../Primitive/Primitive';

// Local copy of the internal ref-enabled props helper so we don't have to export it publicly.
type Overwrite<T, U> = Omit<T, keyof U> & U;
type PropsWithAs<P, E extends React.ElementType> = P & { as?: E };
type PolymorphicPropsWithRef<
	P,
	E extends React.ElementType,
	OmitAdditionalProps extends keyof any = never,
> = PropsWithAs<
	Overwrite<Omit<React.ComponentPropsWithRef<E>, OmitAdditionalProps>, P>,
	E
>;

/**
 * polymorphicForwardRef
 * A typed wrapper around React.forwardRef that preserves a polymorphic (<E extends ElementType>) call signature.
 * Runtime is identical to React.forwardRef; this only improves TypeScript inference for the `as` prop + ref.
 */
export function polymorphicForwardRef<
	P,
	D extends React.ElementType,
	OmitAdditionalProps extends keyof any = never,
>(
	render: <E extends React.ElementType = D>(
		props: PolymorphicPropsWithRef<P, E, OmitAdditionalProps>,
		ref: React.ComponentPropsWithRef<E>['ref'],
	) => React.ReactElement | null,
): PolymorphicComponent<P, D, OmitAdditionalProps> {
	// We intentionally cast because React.forwardRef erases the generic call signature.
	return React.forwardRef(render as any) as unknown as PolymorphicComponent<
		P,
		D,
		OmitAdditionalProps
	>;
}

// Re-export supporting public prop type for convenience (without ref) so users can build their own wrappers if needed.
export type { PolymorphicProps };
