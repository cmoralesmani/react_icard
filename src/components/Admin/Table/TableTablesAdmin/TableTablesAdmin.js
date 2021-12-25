import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";

import "./TableTablesAdmin.scss";

export function TableTablesAdmin(props) {
  const { tables } = props;
  return (
    <Table className="table-tables-admin">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Number</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {map(tables, (table, index) => (
          <Table.Row key={index}>
            <Table.Cell>{table.number}</Table.Cell>
            <Actions table={table} />
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

function Actions(props) {
  const { table, onDelete } = props;
  return (
    <Table.Cell textAlign="right">
      <Button icon onClick={() => console.log("Editando")}>
        <Icon name="pencil" />
      </Button>
      <Button icon negative onClick={() => console.log("Eliminado")}>
        <Icon name="close" />
      </Button>
    </Table.Cell>
  );
}
