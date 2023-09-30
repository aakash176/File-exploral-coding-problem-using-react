const File = ({data}) =>{
    const handleClick = () => {

    }
    return (
        <div style={{marginLeft:"20px"}}>
            {
                data.isFolder?(
                    <>
                    <h3>📁{data.name}</h3>
                    {
                        data.items.map(element => {
                            return (
                                <File data={element}/>

                            )
                        })
                    }
                    </>

                ):
                (
                    <h3>📄{data.name}</h3>
                )
            }
        </div>
    )
}

export default File