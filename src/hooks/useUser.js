import { useState } from "react"
import { getMeApi, getUserApi } from "../api/user"
import { useAuth } from "."

export function useUser() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [users, setUsers] = useState(null)
    const { auth } = useAuth()

    const getMe = async (token) => {
        try {
            const response = await getMeApi(token);
            return response
        } catch (error) {
            throw error;
        }
    }
    const getUsers = async (token) => {
        try {
            setLoading(true)
            const response = await getUserApi(auth.token);
            setLoading(false)
            setUsers(response)
            return response
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    return {
        loading,
        error,
        users,
        getMe,
        getUsers,
    }
}