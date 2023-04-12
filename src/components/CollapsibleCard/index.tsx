import React, { useState } from "react";
import { Collapsible, IconButton, Icon, Card } from "@edx/paragon";
import { KeyboardArrowUp, KeyboardArrowDown } from "@edx/paragon/icons";
import { arrayOf, shape, string, node, bool } from "prop-types";

const useFullCard = (hasExpandableTextArea: boolean) => {
  const [isCardCollapsibleOpen, setIsCardCollapsibleOpen] = useState(
    hasExpandableTextArea
  );
  return {
    isCardCollapsibleOpen,
    toggleCardCollapse: () => {
      if (hasExpandableTextArea) {
        setIsCardCollapsibleOpen(true);
      } else {
        setIsCardCollapsibleOpen(!isCardCollapsibleOpen);
      }
    },
  };
};

export const CollapsibleCard = ({
  title,
  className,
  extraSections,
  children,
  summary,
  hasExpandableTextArea,
  none,
}) => {
  const { isCardCollapsibleOpen, toggleCardCollapse } = useFullCard(
    hasExpandableTextArea
  );

  return (
    <Card
      className={`${className} settingsOption border border-light-700 shadow-none`}
    >
      <Card.Section
        className="settingsCardTitleSection"
        key={`settingsOption-${title}-header`}
      >
        <div className="d-flex">
          <span className="flex-grow-1 text-primary-500 x-small">{title}</span>
          <IconButton
            variant="secondary"
            size="inline"
            src={isCardCollapsibleOpen ? KeyboardArrowUp : KeyboardArrowDown}
            iconAs={Icon}
            alt={`${isCardCollapsibleOpen ? "Hide" : "Show"} content`}
            invertColors
            isActive
            onClick={() => toggleCardCollapse()}
          />
        </div>
      </Card.Section>
      <Collapsible.Advanced open={!isCardCollapsibleOpen}>
        <Collapsible.Body>
          <Card.Section className="px-4 pb-4 pt-3">
            <span
              className={`small ${none ? "text-gray-500" : "text-primary-500"}`}
            >
              {summary}
            </span>
          </Card.Section>
        </Collapsible.Body>
      </Collapsible.Advanced>
      <Collapsible.Advanced open={isCardCollapsibleOpen}>
        <Collapsible.Body>
          <Card.Section className="px-4 pb-4 pt-3">
            <span
              className={`small ${none ? "text-gray-500" : "text-primary-500"}`}
            >
              {children}
            </span>
          </Card.Section>
          {extraSections.map((section, index) => (
            <>
              {isCardCollapsibleOpen && <hr />}
              {/* eslint-disable-next-line react/no-array-index-key */}
              <Card.Section className="px-4 pb-4 pt-3">
                {section.children}
              </Card.Section>
            </>
          ))}
        </Collapsible.Body>
      </Collapsible.Advanced>
    </Card>
  );
};
CollapsibleCard.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
  className: string,
  summary: string.isRequired,
  extraSections: arrayOf(
    shape({
      children: node,
    })
  ),
  hasExpandableTextArea: bool,
};
CollapsibleCard.defaultProps = {
  className: "",
  extraSections: [],
  hasExpandableTextArea: false,
};
