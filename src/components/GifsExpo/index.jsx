import { useEffect, useState } from "react"

const GifsExpo = ({categories}) => {
    const [ gifsList, setGifsList] = useState([])
    
    useEffect (
        () =>{
            console.log("Me renderizo")
            const getGifList = async () =>{

                const gifs = await Promise.all(categories.map(async(category)=>{

                    const query = encodeURIComponent(category)
                    const apikey = "y5bThiY14OOt58N5U91ZWZveFVsQ5XYq"
                    const response = await  fetch (`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${query}&limit=10`)
                    const gifsList = await response.json()
                    return gifsList
                }))
                let urIList = []
                gifs.forEach((gif)=>{
                    const data = gif.data.map((item)=>{
                        return item.images.fixed_height.url.split('?')[0]
                    })
                    urIList = [...urIList, ...data]
                })
                setGifsList([...urIList])
            }
            getGifList()
        },
        [categories]
    )

   

    return(
        <>
        <h4>Gifs Expo</h4>
        <div>
            {
                gifsList.map((url)=>(
                    <img key={url} src={url} />

                ))
            }
        </div>
        </>
    )
 } 

 export default GifsExpo