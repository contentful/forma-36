import { AssetCard } from "@contentful/f36-components";
const isSelected = true;
<AssetCard
  as="a"
  type="archive"
  title="Some title"
  isSelected={isSelected}
  href=""
  status="archived"
  src=""
  onClick={() => {}}
  withDragHandle={true}
  dropdownListElements={<><span /></>}
  size="default" />;

<AssetCard as="a" size="default" isLoading title="" src="" href="" />;
