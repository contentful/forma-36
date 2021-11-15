import React from "react";

import { Table } from "@contentful/f36-components";

<Table layout="embedded">
  <Table.Head>
    <Table.Row>
      <Table.Cell>Name</Table.Cell>
      <Table.Cell>Email</Table.Cell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row isSelected>
      <Table.Cell>Jane Roe</Table.Cell>
      <Table.Cell>jane@roe.com</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>John Doe</Table.Cell>
      <Table.Cell>john@doe.com</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
