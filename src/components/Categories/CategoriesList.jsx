const categoriesList = ({categories =[]}) =>{
    return(
        <ol>
            {
                categories.map((category)=>(
                    <li key={category}>
                        {category}
                    </li>
                ))
            }
        </ol>
    )
   
}

export default categoriesList