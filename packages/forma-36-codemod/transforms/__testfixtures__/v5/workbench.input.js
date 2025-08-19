import {
  Workbench,
  WorkbenchHeader,
  WorkbenchSidebar,
  WorkbenchContent,
} from '@contentful/f36-workbench';
import { Button } from '@contentful/f36-button';

const action = (output) => {
  console.info(output);
}

<Workbench className="custom-workbench">
  <Workbench.Header
    title="Header Title"
    description='Header Description'
    icon={StarIcon}
    onBack={action('back button clicked!')}
    actions={
      <Button size="small" onClick={action('Workbench action clicked')}>
        Action
        </Button>
    }
  />
  <Workbench.Sidebar>Sidebar Content</Workbench.Sidebar>
  <Workbench.Content>Main Content</Workbench.Content>
</Workbench>;

<Workbench className="custom-workbench">
  <WorkbenchSidebar>Left Sidebar Content</WorkbenchSidebar>
  <WorkbenchSidebar position="right">Right Sidebar Content</WorkbenchSidebar>
  <WorkbenchContent>Main Content</WorkbenchContent>
</Workbench>;

<Workbench className="custom-workbench">
  <Workbench.Sidebar position="right">Right Sidebar Content</Workbench.Sidebar>
  <WorkbenchContent>Main Content</WorkbenchContent>
</Workbench>;