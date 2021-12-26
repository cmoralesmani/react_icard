import React, { useState, useEffect } from "react";
import { size } from "lodash";
import { Label, Button, Icon, Checkbox } from "semantic-ui-react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { ORDER_STATUS } from "../../../../utils/constants";
import { getOrdersByTableApi } from "../../../../api/orders";
import { ReactComponent as IcTable } from "../../../../assets/table.svg";
import "./TableAdmin.scss";

export function TableAdmin(props) {
  const { table, reload } = props;
  const [orders, setOrders] = useState([]);
  const [tableBusy, setTableBusy] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getOrdersByTableApi(
        table.id,
        ORDER_STATUS.PENDING
      );
      setOrders(response);
    })();
  }, [reload]);

  useEffect(() => {
    (async () => {
      const response = await getOrdersByTableApi(
        table.id,
        ORDER_STATUS.DELIVERED
      );
      if (size(response) > 0) setTableBusy(response);
      else setTableBusy(false);
    })();
  }, [reload]);

  return (
    <Link className="table-admin" to={`/admin/table/${table.id}`}>
      {size(orders) > 0 && (
        <Label circular color="orange">
          {size(orders)}
        </Label>
      )}
      <IcTable
        className={classNames({
          pending: size(orders) > 0,
          busy: tableBusy,
        })}
      />
      <p>Mesa {table.number}</p>
    </Link>
  );
}
