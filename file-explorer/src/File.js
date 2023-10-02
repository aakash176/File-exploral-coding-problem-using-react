import {useState} from 'react'
import {BsFolderPlus} from 'react-icons/bs'
import {AiOutlineFileAdd} from 'react-icons/ai'

const File = ({data}) =>{
    const [fileName, setFileName] = useState('')
    const [add, setAdd] = useState({
        showInput:false,
        isFolder:null
    })
    const handlePropagation = (e, isFolder) => {
        e.stopPropagation()
        setAdd({
            showInput:true,
            isFolder
        })
    }
    const [click, setClick] = useState(false)
    const handleKeyDown = (e) => {
        if(e.key === "Enter" && e.target.value){
            console.log(e.target.value);
            var obj = {
                id:Number(data.id)+1,
                name:e.target.value,
                isFolder:add.isFolder,
                items:[]
            }
            console.log('obj', obj);
            data.items.push(obj)
            setAdd({...add, showInput:false})
        }
    }
    const handleClick = () => {
        setClick(!click)
    }
    
    
    return (
        <div style={{marginLeft:"20px"}}>
            {
                data.isFolder?(
                    <>
                    <h3 onClick={handleClick} style={{cursor:'pointer'}} ><span>📁{data.name}</span>
                    <button onClick={(e) => handlePropagation(e,true)} style={{margin:'10px', padding:'5px', cursor:'pointer'}} ><BsFolderPlus/></button>
                    <button onClick ={(e) => handlePropagation(e,false)} style={{margin:'10px', padding:'5px', cursor:'pointer'}} ><AiOutlineFileAdd/></button></h3>
                    {
                        
                        
                        
                            add.showInput && (
                            <div>
                                <span>
                                    {
                                        add.isFolder?'📁':'📄'
                                    }
                                </span> 
                                <input style={{marginLeft:'20px'}} onChange={(e)=>setFileName(e.target.value)} onKeyDown={(e)=>handleKeyDown(e)} type='text' autoFocus onBlur={()=>setAdd({...add, showInput:false})} />
                            </div>
                            )

                        
                        
                    }
                    <div style={{display:click?'':'none'}} >
                        
                        {
                        data.items.map(element => {
                            return (
                                <File data={element}/>

                            )
                        })
                        }
                    </div>
                    
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