import { useState } from "react"
import { getProductsApi } from "../api/product"

export function useProduct() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState(null);

    const getProducts = async () => {
        try {
            setLoading(true);
            const result = await getProductsApi();
            setLoading(false);
            setProducts(result);
        } catch (error) {
            setError(error);
        }
    }

    return {
        loading,
        error,
        products,
        getProducts,
    }
}