import React, {Component, useState} from 'react'
import {DropzoneAreaBase,DropzoneDialog} from 'material-ui-dropzone'
import { AnyARecord } from 'dns';
import {Button } from "react-bootstrap";
import styles from'./dropzoneclass.module.css';
interface DropzoneProps {
    files : any
    setFiles : any
}
const Dropzonef = (props : DropzoneProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const {files,setFiles} = props
    const handleChange = (files : any) => {
        setFiles(files)
        setOpen(false)
    }
    return (
        <div>
        <Button variant="contained" style ={{backgroundColor:"#F5B05E", color:"white"}}onClick={() => setOpen(true)}>
        Add Image
        </Button>

        <DropzoneDialog
        acceptedFiles={['image/*']}
        cancelButtonText={"cancel"}
        submitButtonText={"submit"}
        maxFileSize={5000000}
        open={open}
        onClose={() => setOpen(false)}
        onSave={
          handleChange
        }
        showPreviews={true}
        showFileNamesInPreview={true}
        clearOnUnmount = {false}
      />
      </div>
    )
}

export default (Dropzonef)