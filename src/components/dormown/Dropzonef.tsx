import React, {Component, useState} from 'react'
import {DropzoneAreaBase,DropzoneDialog} from 'material-ui-dropzone'
import { AnyARecord } from 'dns';
import { withStyles, createStyles, Button } from "@material-ui/core";
import styles from'./dropzoneclass.module.css';
interface DropzoneProps {
    files : any
    setFiles : any
}
const Dropzonef = (props : DropzoneProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const {files,setFiles} = props
    const [clear,setClear] = useState<boolean>(true);
    const handleChange = (files : any) => {
        setFiles(files)
        setClear(false)
        setOpen(false)
    }
    const handleClose = ()=>{
        setFiles([])
        setClear(true)
        setOpen(false)
    }
    return (
        <div>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add Image
        </Button>

        <DropzoneDialog
        acceptedFiles={['image/*']}
        cancelButtonText={"cancel"}
        submitButtonText={"submit"}
        maxFileSize={5000000}
        open={open}
        onClose={handleClose}
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