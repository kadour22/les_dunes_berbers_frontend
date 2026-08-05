import React, { useEffect, useState } from 'react'
import { MenuEndpoint } from '../api/axiosInstance'

const MenuList = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {

        const fetchMenu = async () => {
            try {
                const response = await MenuEndpoint.getMenu()
                setMenu(response.data)
            } catch (error) {
                console.error('Error fetching menu:', error)
            }
        }

        fetchMenu()

    }, [])

    return (
    <div>
      
    </div>
  )
}

export default MenuList
