/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { withFormik ,FormikProps } from "formik";
import {Row ,Col , Button} from "react-bootstrap"
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import Dropzonef from "./Dropzonef"
import Termservice from "./Termservice";
import { AddDormFormValue  , AddDormMyFormProps, AddDormServiceProps, addRoomFormValue, RoomProps, UtilitiesProps } from "./newType";
import { withStyles, createStyles, TextareaAutosize } from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import dormownerService from "../../services/dormowner.service";
import { dialogProps, Style } from "../type";
import AddDormPop from "./AddDormPop";
import "./style.css"
import AddRoom from "./AddRoom";
import Room from "./Room"
import { RoomContext, roomContextType, useRoom } from "../../contexts/room.context";
import { useHistory } from "react-router-dom";

const styles = createStyles({
    black: {
      color: "black",
    },
    button: {
      marginRight: "10px",
    },
    textField: {
      width: "350px",
    },
    formLabel: {
      textAlign: "left",
      fontSize: "1.5rem",
      color: "black",
    },
    row: {
      marginBottom: "5%",
    },
});

const InnerForm = (props : FormikProps<AddDormFormValue> & Style) => {

    const {allRoom,setAllRoom} : roomContextType = useRoom()
  
    const {classes,values,touched,errors,isSubmitting,handleChange,handleBlur,handleSubmit,handleReset} = props;

    const [showTerm,setShowTerm] = useState<boolean>(false)

    const [showAddRoom ,setAddRoom] = useState<boolean>(false)

    const [license,setLicense] = useState([])

    const [dormImages,setDormImages] = useState([])

    const [showResult,setResult] = useState<boolean>(false)

    const [editpos,setEditpos] = useState<number | null>(null)

    const initialStateRoom : addRoomFormValue =  {
        name:"",
        capacity:"",
        bedroom:"",
        bathroom:"",
        kitchen:"",
        price:"",
        allowedSex:"male",
        aircond:"yes",
        image:[""],
        description:""
    }

    const [editRoom,setEditRoom] = useState<addRoomFormValue>(initialStateRoom)

    const initialState : dialogProps = {
        title : "",
        content : "",
    }


    const handleEdit = (index : number) => {

        setEditRoom(allRoom[index])
        setAddRoom(true)
        setEditpos(index)

    }

    const [modalProps , setModalProps] = useState<dialogProps>(initialState)


    // const [allRoom,setAllRoom] = useState<Array<addRoomFormValue>>([])

    useEffect(() => {
        values.room = allRoom
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[allRoom])

    const handleCloseAddRoom = () => {

        if(editpos !== null) {
            setModalProps({title:"EditRoom Success",content:""})
        } else {
            setModalProps({title:"AddRoom Success",content:""})
        }
        setAddRoom(false)
        setResult(true)
        setEditpos(null)
        setEditRoom(initialStateRoom)
        setTimeout(() => {
            setResult(false)
        },800)
    }

    const handleCloseAdd = () => {

        setAddRoom(false)
        setEditRoom(initialStateRoom)
        setEditpos(null)

    }


    const uploadImageLicense = async () => {
        const result = await dormownerService.uploadImageMany(license)
        const path = result.data.image as [string]
        console.log(path)
        values.license = path 
        setModalProps({title:"UploadImageSuccess",content:""})
        setResult(true)
        setTimeout(() => {
            setResult(false)
        },800)
    }
    const uploadDormImages = async () => {
        const result = await dormownerService.uploadImageMany(dormImages)
        const path = result.data.image as [string]
        setModalProps({title:"UploadImageSuccess",content:""})
        values.dormImage = path
        setResult(true)
        setTimeout(() => {
            setResult(false)
        },800)
    }

    const handleCloseTerm = () => {
        setShowTerm(false)
    }

    const handleDelete = (i : number) => {
        setAllRoom((p) => {
            return  p.filter((r , index) => {
                return index !== i
            })
        })
        setModalProps({title:"Delete Success",content:""})
        setResult(true)
        setTimeout(() => {
            setResult(false)
        },800)

    }


    return (
        <div style={{ margin: "3% 5% 3% 20%" }}>
        <form  onSubmit={handleSubmit} >

        <AddDormPop {...modalProps} open={showResult}  />
        <AddRoom editPos={editpos} editRoom={editRoom} handleClose={handleCloseAdd} setAllRoom={setAllRoom} id="room" handleSuccess={handleCloseAddRoom} show={showAddRoom} />

        <Row className={classes.row} noGutters={true}>
            <Col>
                <FormControl component="fieldset">
                <FormLabel
                    error={touched.dormName && Boolean(errors.dormName)}
                    className={classes.formLabel}
                >
                    Dorm Name
                </FormLabel>
                <TextField
                    id="dormName"
                    placeholder="Enter Dorm Name"
                    className={classes.textField}
                    value={values.dormName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.dormName ? errors.dormName : ""}
                    error={touched.dormName && Boolean(errors.dormName)}
                    margin="dense"
                    variant="outlined"
                />
                </FormControl>
            </Col>

            <Col>
                <FormControl component="fieldset">
                <FormLabel
                    error={touched.dormAddress && Boolean(errors.dormAddress)}
                    className={classes.formLabel}
                >
                    Dorm Address
                </FormLabel>
                <TextField
                    id="dormAddress"
                    placeholder="Enter Dorm Address"
                    value={values.dormAddress}
                    className={classes.textField}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.dormAddress ? errors.dormAddress : ""}
                    error={touched.dormAddress && Boolean(errors.dormAddress)}
                    margin="dense"
                    variant="outlined"
                />
                </FormControl>
            </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>

           <Col>

             <FormControl component="fieldset">

              <FormLabel
                error={touched.dormLong && Boolean(errors.dormLong)}
                className={classes.formLabel}
              >
                Dorm Longitude
              </FormLabel>
              <TextField
                id="dormLong"
                type="number"
                placeholder="Enter Dorm Longitude"
                value={values.dormLong}
                className={classes.textField}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.dormLong ? errors.dormLong : ""}
                error={touched.dormLong && Boolean(errors.dormLong)}
                margin="dense"
                variant="outlined"
              />

            </FormControl>
          </Col>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.dormLat && Boolean(errors.dormLat)}
                className={classes.formLabel}
              >
                Dorm Latitude
              </FormLabel>
              <TextField
                id="dormLat"
                type="number"
                className={classes.textField}
                placeholder="Enter Dorm Latitude"
                value={values.dormLat}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.dormLat ? errors.dormLat : ""}
                error={touched.dormLat && Boolean(errors.dormLat)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.dormPhone && Boolean(errors.dormPhone)}
                className={classes.formLabel}
              >
                Dorm Phone Number
              </FormLabel>
              <TextField
                id="dormPhone"
                placeholder="Enter Phone Number"
                value={values.dormPhone}
                className={classes.textField}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.dormPhone ? errors.dormPhone : ""}
                error={touched.dormPhone && Boolean(errors.dormPhone)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>

          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.dormEmail && Boolean(errors.dormEmail)}
                className={classes.formLabel}
              >
                Dorm E-mail
              </FormLabel>
              <TextField
                id="dormEmail"
                placeholder="Enter your email"
                type="email"
                className={classes.textField}
                value={values.dormEmail}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.dormEmail ? errors.dormEmail : ""}
                error={touched.dormEmail && Boolean(errors.dormEmail)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
        </Row>
        <Row noGutters={true} className={classes.row}>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={
                  touched.dormLine && Boolean(errors.dormLine)
                }
                className={classes.formLabel}
              >
                Dorm Line ID
              </FormLabel>
              <TextField
                id="dormLine"
                placeholder="Enter Line ID"
                className={classes.textField}
                value={values.dormLine}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched.dormLine ? errors.dormLine : ""
                }
                error={
                  touched.dormLine && Boolean(errors.dormLine)
                }
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>

          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={
                  touched.dormWeb && Boolean(errors.dormWeb)
                }
                className={classes.formLabel}
              >
                Dorm Website
              </FormLabel>
              <TextField
                id="dormWeb"
                placeholder="Enter Dorm Website"
                className={classes.textField}
                value={values.dormWeb}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched.dormWeb ? errors.dormWeb : ""
                }
                error={
                  touched.dormWeb && Boolean(errors.dormWeb)
                }
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>

        </Row>
        <Row noGutters={true} className={classes.row}>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
                width: "350px",
              }}
            >
              <FormControl component="fieldset">
                <FormLabel
                  className={classes.formLabel}
                  error={
                    touched.license && Boolean(errors.license)
                  }
                >
                  ใบอนุญาตประกอบกิจการหอพักเอกชน
                </FormLabel>
                <Dropzonef  id="license" setFiles={setLicense} />
                <Button disabled={license.length === 0 && true} variant="danger" onClick={uploadImageLicense}>Upload Image</Button>
                <FormHelperText error={true}>
                    {touched.license? errors.license : ""}
                </FormHelperText>
              </FormControl>
            </div>
            </Col>
            <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
                width: "350px",
              }}
            >
                <FormLabel className={classes.formLabel}>Accomodation Type</FormLabel>
                <RadioGroup
                  aria-label="dormType"
                  name="dormType"
                  value={values.dormType}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="dorm"
                    control={<Radio color="primary" />}
                    label="Dorm"
                  />
                  <FormControlLabel
                    value="condo"
                    control={<Radio color="primary" />}
                    label="Condo"
                  />
                  <FormControlLabel
                    value="apartment"
                    control={<Radio color="primary" />}
                    label="Aparment"
                  />
                  <FormControlLabel
                    value="flat"
                    control={<Radio color="primary" />}
                    label="Flat"
                  />
                  <FormControlLabel
                    value="hostel"
                    control={<Radio color="primary" />}
                    label="Hostel"
                  />
                  <FormControlLabel
                    value="house"
                    control={<Radio color="primary" />}
                    label="House"
                  />
                </RadioGroup>
            </div>
          </Col>
        </Row>
        <Row noGutters={true} className={classes.row}>
        <Col>
                <div
                  style={{
                    textAlign: "left",
                    display: "inline-block",
                    width: "350px",
                  }}
                >
                    <FormLabel  className={classes.formLabel}>Allowed Sex</FormLabel>
                    <RadioGroup
                      aria-label="sex"
                      name="sex"
                      value={values.sex}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio color="primary" />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio color="primary" />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="any"
                        control={<Radio color="primary" />}
                        label="Any"
                      />
                    </RadioGroup>
                </div>
              </Col>
        </Row>
        <Row  noGutters={true}>
           <Col>
             <FormLabel className={classes.formLabel}>Facilities</FormLabel>
           </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="primary" checked={values.havecon} onChange={handleChange} name="havecon" />}
                    label="Convenience Store"
                    labelPlacement="end"
                  />
                  <TextField disabled={!values.havecon}
                    type="number"
                    id="conDis"
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.conDis}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment:<InputAdornment position="end">Km</InputAdornment>             
                    }}
                    onBlur={handleBlur}
                    helperText={touched.conDis ? errors.conDis : null}
                    error={touched.conDis && Boolean(errors.conDis)}
                    margin="dense"
                    variant="outlined"
                  />
                  <TextField disabled={!values.havecon}
                    id="conDes"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.conDes}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.conDes ? errors.conDes : null}
                    error={touched.conDes && Boolean(errors.conDes)}
                    margin="dense"
                    variant="outlined" 
                  />  
                </FormGroup>
              </FormControl>
            </div>
          </Col>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="primary" checked={values.havelaun} onChange={handleChange} name="havelaun" />}
                    label="Laundry/Washing Machine"
                    labelPlacement="end"
                  />
                  <TextField disabled={!values.havelaun}
                    id="launDis"
                    type="number"
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.launDis}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputProps={{
                        endAdornment:<InputAdornment position="end">Km</InputAdornment>             
                    }}
                    helperText={touched.launDis ? errors.launDis : null}
                    error={touched.launDis && Boolean(errors.launDis)}
                    margin="dense"
                    variant="outlined" 
                  />
                  <TextField disabled={!values.havelaun}
                    id="launDes"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.launDes}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.launDes ? errors.launDes : null}
                    error={touched.launDes && Boolean(errors.launDes)}
                    margin="dense"
                    variant="outlined" 
                  />
                </FormGroup>
              </FormControl>
            </div>
          </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="primary" checked={values.havepark} onChange={handleChange} name="havepark" />}
                    label="Parking Lot"
                    labelPlacement="end"
                  />
                  <TextField disabled={!values.havepark}
                    id="parkDis"
                    type="number"
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.parkDis}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputProps={{
                        endAdornment:<InputAdornment position="end">Km</InputAdornment>             
                    }}
                    helperText={touched.parkDis ? errors.parkDis : null}
                    error={touched.parkDis && Boolean(errors.parkDis)}
                    margin="dense"
                    variant="outlined"></TextField>
                  <TextField disabled={!values.havepark}
                    id="parkDes"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.parkDes}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.parkDes ? errors.parkDes : null}
                    error={touched.parkDes && Boolean(errors.parkDes)}
                    margin="dense"
                    variant="outlined"></TextField>
                </FormGroup>
              </FormControl>
            </div>
          </Col>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="primary" checked={values.haveres} onChange={handleChange} name="haveres" />}
                    label="Restaurant"
                    labelPlacement="end"
                  />
                  <TextField disabled={!values.haveres}
                    id="resDis"
                    type="number"
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.resDis}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputProps={{
                        endAdornment:<InputAdornment position="end">Km</InputAdornment>             
                    }}
                    helperText={touched.resDis ? errors.resDis : null}
                    error={touched.resDis && Boolean(errors.resDis)}
                    margin="dense"
                    variant="outlined"></TextField>
                  <TextField disabled={!values.haveres}
                    id="resDes"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.resDes}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.resDes ? errors.resDes : null}
                    error={touched.resDes && Boolean(errors.resDes)}
                    margin="dense"
                    variant="outlined"></TextField>
                </FormGroup>
              </FormControl>
            </div>
          </Col>
        </Row>
        
        <Row className={classes.row} noGutters={true}>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox  color="primary" checked={values.havesmoke} onChange={handleChange} name="havesmoke" />}
                    label="Smoking Area"
                    labelPlacement="end"
                  />
                  <TextField disabled={!values.havesmoke}
                    id="smokeDis"
                    type="number"
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.smokeDis}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputProps={{
                        endAdornment:<InputAdornment position="end">Km</InputAdornment>             
                    }}
                    helperText={touched.smokeDis ? errors.smokeDis : null}
                    error={touched.smokeDis && Boolean(errors.smokeDis)}
                    margin="dense"
                    variant="outlined"></TextField>
                  <TextField disabled={!values.havesmoke}
                    id="smokeDes"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.smokeDes}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.smokeDes ? errors.smokeDes : null}
                    error={touched.smokeDes && Boolean(errors.smokeDes)}
                    margin="dense"
                    variant="outlined"></TextField>
                </FormGroup>
              </FormControl>
            </div>
          </Col>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="primary" checked={values.havefit} onChange={handleChange} name="havefit" />}
                    label="Fitness"
                    labelPlacement="end"
                  />
                  <TextField disabled={!values.havefit}
                    id="fitDis"
                    type="number"
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.fitDis}
                    InputProps={{
                        endAdornment:<InputAdornment position="end">Km</InputAdornment>             
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.fitDis ? errors.fitDis : null}
                    error={touched.fitDis && Boolean(errors.fitDis)}
                    margin="dense"
                    variant="outlined"></TextField>
                  <TextField disabled={!values.havefit}
                    id="fitDes"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.fitDes}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.fitDes ? errors.fitDes : null}
                    error={touched.fitDes && Boolean(errors.fitDes)}
                    margin="dense"
                    variant="outlined"></TextField>
                </FormGroup>
              </FormControl>
            </div>
          </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="primary" checked={values.haveswim} onChange={handleChange} name="haveswim" />}
                    label="Swimming Pool"
                    labelPlacement="end"
                  />
                  <TextField disabled={!values.haveswim}
                    id="swimDis"
                    type="number"
                    InputProps={{
                        endAdornment:<InputAdornment position="end">Km</InputAdornment>             
                    }}
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.swimDis}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.swimDis ? errors.swimDis : null}
                    error={touched.swimDis && Boolean(errors.swimDis)}
                    margin="dense"
                    variant="outlined"></TextField>
                  <TextField disabled={!values.haveswim}
                    id="swimDes"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.swimDes}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.swimDes ? errors.swimDes : null}
                    error={touched.swimDes && Boolean(errors.swimDes)}
                    margin="dense"
                    variant="outlined"></TextField>
                </FormGroup>
              </FormControl>
            </div>
          </Col>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="primary" checked={values.havecom} onChange={handleChange} name="havecom" />}
                    label="Common Room"
                    labelPlacement="end"
                  />
                  <TextField disabled={!values.havecom}
                    id="comDis"
                    type="number"
                    InputProps={{
                        endAdornment:<InputAdornment position="end">Km</InputAdornment>             
                    }}
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.comDis}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.comDis ? errors.comDis : null}
                    error={touched.comDis && Boolean(errors.comDis)}
                    margin="dense"
                    variant="outlined"></TextField>
                  <TextField disabled={!values.havecom}
                    id="comDes"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.comDes}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.comDes ? errors.comDes : null}
                    error={touched.comDes && Boolean(errors.comDes)}
                    margin="dense"
                    variant="outlined"></TextField>
                </FormGroup>
              </FormControl>
            </div>
          </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="primary" checked={values.haveinternet} onChange={handleChange} name="haveinternet" />}
                    label="Internet"
                    labelPlacement="end"

                  />
                  <TextField disabled={!values.haveinternet}
                    id="internetDis"
                    type="number"
                    InputProps={{
                        endAdornment:<InputAdornment position="end">Km</InputAdornment>             
                    }}
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.internetDis}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.internetDis ? errors.internetDis : null}
                    error={touched.internetDis && Boolean(errors.internetDis)}
                    margin="dense"
                    variant="outlined"></TextField>
                  <TextField disabled={!values.haveinternet}
                    id="internetDes"
                    placeholder="Description"
                    className={classes.internetDes}
                    value={values.internetDes}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.internetDes ? errors.internetDes : null}
                    error={touched.internetDes && Boolean(errors.internetDes)}
                    margin="dense"
                    variant="outlined"></TextField>
                </FormGroup>
              </FormControl>
            </div>
          </Col>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="primary" checked={values.haverest} onChange={handleChange} name="haverest" />}
                    label="Restroom"
                    labelPlacement="end"
                  />
                  <TextField disabled={!values.haverest}
                    id="restDis"
                    type="number"
                    InputProps={{
                        endAdornment:<InputAdornment position="end">Km</InputAdornment>             
                    }}
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.restDis}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.restDis ? errors.restDis : null}
                    error={touched.restDis && Boolean(errors.restDis)}
                    margin="dense"
                    variant="outlined"></TextField>
                  <TextField disabled={!values.haverest}
                    id="restDes"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.restDes}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.restDes ? errors.restDes : null}
                    error={touched.resDes && Boolean(errors.restDes)}
                    margin="dense"
                    variant="outlined"></TextField>
                </FormGroup>
              </FormControl>
            </div>
          </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
                width: "350px",
              }}
            >
                <FormLabel className={classes.formLabel}>Allowed Pet</FormLabel>
                <RadioGroup
                  aria-label="AllowedPet"
                  name="pet"
                  value={values.pet}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />{" "}
                  <FormControlLabel
                    value="no"
                    control={<Radio color="primary" />}
                    label="No"
                  />
                </RadioGroup>
            </div>
          </Col>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
                width: "350px",
              }}
            >
                <FormLabel className={classes.formLabel}>Allowed Cooking</FormLabel>
                <RadioGroup
                  aria-label="AllowedCook"
                  name="cook"
                  value={values.cook}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />{" "}
                  <FormControlLabel
                    value="no"
                    control={<Radio color="primary" />}
                    label="No"
                  />
                </RadioGroup>
            </div>
          </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
            <Col>
                <div
                style={{
                    textAlign: "left",
                    display: "inline-block",
                    width: "350px",
                }}
                >
                <FormControl component="fieldset">
                    <FormLabel
                    className={classes.formLabel}
                    error={
                        touched.dormImage && Boolean(errors.dormImage)
                    }
                    style={{width:"350px"}}
                    >
                    Dorm Image
                    </FormLabel>
                    <Dropzonef  id="dormImage" setFiles={setDormImages} />
                    <Button  disabled={dormImages.length === 0 && true} variant="danger" onClick={uploadDormImages}>Upload Image</Button>
                    <FormHelperText error={true}>
                        {touched.dormImage? errors.dormImage : ""}
                    </FormHelperText>
                </FormControl>
                </div>
            </Col>
            <Col>
                
            <FormControl component="fieldset">

                <FormLabel
                error={touched.dormDes && Boolean(errors.dormDes)}
                className={classes.formLabel}
                >
                Dorm description
                </FormLabel>
                <TextareaAutosize 
                    aria-label="minimum height" 
                    rowsMin={3} 
                    placeholder="Enter Dorm Description"
                    id="dormDes"
                    className={classes.textField}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dormDes}
                />
                <FormHelperText error={true}>
                    {touched.dormDes? errors.dormDes : ""}
                </FormHelperText>

            </FormControl>


            </Col>
        </Row>
        <Row noGutters={true}>
            <FormLabel  
                error={touched.room && Boolean(errors.room)} className={classes.formLabel} >Rooms
            </FormLabel>
        </Row>
        {allRoom.map((room,index) => {
            return <Room handleEdit={handleEdit} index={index} key={index} handleDelete={handleDelete} {...room} />
        })}
        <Row className={classes.row} noGutters={true}>
          <Col>
          <div
              style={{
                textAlign: "left",
                display: "inline-block",
                width: "350px",
              }}
            >

              <Button
                variant="danger"
                onClick={() => setAddRoom(true)}
              >
                Add Room Type
              </Button>
            </div>
          <FormHelperText error={true}>
                {touched.room? errors.room : ""}
          </FormHelperText>
          </Col>

          <Col></Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
          <div
              style={{
                textAlign: "left",
                display: "inline-block",
                width: "500px",
              }}
            >
            <Checkbox
              style={{paddingLeft:"0"}}
              checked={values.acceptTerm}
              onChange={handleChange}
              onBlur={handleBlur}
              name="acceptTerm"
              color="primary"
            />
            <FormLabel style={{fontSize:"1rem"}} className={classes.black}>
              I have read and agreed to 
            </FormLabel>{" "}
            <a style={{fontSize:"1rem",textDecoration:"underline",color:"#0066cc"}}
              onClick={() => {
                setShowTerm(true)
              }}
            >
              Term service and policy
            </a>
            <Termservice show={showTerm} handleClose={handleCloseTerm} />
            <FormHelperText error={true}>
              {touched.acceptTerm ? errors.acceptTerm : ""}
            </FormHelperText>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Button
                className={classes.button}
                variant="secondary"
                type="submit"
                disabled={isSubmitting}
              >
                SUBMIT
        </Button>

        <Button className={classes.button} variant="danger" onClick={handleReset}>
                CLEAR
        </Button>
        </form>
        </div>
    )

}

const AddDormFormik = withFormik<AddDormMyFormProps, AddDormFormValue>({
    mapPropsToValues: (props) => {
      return {
        dormName: props.dormName || "",
        dormAddress: props.dormAddress || "",
        dormLong : props.dormLong || "",
        dormLat : props.dormLat || "",
        dormEmail : props.dormEmail || "",
        dormLine : props.dormLine || "",
        dormPhone : props.dormPhone || "",
        dormType : props.dormType || "dorm",
        dormWeb : props.dormWeb || "",
        sex : props.sex || "male",
        havecon : props.havecon || false,
        conDes : props.conDes || "",
        conDis : props.conDis || "",
        havelaun : props.havelaun || false,
        launDes : props.launDes || "",
        launDis : props.launDis || "",
        havecom : props.havecom || false,
        comDes : props.comDes || "",
        comDis : props.comDis || "",
        havefit : props.havefit || false,
        fitDes : props.fitDes || "",
        fitDis : props.fitDis || "",
        haveinternet : props.haveinternet || false,
        internetDes : props.internetDes || "",
        internetDis : props.internetDis || "",
        havesmoke : props.havesmoke || false,
        smokeDes : props.smokeDes || "",
        smokeDis : props.smokeDis || "",
        havepark : props.havepark || false,
        parkDis : props.parkDis || "",
        parkDes : props.parkDes || "",
        haveres : props.haveres || false,
        resDes : props.resDes || "",
        resDis : props.resDis || "",
        haverest : props.haverest || false,
        restDes : props.restDes || "",
        restDis : props.restDis || "",
        haveswim : props.haveswim || false,
        swimDes : props.smokeDes || "",
        swimDis : props.smokeDis || "",
        acceptTerm : props.acceptTerm || false,
        dormImage : props.dormImage || [""],
        license : props.license || [""],
        pet : props.pet || "no",
        cook : props.cook || "no",
        room : props.room || [],
        dormDes : props.dormDes || ""
      };
    },
    validationSchema: Yup.object().shape({
      dormName: Yup.string().required("Required"),
      dormAddress: Yup.string().required("Required"),
      dormEmail: Yup.string().email("Enter a valid email").required("Email is required"),
      license: Yup.string().required("Required"),
      havecon: Yup.boolean(),
      conDis: Yup.string().when("havecon", {
        is : true,
        then: Yup.string().required("Required")
      }),
      havelaun : Yup.boolean(),
      launDis: Yup.string().when("havelaun", {
        is : true,
        then: Yup.string().required("Required")
      }), 
      havecom : Yup.boolean(),
      comDis: Yup.string().when("havecom", {
        is : true,
        then: Yup.string().required("Required")
      }), 
      havefit : Yup.boolean(),
      fitDis: Yup.string().when("havefit", {
        is : true,
        then: Yup.string().required("Required")
      }), 
      haveres : Yup.boolean(),
      resDis: Yup.string().when("haveres", {
        is : true,
        then: Yup.string().required("Required")
      }), 
      haverest : Yup.boolean(),
      restDis: Yup.string().when("haverest", {
        is : true,
        then: Yup.string().required("Required")
      }), 
      haveswim : Yup.boolean(),
      swimDis: Yup.string().when("haveswim", {
        is : true,
        then: Yup.string().required("Required")
      }),
      haveinternet : Yup.boolean(),
      internetDis: Yup.string().when("haveinternet", {
        is : true,
        then: Yup.string().required("Required")
      }), 
      havepark : Yup.boolean(),
      parkDis: Yup.string().when("havepark", {
        is : true,
        then: Yup.string().required("Required")
      }),  
      havesmoke : Yup.boolean(),
      smokeDis: Yup.string().when("havesmoke", {
        is : true,
        then: Yup.string().required("Required")
      }), 
      acceptTerm: Yup.boolean()
      .required("Required")
      .oneOf([true], "You must accept the terms and conditions."),
      dormImage: Yup.string().required("Required"),
      room : Yup.string().required("Required"),
      dormDes : Yup.string().required("Required"),
      dormPhone : Yup.string().required("Required"),
      dormLat : Yup.string().required("Required").test("is-lat","Please enter between -90 and 90",value => {
        if (value) {
            return (parseInt(value) <= 90) && (parseInt(value) >= -90)
          }
          return false
      }),
      dormLong : Yup.string().required("Required").test("is-long","Please enter between -180 and 180",value => {
        if (value) {
            return (parseInt(value) <= 180) && (parseInt(value) >= -180)
        }
        return false
      })
    }),
  
    handleSubmit: async (values, {resetForm  , props}) => {
      const utilities : UtilitiesProps[] = []
      if (values.havecom) {
          const util : UtilitiesProps =  {
              type : "commonroom",
              description : values.comDes,
              distance : parseInt(values.comDis)
          }
          utilities.push(util)
      }
      if (values.havecon) {
          const util : UtilitiesProps = {
              type : "convenienceStore",
              description : values.conDes,
              distance : parseInt(values.conDis)
          }
          utilities.push(util)
      }
      if (values.havefit) {
          const util : UtilitiesProps = {
              type : "fitness",
              description : values.fitDes,
              distance : parseInt(values.fitDis)
          }
          utilities.push(util)
      }
      if (values.haveinternet) {
          const util : UtilitiesProps = {
              type : "internet",
              description : values.internetDes,
              distance : parseInt(values.internetDis)
          }
          utilities.push(util)
      }
      if (values.havepark) {
          const util : UtilitiesProps = {
            type : "parking",
            description : values.parkDes,
            distance : parseInt(values.parkDis)             
          }
          utilities.push(util)          
      }
      if (values.havelaun) {
          const util : UtilitiesProps = {
              type : "laundry",
              description : values.launDes,
              distance : parseInt(values.launDis)
          }
          utilities.push(util) 
      }
      if (values.haveswim) {
        const util : UtilitiesProps = {
            type : "pool",
            description : values.swimDes,
            distance : parseInt(values.swimDis)
        }
        utilities.push(util) 
      }
      if (values.havesmoke) {
        const util : UtilitiesProps = {
            type : "smoking",
            description : values.smokeDes,
            distance : parseInt(values.smokeDis)
        }
        utilities.push(util) 
      }
      if (values.haveres) {
        const util : UtilitiesProps = {
            type : "restaurant",
            description : values.resDes,
            distance : parseInt(values.resDis)
        }
        utilities.push(util) 
      }
      if (values.haverest) {
        const util : UtilitiesProps = {
            type : "restroom",
            description : values.restDes,
            distance : parseInt(values.restDis)
        }
        utilities.push(util) 
      }
      if (values.pet === "yes") {
        const util : UtilitiesProps = {
            type : "pet",
            description : "",
            distance : 0
        }
        utilities.push(util)          
      }
      if (values.cook === "yes") {
        const util : UtilitiesProps = {
            type : "cooking",
            description : "",
            distance : 0
        }
        utilities.push(util)          
      }
      const Rooms : RoomProps[] = values.room.map((r,index) => {
          var aircon = 0;
          const price = {
              amount : parseInt(r.price),
              pricePer : parseInt(r.price) / parseInt(r.capacity)
          }
          if (r.aircond === "yes") {
              aircon = 1;
          } else {
              aircon = 0;
          }
          return {...r,bathroom : parseInt(r.bathroom) , bedroom : parseInt(r.bedroom) , kitchen : parseInt(r.kitchen) , capacity : parseInt(r.capacity) , price : price  , aircond : aircon}
      })
      const addDormForm : AddDormServiceProps = {
          name : values.dormName,
          telephone : values.dormPhone,
          email : values.dormEmail,
          lineID : values.dormLine,
          website : values.dormWeb,
          address : values.dormAddress,
          coordinate : [parseInt(values.dormLat),parseInt(values.dormLong)],
          utilities : utilities,
          type : values.dormType,
          description : values.dormDes,
          rooms : Rooms,
          allowedSex : values.sex,
          image : values.dormImage,
          license : values.license
      }
      await props.handleSubmit(addDormForm)

      
    },
  })(InnerForm);




const AddDorm = (props : Style) => {
    const history = useHistory()
    const {classes} = props

    const initialState : dialogProps = {
        title : "",
        content : "",
    }
    const [allRoom,setAllRoom] = useState<addRoomFormValue[]>([])

    const [modalProps , setModalProps] = useState<dialogProps>(initialState)

    const [show,setShow] = useState<boolean>(false)

    useEffect(() => {
        document.body.style.backgroundColor = "white";
      }, []);

    const  handleSubmit = async (form : AddDormServiceProps) => {
        const result = await dormownerService.addDorm(form)
        if (result) {

            setModalProps({title:"AddDorm Success",content:""})
            setShow(true)
            setTimeout(() => {
                history.push("/dormowner/")
                setShow(false)
            },800)

        } else {

            setModalProps({title:"AddDorm Failed",content:""})
            setShow(true)
            setTimeout(() => {
                setShow(false)
            },800)

        }

        return result

    }
    return (
        <RoomContext.Provider value={{allRoom,setAllRoom}}>
        <Header />
        <AddDormPop {...modalProps} open={show}  />
        <AddDormFormik handleSubmit={handleSubmit} classes={classes} />
        </RoomContext.Provider>
    )
}
export default withStyles(styles)(AddDorm);
