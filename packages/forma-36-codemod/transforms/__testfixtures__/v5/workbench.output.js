import {
  Layout
} from '@contentful/f36-layout';

import {Header} from '@contentful/f36-header';

<Layout className="custom-workbench"
  header={
    <Layout.Header>
      <Header
          title="Header Title"
          metadata='Header Description'
          backButtonProps={{onClick: action('back button clicked!')}}
          actions={
            <Button size="small" onClick={action('Workbench action clicked')}>
              Action
            </Button>
          }
          />
    </Layout.Header>
  }
  leftSidebar = {<Layout.Sidebar>Sidebar Content</Layout.Sidebar>}
>  
  <Layout.Body>Main Content</Layout.Body>
</Layout>;

<Layout className="custom-workbench"
  leftSidebar= {<Layout.Sidebar>Left Sidebar Content</Layout.Sidebar>}
  rightSidebar={<Layout.Sidebar>Right Sidebar Content</Layout.Sidebar>}
>
  <Layout.Body>Main Content</Layout.Body>
</Layout>;

<Layout className="custom-workbench"
  rightSidebar={<Layout.Sidebar>Right Sidebar Content</Layout.Sidebar>}
>
  <Layout.Body>Main Content</Layout.Body>
</Layout>