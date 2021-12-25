import React from "react";
import { Button, Checkbox, Icon } from "semantic-ui-react";
import { map } from "lodash";

import { TableAdmin } from "../";
import "./TablesListAdmin.scss";

export function TablesListAdmin(props) {
  const { tables } = props;

  return (
    <div className="tables-list-admin">
      <Button
        primary
        icon
        className="tables-list-admin__reload"
        onClick={() => console.log("onrefecth")}
      >
        <Icon name="refresh" />
      </Button>
      <div className="tables-list-admin__reload-toggle">
        <span>Reload automatico</span>
        <Checkbox toggle onChange={(_, data) => console.log(data.checked)} />
      </div>
      {map(tables, (table, index) => (
        <TableAdmin key={table.number} table={table} />
      ))}
    </div>
  );
}
