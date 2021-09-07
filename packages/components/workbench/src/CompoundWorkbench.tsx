import { Workbench as OriginalWorkbench } from './Workbench';
import { WorkbenchHeader } from './WorkbenchHeader';
import { WorkbenchContent } from './WorkbenchContent';
import { WorkbenchSidebar } from './WorkbenchSidebar';

type CompoundWorkbench = typeof OriginalWorkbench & {
  Header?: typeof WorkbenchHeader;
  Content?: typeof WorkbenchContent;
  Sidebar?: typeof WorkbenchSidebar;
};

export const Workbench = OriginalWorkbench as CompoundWorkbench;
Workbench.Header = WorkbenchHeader;
Workbench.Content = WorkbenchContent;
Workbench.Sidebar = WorkbenchSidebar;
