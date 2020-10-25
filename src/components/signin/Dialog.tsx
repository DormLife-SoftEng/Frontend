import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

interface dialogProps {
    open : boolean,
    title : string,
    content : string
}

const Signinpop = (props : dialogProps) => {
    const {open , title , content} = props
    return (
        <Dialog  open={open}>
        <DialogTitle >{title}</DialogTitle>
        </Dialog>
    )
}

export default Signinpop;