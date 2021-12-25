import { useState } from "react"
import { getProductsApi, addProductApi } from "../api/product"
import { useAuth } from "./"

export function useProduct() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState(null);
    const { auth } = useAuth();

    const getProducts = async () => {
        try {
            setLoading(true);
            const result = await getProductsApi();
            setLoading(false);
            setProducts(result);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    const addProduct = async (data) => {
        try {
            setLoading(true);
            const result = await addProductApi(data, auth.token);
            setLoading(false);
            setProducts(result);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    return {
        loading,
        error,
        products,
        getProducts,
        addProduct,
    }
}