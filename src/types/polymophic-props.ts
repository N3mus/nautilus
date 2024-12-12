import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
} from "react";

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicProps<
  C extends ElementType,
  Props = {}
> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicRef<C extends ElementType> = {
  ref?: ComponentPropsWithRef<C>["ref"];
};

export type PolymorphicPropsWithRef<
  C extends ElementType,
  Props = {}
> = PolymorphicProps<C, Props> & PolymorphicRef<C>;
