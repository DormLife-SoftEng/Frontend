import React, { useState } from "react";
import { withFormik ,FormikProps } from "formik";
import { Modal , Button, Row ,Col  } from "react-bootstrap";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Dropzonef from "./Dropzonef"
import { Style } from "../type";
import { withStyles, createStyles } from "@material-ui/core";
import { addRoomFormValue, addRoomMyFormProps } from "./newType";
import AddDormPop from "./AddDormPop";
import dormownerService from "../../services/dormowner.service";

const styles = createStyles({
    black: {
      color: "black",
    },
    button: {
      marginRight: "10px",
    },
    textFieldlong: {
      width: "350px",
    },
    textFieldShort: {
      width:"200px"
    },
    textFieldlonglong: {
        width:"800px"
    },
    formLabel: {
      textAlign: "left",
      fontSize: "1.5rem",
      color: "black",
    },
    row: {
      marginBottom:"3%"
    },
});


interface AddRoomProps {
    show : boolean,
    classes : any,
    handleSuccess : () => void,
    handleClose : () => void,
    id : string,
    setAllRoom : React.Dispatch<React.SetStateAction<addRoomFormValue[]>>,
    editRoom : addRoomFormValue,
    editPos : number | null
}

const InnerForm = (props : FormikProps<addRoomFormValue> & Style) => {

    const {classes,values,touched,errors,isSubmitting,handleChange,handleBlur,handleSubmit,handleReset} = props;

    const [uploadImageResult,setUploadImageResult] = useState<boolean>(false)

    const [roomImage,setRoomImage] = useState([])

    const uploadRoomImage = async () => {
        const result = await dormownerService.uploadImageMany(roomImage)
        const path = result.data.image as [string]
        values.image = path
        setUploadImageResult(true)
        setTimeout(() => {
            setUploadImageResult(false)
        },800)
    }

    return (
        <form style={{padding:"3%"}} onSubmit={handleSubmit}>
        <Row className={classes.row} noGutters={true}>
            <AddDormPop content="" open={uploadImageResult} title="UploadImage Success" />
            <Col>
                <FormControl component="fieldset">
                <FormLabel
                    error={touched.name && Boolean(errors.name)}
                    className={classes.formLabel}
                >
                    Room Type Name
                </FormLabel>
                <TextField
                    id="name"
                    placeholder="Enter room type name"
                    className={classes.textFieldlong}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.name ? errors.name : ""}
                    error={touched.name && Boolean(errors.name)}
                    margin="dense"
                    variant="outlined"
                />
                </FormControl>
            </Col>
            <Col>
                <FormControl component="fieldset">
                <FormLabel
                    error={touched.capacity && Boolean(errors.capacity)}
                    className={classes.formLabel}
                >
                    Room Capacity
                </FormLabel>
                <TextField
                    id="capacity"
                    type="number"
                    placeholder="Enter room capacity"
                    value={values.capacity}
                    className={classes.textFieldlong}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.capacity ? errors.capacity : ""}
                    error={touched.capacity && Boolean(errors.capacity)}
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
                    error={touched.bathroom && Boolean(errors.bathroom)}
                    className={classes.formLabel}
                >
                    No. of Bathroom
                </FormLabel>
                <TextField
                    id="bathroom"
                    type="number"
                    placeholder="Enter no. bathroom"
                    value={values.bathroom}
                    className={classes.textFieldShort}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.bathroom ? errors.bathroom : ""}
                    error={touched.bathroom && Boolean(errors.bathroom)}
                    margin="dense"
                    variant="outlined"
                />
                </FormControl>
            </Col>
            <Col>
                <FormControl component="fieldset">
                <FormLabel
                    error={touched.kitchen && Boolean(errors.kitchen)}
                    className={classes.formLabel}
                >
                    No. of Kitchen
                </FormLabel>
                <TextField
                    id="kitchen"
                    type="number"
                    placeholder="Enter no. kitchen"
                    value={values.kitchen}
                    className={classes.textFieldShort}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.kitchen ? errors.kitchen : ""}
                    error={touched.kitchen && Boolean(errors.kitchen)}
                    margin="dense"
                    variant="outlined"
                />
                </FormControl>
            </Col>
            <Col>
                <FormControl component="fieldset">
                <FormLabel
                    error={touched.bedroom && Boolean(errors.bedroom)}
                    className={classes.formLabel}
                >
                    No. of bedroom
                </FormLabel>
                <TextField
                    id="bedroom"
                    type="number"
                    placeholder="Enter no. bedroom"
                    value={values.bedroom}
                    className={classes.textFieldShort}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.bedroom ? errors.bedroom : ""}
                    error={touched.bedroom && Boolean(errors.bedroom)}
                    margin="dense"
                    variant="outlined"
                />
                </FormControl>
            </Col>
            <Col>
                <FormControl component="fieldset">
                <FormLabel
                    error={touched.price && Boolean(errors.price)}
                    className={classes.formLabel}
                >
                    Pricing [1 month]
                </FormLabel>
                <TextField
                    id="price"
                    type="number"
                    placeholder="Enter room price"
                    value={values.price}
                    className={classes.textFieldShort}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.price ? errors.price : ""}
                    error={touched.price && Boolean(errors.price)}
                    margin="dense"
                    variant="outlined"
                />
                </FormControl>
            </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
            <Col lg={3}>
            <div
                  style={{
                    textAlign: "left",
                    display: "inline-block",
                    width: "150px",
                  }}
                >
                    <FormLabel className={classes.formLabel}>Allowed Sex</FormLabel>
                    <RadioGroup
                      aria-label="allowedSex"
                      name="allowedSex"
                      value={values.allowedSex}
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
            <Col lg={3}>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
                width: "150px",
              }}
            >
                <FormLabel className={classes.formLabel}>Air Condition</FormLabel>
                <RadioGroup
                  aria-label="AllowedCook"
                  name="aircond"
                  value={values.aircond}
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
            <Col lg={6}>
                <div
                style={{
                    textAlign: "left",
                    display: "inline-block",
                }}
                >
                <FormControl component="fieldset">
                    <FormLabel
                    className={classes.formLabel}
                    error={
                        touched.image && Boolean(errors.image)
                    }
                    style={{width:"400px"}}
                    >
                    Room Image
                    </FormLabel>
                    <Dropzonef  id="image" setFiles={setRoomImage} />
                    <Button  disabled={roomImage.length === 0 && true} variant="danger" onClick={uploadRoomImage}>Upload Image</Button>
                    <FormHelperText error={true}>
                    {touched.image ? errors.image : ""}
                    </FormHelperText>
                </FormControl>
                </div>
            </Col>
        </Row>
        <Row noGutters={true} className={classes.row}>
            <Col>
            <FormControl component="fieldset">
                <FormLabel
                    error={touched.description && Boolean(errors.description)}
                    className={classes.formLabel}
                >
                    Description
                </FormLabel>
                <TextField
                    id="description"
                    placeholder="Enter room description"
                    className={classes.textFieldlonglong}
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.description ? errors.description : ""}
                    error={touched.description && Boolean(errors.description)}
                    margin="dense"
                    variant="outlined"
                />
            </FormControl>
            </Col>
        </Row>
        <Row noGutters={true} className={classes.row}>
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
        </Row>
        </form>
    )
}

const AddRoomFormik = withFormik<addRoomMyFormProps, addRoomFormValue>({
    mapPropsToValues: (props) => {
      return {
        name : props.name || "",
        capacity : props.capacity || "",
        bathroom : props.bathroom || "",
        bedroom : props.bedroom || "",
        kitchen : props.kitchen || "",
        description : props.description || "",
        allowedSex : props.allowedSex || "male",
        aircond : props.aircond || "yes",
        image : props.image || [""],
        price : props.price || ""
      };
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
      capacity: Yup.string().required("Required").test("","Please enter positive number",value => {
          if (value) {  
            return parseInt(value) >= 0
          } 
          return false
      }),
      bathroom: Yup.string().required("Required").test("","Please enter positive number",value => {
        if (value) {  
          return parseInt(value) >= 0
        } 
        return false
    }),
      bedroom: Yup.string().required("Required").test("","Please enter positive number",value => {
        if (value) {  
          return parseInt(value) >= 0
        } 
        return false
    }),
      kitchen: Yup.string().required("Required").test("","Please enter positive number",value => {
        if (value) {  
          return parseInt(value) >= 0
        } 
        return false
    }),
      image: Yup.string().required("Required"),
      price: Yup.string().required("Required").test("","Please enter positive number",value => {
        if (value) {  
          return parseFloat(value) >= 0
        } 
        return false
    })
    }),
    handleSubmit: (values, { resetForm  , props}) => {
        if (props.editPos !== null) {
            const position = props.editPos
            props.setAllRoom(p => {
                var allrooms = p 
                allrooms[position] = values
                return allrooms
            })
        } else {
            props.setAllRoom(p => {
                return [...p , values]
            })
        }
        props.handleClose();
        resetForm();
        
    }
})(InnerForm);



const AddRoom = (props : AddRoomProps) => {
    const {editPos,editRoom,handleSuccess,setAllRoom,show,classes,handleClose} = props
    const room : addRoomFormValue = {...editRoom,["image"]:[""]}
    return (
        <>
        <Modal onHide={handleClose} dialogClassName="addroom" centered size="lg" show={show} >
            <Modal.Body>
                <AddRoomFormik editPos={editPos} {...room}  handleClose={handleSuccess} setAllRoom={setAllRoom} classes={classes} />
            </Modal.Body>
        </Modal>
        </>
    )
}
export default withStyles(styles)(AddRoom);