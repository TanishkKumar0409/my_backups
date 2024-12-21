import React, { useEffect, useState } from 'react'
import InnerPagesBanner from '../../../Components/InnerPagesBanner/InnerPagesBanner'
import FileExplorer from './StorageComponents/FileExplorer'
import Footer from '../../../Components/Footer/Footer'
import { noFileAPI } from '../../../Services/API/API'

export default function Storage() {
    const username = JSON.parse(localStorage.getItem("user"))
    const [folderData, setFolderData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await noFileAPI.get(`storage/folder/${username}`)
            setFolderData(response.data)
        }
        getData()
    }, [])


    const BannerData = {
        icon: "hard-drive",
        heading: "Storage",
        para: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aperiam reprehenderit odit saepe error esse quaerat sint. Quisquam, tempore aliquid."
    }

    return (
        <>
            <InnerPagesBanner BannerData={BannerData} />
            <FileExplorer edata={folderData} setFolderData={setFolderData} username={username} />
            <Footer />
        </>
    )
}
