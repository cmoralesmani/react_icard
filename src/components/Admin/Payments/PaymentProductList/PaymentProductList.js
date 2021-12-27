import React, { useState, useEffect } from "react";
import { Image } from "semantic-ui-react";
import { map } from "lodash";

import { useOrder } from "../../../../hooks";
import "./PaymentProductList.scss";

export function PaymentProductList(props) {
  const { payment } = props;

  const [orders, setOrders] = useState(undefined);
  const { getOrderByPayment } = useOrder();

  useEffect(() => {
    (async () => {
      const response = await getOrderByPayment(payment.id);
      setOrders(response);
    })();
  }, []);

  return (
    <div className="payment-product-list">
      {map(orders, (order, index) => (
        <div className="payment-product-list__product" key={index}>
          <div>
            <Image src={order.product_data.image} avatar size="tiny" />
            <span>{order.product_data.title}</span>
          </div>
          <span>{order.product_data.price}$</span>
        </div>
      ))}
    </div>
  );
}
