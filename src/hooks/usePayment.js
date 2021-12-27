import { useState } from "react";
import {
  createPaymentApi,
  getPaymentByTableApi,
  closePaymentApi,
} from "../api/payment";

export function usePayment() {
  const [error, setError] = useState(null);

  const createPayment = async (paymentData) => {
    try {
      const result = await createPaymentApi(paymentData);
      return result;
    } catch (error) {
      setError(error);
    }
  };

  const getPaymentByTable = async (idTable) => {
    try {
      const result = await getPaymentByTableApi(idTable);
      return result;
    } catch (error) {
      setError(error);
    }
  };

  const closePayment = async (idPayment) => {
    try {
      await closePaymentApi(idPayment);
    } catch (error) {
      setError(error);
    }
  };

  return {
    error,
    createPayment,
    getPaymentByTable,
    closePayment,
  };
}
