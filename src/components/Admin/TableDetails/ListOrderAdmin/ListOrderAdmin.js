import React from "react";
import { map } from "lodash";

import { OrderItemAdmin } from "../";
import "./ListOrderAdmin.scss";

export function ListOrderAdmin(props) {
  const { orders, onReloadOrders } = props;
  return (
    <div className="list-orders-admin">
      {map(orders, (order, index) => (
        <OrderItemAdmin
          key={index}
          order={order}
          onReloadOrders={onReloadOrders}
        />
      ))}
    </div>
  );
}
