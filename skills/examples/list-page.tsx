/**
 * List / Index Page — the most common Contentful screen pattern.
 * Shows a filterable, paginated table of content types.
 */
import {
  Layout,
  Header,
  Button,
  Table,
  TextInput,
  EntityStatusBadge,
  Menu,
  IconButton,
  Pagination,
  Stack,
  Flex,
  Paragraph,
  Heading,
  Skeleton,
} from '@contentful/f36-components';
import { PlusIcon, SearchIcon, MoreHorizontalIcon } from '@contentful/f36-icons';

function ContentTypesListPage() {
  return (
    <Layout
      variant="wide"
      header={
        <Layout.Header>
          <Header
            title="Content types"
            actions={
              <Button variant="primary" startIcon={<PlusIcon />}>
                Add content type
              </Button>
            }
            filters={
              <TextInput
                type="search"
                placeholder="Search content types"
                icon={<SearchIcon />}
              />
            }
          />
        </Layout.Header>
      }
    >
      <Layout.Body>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Cell>Name</Table.Cell>
              <Table.Cell>Fields</Table.Cell>
              <Table.Cell>Updated</Table.Cell>
              <Table.Cell>Status</Table.Cell>
              <Table.Cell width="60px" />
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Blog Post</Table.Cell>
              <Table.Cell>12</Table.Cell>
              <Table.Cell>2 hours ago</Table.Cell>
              <Table.Cell>
                <EntityStatusBadge entityStatus="published" />
              </Table.Cell>
              <Table.Cell>
                <Menu>
                  <Menu.Trigger>
                    <IconButton
                      icon={<MoreHorizontalIcon />}
                      aria-label="Actions"
                      variant="transparent"
                      size="small"
                    />
                  </Menu.Trigger>
                  <Menu.List>
                    <Menu.Item>Edit</Menu.Item>
                    <Menu.Item>Duplicate</Menu.Item>
                    <Menu.Divider />
                    <Menu.Item>Delete</Menu.Item>
                  </Menu.List>
                </Menu>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Flex justifyContent="center" marginTop="spacingL">
          <Pagination
            activePage={1}
            onPageChange={() => {}}
            totalItems={50}
            itemsPerPage={20}
          />
        </Flex>
      </Layout.Body>
    </Layout>
  );
}

/**
 * Empty state variant — shown when no content types exist yet.
 */
function ContentTypesEmptyState() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="spacing2Xl"
      style={{ minHeight: '400px' }}
    >
      <Heading marginBottom="spacingS">No content types yet</Heading>
      <Paragraph marginBottom="spacingL">
        Content types define the structure of your content. Start by adding your first one.
      </Paragraph>
      <Button variant="primary" startIcon={<PlusIcon />}>
        Add content type
      </Button>
    </Flex>
  );
}

/**
 * Loading state — shown while data is being fetched.
 */
function ContentTypesLoading() {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>Fields</Table.Cell>
          <Table.Cell>Updated</Table.Cell>
          <Table.Cell>Status</Table.Cell>
          <Table.Cell width="60px" />
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Skeleton.Row rowCount={5} columnCount={5} />
      </Table.Body>
    </Table>
  );
}

export { ContentTypesListPage, ContentTypesEmptyState, ContentTypesLoading };
