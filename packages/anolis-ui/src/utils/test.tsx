import AnolisProvider from "components/AnolisProvider";
import { defaultTheme } from "defaultTheme";
import { emptyTheme } from "theme";
import { FC, ReactElement } from "react";
import { Queries, queries, render, RenderOptions } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import renderer from "react-test-renderer";

expect.extend(toHaveNoViolations);

const Providers: FC = ({ children }) => {
  return (
    <AnolisProvider xstyledTheme={defaultTheme} theme={emptyTheme}>
      {children}
    </AnolisProvider>
  );
};

export const customRender = <
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement
>(ui: ReactElement, options?: RenderOptions<Q, Container>) => render(ui, { wrapper: Providers, ...options });

export const testA11y = async (ui: ReactElement) => {
  const { container } = customRender(ui);

  expect(await axe(container)).toHaveNoViolations();
};

export const testSnapshotMatch = (ui: ReactElement) => {
  const tree = renderer.create(
    <AnolisProvider xstyledTheme={defaultTheme} theme={emptyTheme}>
      {ui}
    </AnolisProvider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
};

export * from "@testing-library/react";

export { customRender as render };
