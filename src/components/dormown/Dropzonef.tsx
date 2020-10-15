import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
import { AnyARecord } from 'dns';

interface DropzoneProps {
    files : any
    setFiles : any
}

const Dropzonef = (props : DropzoneProps) => {
    const {files,setFiles} = props
    const handleChange = (files : any) => {
        setFiles(files)
    }
    return (
        <DropzoneArea
            onChange={handleChange}
        />
    )
}

export default Dropzonef