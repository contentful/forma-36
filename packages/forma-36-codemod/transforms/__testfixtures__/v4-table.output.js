import React from "react";

import { Table, TableBody, TableRow, TableCell, TableHead } from "@contentful/f36-components";

<Table layout="embedded">
  <TableHead>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Email</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow isSelected>
      <TableCell>Jane Roe</TableCell>
      <TableCell>jane@roe.com</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@doe.com</TableCell>
    </TableRow>
  </TableBody>
</Table>
