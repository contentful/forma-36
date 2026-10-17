import {
  Box,
  Flex,
  Header,
  Button,
  Table,
  TextInput,
  EntityStatusBadge,
  Menu,
  IconButton,
  Pagination,
  Text,
} from '@contentful/f36-components';
// Navbar is a separate package — not in f36-components
import { Navbar } from '@contentful/f36-navbar';
import {
  PlusIcon,
  MagnifyingGlassIcon,
  DotsThreeIcon,
  PenNibIcon,
  ImageSquareIcon,
  SparkleIcon,
  GlobeIcon,
  GearSixIcon,
  TreeStructureIcon,
  TagIcon,
} from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';

// Full app shell: Navbar (60px) + sidebar (280px) + content area
// Only include structural elements the design shows — see base-shell.md
function AppShellExample() {
  return (
    <Box
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      {/* Navbar from @contentful/f36-navbar — never hand-build with Flex/Box */}
      {/* Requires global box-sizing: border-box or it renders 92px instead of 60px */}
      <Navbar
        mainNavigation={
          <>
            <Navbar.Item title="Content model" icon={<PenNibIcon />} />
            <Navbar.Item title="Content" icon={<ImageSquareIcon />} isActive />
            <Navbar.Item title="Experiences" icon={<SparkleIcon />} />
            <Navbar.Item title="Media" icon={<GlobeIcon />} />
            <Navbar.Item title="Apps">
              <Navbar.MenuItem title="Installed apps" />
              <Navbar.MenuItem title="Marketplace" />
            </Navbar.Item>
          </>
        }
        switcher={
          <Navbar.Switcher
            space="Acme Corp"
            environment="Production"
            envVariant="master"
          />
        }
        account={
          <Navbar.Account
            username="Conny Contentful"
            initials="CC"
            label="Account"
          >
            <Navbar.MenuItem title="Account settings" />
            <Navbar.MenuDivider />
            <Navbar.MenuItem title="Log out" />
          </Navbar.Account>
        }
      />

      <Flex style={{ flex: 1 }}>
        {/* Sidebar: 280px default, flexShrink: 0, top-left border-radius 12px */}
        <Box
          style={{
            width: '280px',
            flexShrink: 0,
            backgroundColor: tokens.colorWhite,
            borderRadius: '12px 0 0 0',
            padding: '24px 12px 8px',
          }}
        >
          {/* Section title: 12px, weight 600, gray700 */}
          <Text
            style={{
              fontSize: tokens.fontSizeS,
              fontWeight: tokens.fontWeightDemiBold,
              color: tokens.gray700,
              display: 'block',
              height: '28px',
              paddingLeft: tokens.spacingM,
            }}
          >
            Content
          </Text>

          <Flex flexDirection="column" style={{ gap: tokens.spacing2Xs }}>
            {/* Active nav item: blue100 background, 34px tall, 4px radius */}
            <Flex
              alignItems="center"
              style={{
                height: '34px',
                padding: `${tokens.spacing2Xs} ${tokens.spacingS}`,
                gap: tokens.spacingXs,
                borderRadius: tokens.borderRadiusSmall,
                backgroundColor: tokens.blue100,
                cursor: 'pointer',
              }}
            >
              <ImageSquareIcon size="small" />
              <Text style={{ color: tokens.gray900 }}>Entries</Text>
            </Flex>

            <Flex
              alignItems="center"
              style={{
                height: '34px',
                padding: `${tokens.spacing2Xs} ${tokens.spacingS}`,
                gap: tokens.spacingXs,
                borderRadius: tokens.borderRadiusSmall,
                cursor: 'pointer',
              }}
            >
              <TreeStructureIcon size="small" />
              <Text style={{ color: tokens.gray900 }}>Content types</Text>
            </Flex>

            <Flex
              alignItems="center"
              style={{
                height: '34px',
                padding: `${tokens.spacing2Xs} ${tokens.spacingS}`,
                gap: tokens.spacingXs,
                borderRadius: tokens.borderRadiusSmall,
                cursor: 'pointer',
              }}
            >
              <TagIcon size="small" />
              <Text style={{ color: tokens.gray900 }}>Tags</Text>
            </Flex>
          </Flex>
        </Box>

        {/* Content area: flex 1, 12px top padding, 24px horizontal */}
        <Box
          style={{
            flex: 1,
            backgroundColor: tokens.colorWhite,
            borderRadius: '12px 12px 0 0',
            padding: `${tokens.spacingS} ${tokens.spacingL} 0`,
          }}
        >
          {/* Header with title + primary action */}
          <Header
            title="Entries"
            actions={
              <Button variant="primary" size="small" startIcon={<PlusIcon />}>
                Add entry
              </Button>
            }
            filters={
              <TextInput
                type="search"
                placeholder="Search entries"
                icon={<MagnifyingGlassIcon />}
              />
            }
          />

          {/* Table: full width, no horizontal padding, 36px header rows, 56px body rows */}
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.Cell>Name</Table.Cell>
                <Table.Cell>Content type</Table.Cell>
                <Table.Cell>Updated</Table.Cell>
                <Table.Cell>Status</Table.Cell>
                <Table.Cell width="60px" />
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Homepage banner</Table.Cell>
                <Table.Cell>Banner</Table.Cell>
                <Table.Cell>2 hours ago</Table.Cell>
                <Table.Cell>
                  <EntityStatusBadge entityStatus="published" />
                </Table.Cell>
                <Table.Cell>
                  <Menu>
                    <Menu.Trigger>
                      <IconButton
                        icon={<DotsThreeIcon />}
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
        </Box>
      </Flex>
    </Box>
  );
}

export { AppShellExample };
