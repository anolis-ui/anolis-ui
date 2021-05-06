/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-danger-with-children */
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { Icon } from "components/Icon";

test("Test prop types - responsive styles", () => {
  render(
    <Icon
      animation={{ _: "ease-in" }}
      background={{ _: "white" }}
      backgroundColor={{ _: "white" }}
      bg={{ _: "white" }}
      backgroundImage={{ _: "white" }}
      backgroundSize={{ _: "white" }}
      backgroundPosition={{ _: "white" }}
      backgroundAttachment={{ _: "white" }}
      backgroundClip={{ _: "white" }}
      gradientFrom={{ _: "white" }}
      gradientVia={{ _: "white" }}
      gradientTo={{ _: "white" }}
      border={{ _: "anolis-green-400" }}
      opacity={{ _: "ease-in" }}
      boxShadow={{ _: "ease-in" }}
      textShadow={{ _: "ease-in" }}
      row={{ _: "ease-in" }}
      col={{ _: "ease-in" }}
      alignItems={{ _: "ease-in" }}
      alignContent={{ _: "ease-in" }}
      justifyContent={{ _: "ease-in" }}
      justifyItems={{ _: "ease-in" }}
      flexWrap={{ _: "ease-in" }}
      flexGrow={{ _: "ease-in" }}
      flexShrink={{ _: "ease-in" }}
      flexBasis={{ _: "ease-in" }}
      flexDirection={{ _: "ease-in" }}
      flex={{ _: "ease-in" }}
      justifySelf={{ _: "ease-in" }}
      alignSelf={{ _: "ease-in" }}
      order={{ _: "ease-in" }}
      gap={{ _: "ease-in" }}
      columnGap={{ _: "ease-in" }}
      rowGap={{ _: "ease-in" }}
      gridColumn={{ _: "ease-in" }}
      gridRow={{ _: "ease-in" }}
      gridAutoFlow={{ _: "ease-in" }}
      gridAutoColumns={{ _: "ease-in" }}
      gridAutoRows={{ _: "ease-in" }}
      gridTemplateColumns={{ _: "ease-in" }}
      gridTemplateRows={{ _: "ease-in" }}
      gridTemplateAreas={{ _: "ease-in" }}
      gridArea={{ _: "ease-in" }}
      appearance={{ _: "ease-in" }}
      cursor={{ _: "ease-in" }}
      pointerEvents={{ _: "ease-in" }}
      resize={{ _: "ease-in" }}
      userSelect={{ _: "ease-in" }}
      display={{ _: "ease-in" }}
      float={{ _: "ease-in" }}
      boxSizing={{ _: "ease-in" }}
      container={{ _: "ease-in" }}
      overflow={{ _: "ease-in" }}
      overflowX={{ _: "ease-in" }}
      overflowY={{ _: "ease-in" }}
      zIndex={{ _: "ease-in" }}
      top={{ _: "ease-in" }}
      right={{ _: "ease-in" }}
      left={{ _: "ease-in" }}
      bottom={{ _: "ease-in" }}
      visibility={{ _: "ease-in" }}
      overscrollBehavior={{ _: "ease-in" }}
      objectFit={{ _: "ease-in" }}
      w={{ _: "ease-in" }}
      h={{ _: "ease-in" }}
      maxWidth={{ _: "ease-in" }}
      maxW={{ _: "ease-in" }}
      maxHeight={{ _: "ease-in" }}
      maxH={{ _: "ease-in" }}
      minWidth={{ _: "ease-in" }}
      minW={{ _: "ease-in" }}
      minHeight={{ _: "ease-in" }}
      minH={{ _: "ease-in" }}
      margin={{ _: "ease-in" }}
      m={{ _: "ease-in" }}
      mx={{ _: "ease-in" }}
      my={{ _: "ease-in" }}
      padding={{ _: "ease-in" }}
      p={{ _: "ease-in" }}
      px={{ _: "ease-in" }}
      py={{ _: "ease-in" }}
      spaceX={{ _: "ease-in" }}
      spaceY={{ _: "ease-in" }}
      spaceXReverse={{ _: "ease-in" }}
      spaceYReverse={{ _: "ease-in" }}
      fill={{ _: "ease-in" }}
      stroke={{ _: "ease-in" }}
      borderCollapse={{ _: "ease-in" }}
      tableLayout={{ _: "ease-in" }}
      transform={{ _: "ease-in" }}
      transformOrigin={{ _: "ease-in" }}
      translateX={{ _: "ease-in" }}
      translateY={{ _: "ease-in" }}
      rotate={{ _: "ease-in" }}
      skewX={{ _: "ease-in" }}
      skewY={{ _: "ease-in" }}
      scale={{ _: "ease-in" }}
      scaleX={{ _: "ease-in" }}
      scaleY={{ _: "ease-in" }}
      transition={{ _: "ease-in" }}
      transitionProperty={{ _: "ease-in" }}
      transitionDuration={{ _: "ease-in" }}
      transitionTimingFunction={{ _: "ease-in" }}
      transitionDelay={{ _: "ease-in" }}
      fontFamily={{ _: "ease-in" }}
      fontSize={{ _: "ease-in" }}
      lineHeight={{ _: "ease-in" }}
      fontWeight={{ _: "ease-in" }}
      fontStyle={{ _: "ease-in" }}
      letterSpacing={{ _: "ease-in" }}
      color={{ _: "anolis-blue-600" }}
      textTransform={{ _: "ease-in" }}
      textDecoration={{ _: "ease-in" }}
      textAlign={{ _: "ease-in" }}
      verticalAlign={{ _: "ease-in" }}
      whiteSpace={{ _: "ease-in" }}
      textOverflow={{ _: "ease-in" }}
      listStyleType={{ _: "ease-in" }}
      listStylePosition={{ _: "ease-in" }}
    >
      Test
    </Icon>);

  expect(screen.getByText("Test")).toBeInTheDocument();
});

test("Test prop types - common attributes", () => {
  render(
    <Icon
      // React-specific Attributes
      defaultChecked={false}
      defaultValue="AAAAA"
      suppressContentEditableWarning={false}
      suppressHydrationWarning={false}
      // Standard HTML Attributes
      accessKey="test"
      className="test"
      contentEditable={false}
      contextMenu="test"
      dir="ltr"
      draggable={false}
      hidden={false}
      id="test"
      lang="cs"
      placeholder="test"
      slot="test"
      spellCheck
      style={{ color: "gray" }}
      tabIndex={0}
      title="title"
      translate="no"
      // Unknown
      radioGroup="unknown"
      // WAI-ARIA
      role="img"
      // RDFa Attributes
      about="string"
      datatype="string"
      inlist="any"
      prefix="string"
      property="string"
      resource="string"
      typeof="string"
      vocab="string"
      // Non-standard Attributes
      autoCapitalize="on"
      autoCorrect="string"
      autoSave="string"
      itemProp="string"
      itemScope={false}
      itemType="string"
      itemID="string"
      itemRef="string"
      results={9}
      security="string"
      unselectable="off"
      inputMode="none"
      is="test"
      // AriaAttributes
      aria-activedescendant="test"
      aria-atomic={false}
      aria-autocomplete="none"
      aria-busy="true"
      aria-checked={false}
      aria-colcount={5}
      aria-colindex={1}
      aria-colspan={2}
      aria-controls="test"
      aria-current={false}
      aria-describedby="test"
      aria-details="test"
      aria-disabled="false"
      aria-errormessage="test"
      aria-expanded={false}
      aria-flowto="test"
      aria-aria-haspopup={false}
      aria-hidden="false"
      aria-keyshortcuts="test"
      aria-label="test"
      aria-labelledby="test"
      aria-level={5}
      aria-live="off"
      aria-modal={false}
      aria-multiline={false}
      aria-multiselectable={false}
      aria-orientation="horizontal"
      aria-owns="test"
      aria-placeholder="test"
      aria-posinset={5}
      aria-pressed="false"
      aria-readonly
      aria-relevant="additions"
      aria-required="true"
      aria-roledescription="test"
      aria-rowcount={5}
      aria-rowindex={3}
      aria-rowspan={1}
      aria-selected={false}
      aria-setsize={5}
      aria-sort="none"
      aria-valuemax={10}
      aria-valuemin={1}
      aria-valuenow={5}
      aria-valuetext="AAAAAA"
      // DOM Attributes
      dangerouslySetInnerHTML={{ __html: "AAAAA" }}
      // TODO: on* props
    >
      Test
    </Icon>);

  expect(screen.getByText("Test")).toBeInTheDocument();
});
