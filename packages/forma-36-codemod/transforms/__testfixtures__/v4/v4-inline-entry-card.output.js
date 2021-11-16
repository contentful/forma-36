import { InlineEntryCard } from "@contentful/f36-components";
const isSelected = true;
<InlineEntryCard
  title="Some title"
  isSelected={isSelected}
  isLoading={true}
  as={'a'}
  href=""
  status="archived"
  onClick={() => {}}
  cardDragHandleComponent={<div />}
  dropdownListElements={<><span /></>}
>
  Inline card text
</InlineEntryCard>;

