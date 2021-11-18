import { InlineEntryCard } from "@contentful/f36-components";
const isSelected = true;
<InlineEntryCard
  as="a"
  title="Some title"
  isSelected={isSelected}
  isLoading={true}
  href=""
  status="archived"
  onClick={() => {}}
  cardDragHandleComponent={<div />}
  dropdownListElements={<><span /></>}>
  Inline card text
</InlineEntryCard>;

