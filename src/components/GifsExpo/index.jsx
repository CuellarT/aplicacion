import { useState } from "react"

const GifsExpo = ({categories}) => {
    const [gifsLists, setGifsList] = useState([])

    const getGifsList = async () => {
        let gifArray = []
        categories.forEach(async(category) => {
            const query = encodeURIComponent(category)
            const apikey = "y5bThiY14OOt58N5U91ZWZveFVsQ5XYq"
            const responese = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q${query}limit=10`)
            const gifsLists = await responese.json()

        const urlGifsList = gifsLists.data.map((gif)=>{
            return gif.images.fixed_width.url
        })

        gifArray = [...gifArray, ...urlGifsList]
        })

     //  setGifsList(...gifArray) 

    }

    getGifsList()

    return(
        <h4>Gifs_Expo</h4>
    )
} 

 export default GifsExpo