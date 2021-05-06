/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-danger-with-children */
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { Icon } from "components/Icon";

test("Test prop types - responsive styles", () => {
  render(
    <Icon
      animation={{ _: "ease-in" }}
      background={{ _: "#fff" }}
      backgroundColor={{ _: "#fff" }}
      bg={{ _: "#fff" }}
      backgroundImage={{ _: "url('https://via.placeholder.com/150')" }}
      backgroundSize={{ _: "cover" }}
      backgroundPosition={{ _: "center" }}
      backgroundAttachment={{ _: "fixed" }}
      backgroundClip={{ _: "padding-box" }}
      gradientFrom={{ _: "anolis-green-400" }}
      gradientVia={{ _: "anolis-gray-400" }}
      gradientTo={{ _: "anolis-blue-600" }}
      border={{ _: "anolis-green-400" }}
      opacity={{ _: "1" }}
      boxShadow={{ _: "0 0.25rem 1rem 0 rgba(6,18,39,0.15)" }}
      textShadow={{ _: "2px 2px #FF0000" }}
      row={{ _: true }}
      col={{ _: 1 / 2 }}
      alignItems={{ _: "center" }}
      alignContent={{ _: "center" }}
      justifyContent={{ _: "center" }}
      justifyItems={{ _: "center" }}
      flexWrap={{ _: "wrap" }}
      flexGrow={{ _: 1 }}
      flexShrink={{ _: 1 }}
      flexBasis={{ _: "1rem" }}
      flexDirection={{ _: "row" }}
      flex={{ _: "0 0 auto" }}
      justifySelf={{ _: "center" }}
      alignSelf={{ _: "center" }}
      order={{ _: 1 }}
      gap={{ _: "1rem" }}
      columnGap={{ _: "1rem" }}
      rowGap={{ _: "1rem" }}
      gridColumn={{ _: 1 }}
      gridRow={{ _: 1 }}
      gridAutoFlow={{ _: "row" }}
      gridAutoColumns={{ _: "auto" }}
      gridAutoRows={{ _: "auto" }}
      gridTemplateColumns={{ _: "100px 1fr" }}
      gridTemplateRows={{ _: "100px 1fr" }}
      gridTemplateAreas={{ _: "a b" }}
      gridArea={{ _: "a" }}
      appearance={{ _: "none" }}
      cursor={{ _: "wait" }}
      pointerEvents={{ _: "all" }}
      resize={{ _: "both" }}
      userSelect={{ _: "none" }}
      display={{ _: "grid" }}
      float={{ _: "left" }}
      boxSizing={{ _: "border-box" }}
      container={{ _: true }}
      overflow={{ _: "auto" }}
      overflowX={{ _: "auto" }}
      overflowY={{ _: "auto" }}
      zIndex={{ _: 10 }}
      top={{ _: "1rem" }}
      right={{ _: "1rem" }}
      left={{ _: "1rem" }}
      bottom={{ _: "1rem" }}
      visibility={{ _: "hidden" }}
      overscrollBehavior={{ _: "none" }}
      objectFit={{ _: "cover" }}
      w={{ _: "1rem" }}
      h={{ _: "1rem" }}
      maxWidth={{ _: "1rem" }}
      maxW={{ _: "1rem" }}
      maxHeight={{ _: "1rem" }}
      maxH={{ _: "1rem" }}
      minWidth={{ _: "1rem" }}
      minW={{ _: "1rem" }}
      minHeight={{ _: "1rem" }}
      minH={{ _: "1rem" }}
      margin={{ _: "1rem" }}
      m={{ _: "1rem" }}
      mx={{ _: "1rem" }}
      my={{ _: "1rem" }}
      padding={{ _: "1rem" }}
      p={{ _: "1rem" }}
      px={{ _: "1rem" }}
      py={{ _: "1rem" }}
      spaceX={{ _: "1rem" }}
      spaceY={{ _: "1rem" }}
      spaceXReverse={{ _: true }}
      spaceYReverse={{ _: true }}
      fill={{ _: "anolis-blue-600" }}
      stroke={{ _: "anolis-blue-600" }}
      borderCollapse={{ _: "collapse" }}
      tableLayout={{ _: "fixed" }}
      transform={{ _: true }}
      transformOrigin={{ _: "center" }}
      translateX={{ _: "1%" }}
      translateY={{ _: "1%" }}
      rotate={{ _: "1deg" }}
      skewX={{ _: 1 }}
      skewY={{ _: 1 }}
      scale={{ _: 1 }}
      scaleX={{ _: 1 }}
      scaleY={{ _: 1 }}
      transition={{ _: "all 300ms ease" }}
      transitionProperty={{ _: "all" }}
      transitionDuration={{ _: "100ms" }}
      transitionTimingFunction={{ _: "ease-in" }}
      transitionDelay={{ _: "100ms" }}
      fontFamily={{ _: "sans" }}
      fontSize={{ _: "1rem" }}
      lineHeight={{ _: "1.2rem" }}
      fontWeight={{ _: 700 }}
      fontStyle={{ _: "italic" }}
      letterSpacing={{ _: "1px" }}
      color={{ _: "anolis-blue-600" }}
      textTransform={{ _: "uppercase" }}
      textDecoration={{ _: "underline" }}
      textAlign={{ _: "left" }}
      verticalAlign={{ _: "middle" }}
      whiteSpace={{ _: "nowrap" }}
      textOverflow={{ _: "ellipsis" }}
      listStyleType={{ _: "disc" }}
      listStylePosition={{ _: "inside" }}
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
