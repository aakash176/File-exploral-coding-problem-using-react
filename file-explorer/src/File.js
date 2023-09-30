import {useState} from 'react'
const File = ({data}) =>{
    const handleClick = () => {
        setClick(!click)
    }
    const [click, setClick] = useState(false)
    return (
        <div style={{marginLeft:"20px"}}>
            {
                data.isFolder?(
                    <>
                    <h3 onClick={handleClick} style={{cursor:'pointer'}} >📁{data.name}</h3>
                    {
                        <div style={{display:click?'':'none'}} >
                            {
                            data.items.map(element => {
                                return (
                                    <File data={element}/>

                                )
                            })
                            }
                        </div>
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