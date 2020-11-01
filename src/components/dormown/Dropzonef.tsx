import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'

interface DropzoneProps {
    setFiles : any,
    id : string
}

const Dropzonef = (props : DropzoneProps) => {
    const {setFiles,id} = props
    const handleChange = (file : any) => {
        setFiles(file)
    }
    return (
        <DropzoneArea
            inputProps={{id:id}}
            onChange={handleChange}
            acceptedFiles ={['image/jpeg', 'image/png', 'image/bmp','doc/pdf']}
            dropzoneText = "Drop or click here"
            
        />
    )
}

export default Dropzonef