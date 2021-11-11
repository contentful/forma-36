import { EntryCard } from "@contentful/f36-components";
const isSelected = true;
<EntryCard
  as="a"
  type="archive"
  title="Some title"
  isSelected={isSelected}
  href=""
  status="archived"
  onClick={() => {}}
  withDragHandle={true}
  dropdownListElements={<><span /></>}
  size="default" />;
<EntryCard
  type="archive"
  title="Some title"
  isSelected={isSelected}
  status="archived"
  onClick={() => {}}
  withDragHandle={true}
  dropdownListElements={<><span /></>}
  size="default" />;
