import { InlineEntryCard } from "@contentful/forma-36-react-components";
const isSelected = true;
<InlineEntryCard
  title="Some title"
  selected={isSelected}
  isLoading={true}
  href=""
  status="archived"
  onClick={() => {}}
  cardDragHandleComponent={<div />}
  dropdownListElements={<><span /></>}
>
  Inline card text
</InlineEntryCard>;
