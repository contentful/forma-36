import { Accordion as OriginalAccordion } from './Accordion';
import { AccordionItem } from './AccordionItem/AccordionItem';

type CompoundAccordion = typeof OriginalAccordion & {
  Item: typeof AccordionItem;
};

export const Accordion = OriginalAccordion as CompoundAccordion;
Accordion.Item = AccordionItem;
