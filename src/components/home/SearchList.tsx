import React from "react";
import { FormikProps, withFormik } from "formik";
import * as Yup from "yup";
import {Row, Col, Button} from "react-bootstrap";
import {
  withStyles,
  createStyles,
  FormLabel,
  InputLabel,
  TextField,
  FormGroup,
  MenuItem,
  FormHelperText,
  FormControl,
  FormControlLabel,
  Select,
  Checkbox
} from "@material-ui/core";
import { QueryParams } from "../newType";

const styles = createStyles({
  formControl: {
    minWidth: 120,
    margin: "1%",
    marginTop: "-5px",
  },
  formSpace: {
    margin: "1%",
  },
});

interface FormValue {
  dormName : string,
  price : string,
  distance : string,
  maxPerson : string,
  rating : string,
  dormType : string,
  gender : string,
  convenienceStore : boolean,
  kitchen : string,
  bedroom : string,
  bathroom : string,
  laundry : boolean,
  parking : boolean,
  pet : boolean,
  internet : boolean,
  smoking : boolean,
  fitness : boolean,
  pool : boolean,
  cooking : boolean,
  aircond : string,
  restaurant : boolean,
  commonroom : boolean,
  restroom : boolean

}
interface MyFormProps {
  dormName? : string,
  price? : string,
  distance? : string,
  maxPerson? : string,
  rating? : string,
  dormType? : string,
  gender? : string,
  convenienceStore? : boolean,
  kitchen? : string,
  bedroom? : string,
  bathroom? : string,
  laundry? : boolean,
  parking? : boolean,
  pet? : boolean,
  internet? : boolean,
  smoking? : boolean,
  fitness? : boolean,
  pool? : boolean,
  cooking? : boolean,
  aircond? : string,
  restaurant? : boolean,
  commonroom? : boolean,
  restroom? : boolean,
  handleSubmit : (form : QueryParams) => void,
}
interface Style {
  classes? : any
}

function SearchList(props: FormikProps<FormValue> & Style) {
  const {
    classes,
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;
  return (
      <form onSubmit={handleSubmit}>
        <Row style={{margin:"2%"}} noGutters={true}>
          <Col>
          <TextField
            onChange={handleChange}
            value={values.dormName}
            className={classes.formSpace}
            id="dormName"
            label="DormName"
            margin="dense"
            variant="outlined"
            onBlur={handleBlur}
            helperText={touched.dormName ? errors.dormName : ""}
            error={touched.dormName && Boolean(errors.dormName)}
          />
          </Col>
          <Col>
          <TextField
            onChange={handleChange}
            value={values.distance}
            className={classes.formSpace}
            id="distance"
            label="Distance(KM)"
            margin="dense"
            variant="outlined"
            type="number"
            onBlur={handleBlur}
            helperText={touched.distance ? errors.distance : ""}
            error={touched.distance && Boolean(errors.distance)}
          />
          </Col>
          <Col>
          <TextField
            onChange={handleChange}
            value={values.maxPerson}
            className={classes.formSpace}
            id="maxPerson"
            label="Max Person"
            margin="dense"
            variant="outlined"
            type="number"
            onBlur={handleBlur}
            helperText={touched.maxPerson ? errors.maxPerson : ""}
            error={touched.maxPerson && Boolean(errors.maxPerson)}
          />
          </Col>
          <Col>
          <TextField
            className={classes.formSpace}
            onChange={handleChange}
            value={values.price}
            id="price"
            label="Price"
            margin="dense"
            variant="outlined"
            type="number"
            onBlur={handleBlur}
            helperText={touched.price ? errors.price : ""}
            error={touched.price && Boolean(errors.price)}
          />
          </Col>
        </Row>
        <Row style={{margin:"2%"}}  noGutters={true}>
          <Col>
          <TextField
            onChange={handleChange}
            value={values.rating}
            className={classes.formSpace}
            id="rating"
            label="Rating"
            margin="dense"
            variant="outlined"
            type="number"
            onBlur={handleBlur}
            helperText={touched.rating ? errors.rating : ""}
            error={touched.rating && Boolean(errors.rating)}
          />
          </Col>
          <Col>
          <TextField
            onChange={handleChange}
            value={values.kitchen}
            className={classes.formSpace}
            id="kitchen"
            label="Kitchen"
            margin="dense"
            variant="outlined"
            type="number"
            onBlur={handleBlur}
            helperText={touched.kitchen ? errors.kitchen : ""}
            error={touched.kitchen && Boolean(errors.kitchen)}
          />
          </Col>
          <Col>
          <TextField
            onChange={handleChange}
            value={values.bathroom}
            className={classes.formSpace}
            id="bathroom"
            label="Bathroom"
            margin="dense"
            variant="outlined"
            type="number"
            onBlur={handleBlur}
            helperText={touched.bathroom ? errors.bathroom : ""}
            error={touched.bathroom && Boolean(errors.bathroom)}
          />
          </Col>
          <Col>
          <TextField
            onChange={handleChange}
            value={values.bedroom}
            className={classes.formSpace}
            id="bedroom"
            label="Bedroom"
            margin="dense"
            variant="outlined"
            type="number"
            onBlur={handleBlur}
            helperText={touched.bedroom ? errors.bedroom : ""}
            error={touched.bedroom && Boolean(errors.bedroom)}
          />
          </Col>
        </Row>
        <Row style={{margin:"2%"}} noGutters={true}>
          <Col>
          <TextField
            onChange={handleChange}
            value={values.aircond}
            className={classes.formSpace}
            id="aircond"
            label="Air conditioner"
            margin="dense"
            variant="outlined"
            type="number"
            onBlur={handleBlur}
            helperText={touched.aircond ? errors.aircond : ""}
            error={touched.aircond && Boolean(errors.aircond)}
          />            
          </Col>
          <Col>
          <FormControl className={classes.formControl}>
            <InputLabel>DormType</InputLabel>
            <Select
              value={values.dormType}
              onChange={handleChange("dormType")}
              onBlur={handleBlur("dormType")}
              id="dormType"
              error={touched.dormType && Boolean(errors.dormType)}
            >
              <MenuItem value="dorm">Dorm</MenuItem>
              <MenuItem value="condo">Condo</MenuItem>
              <MenuItem value="apartment">Apartment</MenuItem>
              <MenuItem value="flat">Flat</MenuItem>
              <MenuItem value="hostel">Hostel</MenuItem>
              <MenuItem value="house">House</MenuItem>
            </Select>
            <FormHelperText error={true}>
              {touched.dormType ? errors.dormType : ""}
            </FormHelperText>
          </FormControl>
          </Col> 
          <Col>
          <FormControl className={classes.formControl} >
            <InputLabel>Gender</InputLabel>
            <Select
              value={values.gender}
              onChange={handleChange("gender")}
              onBlur={handleBlur("gender")}
              id="gender"
              error={touched.gender && Boolean(errors.gender)}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="any">Any</MenuItem>
            </Select>
            <FormHelperText error={true}>
              {touched.gender ? errors.gender : ""}
            </FormHelperText>
          </FormControl>
          </Col>
          <Col>
          </Col>
        </Row>
          <FormGroup>
            <Row style={{margin:"0 2%"}} noGutters={true}>
              <Col>
                <FormLabel style={{ color: "black" }}>Utilities</FormLabel>
              </Col>
            </Row>
            <Row style={{margin:"0 2%"}} noGutters={true}>
              <Col>
                <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange}
                    value={values.convenienceStore}
                    name="convenienceStore"
                    color="primary"
                  />
                }
                label="Convenience Store"
                />
              </Col>
              <Col>
                <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange}
                    value={values.laundry}
                    name="laundry"
                    color="primary"
                  />
                }
                label="Laundry"
                />
              </Col>
              <Col>
                <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange}
                    value={values.parking}
                    name="parking"
                    color="primary"
                  />
                }
                label="Parking"
                />
              </Col>
              <Col>
                <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange}
                    value={values.pet}
                    name="pet"
                    color="primary"
                  />
                }
                label="Pet"
                />

              </Col>
            </Row>
            <Row style={{margin:"0 2%"}} noGutters={true}>
                <Col>
                  <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChange}
                      value={values.internet}
                      name="internet"
                      color="primary"
                    />
                    }
                  label="Internet"
                  />
                </Col>
                <Col>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleChange}
                        value={values.smoking}
                        name="smoking"
                        color="primary"
                      />
                    }
                    label="Smoking Area"
                  />
                </Col>
                <Col>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleChange}
                        value={values.fitness}
                        name="fitness"
                        color="primary"
                      />
                    }
                    label="Fitness"
                  />
                </Col>
                <Col>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleChange}
                        value={values.pool}
                        name="pool"
                        color="primary"
                      />
                    }
                    label="Pool"
                  />
                </Col>                
            </Row>
            <Row style={{margin:"0 2%"}} noGutters={true}>
              <Col>
                <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange}
                    value={values.cooking}
                    name="cooking"
                    color="primary"
                  />
                }
                label="Cooking"
                />
              </Col>
              <Col>
                <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange}
                    value={values.restaurant}
                    name="restaurant"
                    color="primary"
                  />
                }
                label="Restaurant"
                />
              </Col>
              <Col>
                <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange}
                    value={values.restroom}
                    name="restroom"
                    color="primary"
                  />
                }
                label="Restroom"
                />
              </Col>
              <Col>
                <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange}
                    value={values.commonroom}
                    name="commonroom"
                    color="primary"
                  />
                }
                label="Commonroom"
                />
              </Col>
            </Row>
          </FormGroup>
          <Row noGutters={true}>
            <Col style={{textAlign:"right"}}>
              <Button style={{marginRight:"10px"}} variant="secondary" onClick={handleReset}>
                Clear
              </Button>
              <Button
                disabled={isSubmitting}
                type="submit"
                variant="danger"
              >
                Search
              </Button>
            </Col>

          </Row>
      </form>
  );
}
const SearchFilter = withFormik<MyFormProps,FormValue>({
  mapPropsToValues: props => {
    return {
      dormName: props.dormName || "",
      price: props.price || "",
      distance: props.distance || "",
      maxPerson: props.maxPerson || "",
      rating: props.rating || "",
      gender: props.gender || "",
      dormType: props.dormType || "",
      convenienceStore: props.convenienceStore || false,
      kitchen: props.kitchen || "",
      laundry: props.laundry || false,
      parking: props.parking || false,
      pet: props.pet || false,
      internet: props.internet || false,
      smoking: props.smoking || false,
      fitness: props.fitness || false,
      pool: props.pool || false,
      cooking: props.cooking || false,
      aircond: props.aircond || "",
      bedroom: props.bedroom || "",
      bathroom : props.bathroom || "",
      restroom : props.restroom || false,
      commonroom : props.commonroom || false,
      restaurant : props.restaurant || false
    };
  },
  validationSchema: Yup.object().shape({
    bathroom: Yup.string().test("","Please enter positive number",value => {
      if (value) {
        return parseInt(value) >= 0
      } else {
        return true
      }
    }),
    bedroom: Yup.string().test("","Please enter positive number",value => {
      if (value) {
        return parseInt(value) >= 0
      } else {
        return true
      }
    }),
    kitchen: Yup.string().test("","Please enter positive number",value => {
      if (value) {
        return parseInt(value) >= 0
      } else {
        return true
      }
    }),
    aircond: Yup.string().test("","Please enter positive number",value => {
      if (value) {
        return parseInt(value) >= 0
      } else {
        return true
      }
    }),
    price: Yup.string().test("","Please enter positive number",value => {
      if (value) {
        return parseInt(value) >= 0
      } else {
        return true
      }
    }),  
    distance: Yup.string().test("","Please enter positive number",value => {
      if (value) {
        return parseInt(value) >= 0
      } else {
        return true
      }
    }),  
    maxPerson: Yup.string().test("","Please enter positive number",value => {
      if (value) {
        return parseInt(value) >= 0
      } else {
        return true
      }
    }),
    rating: Yup.string().test("","Please enter positive number",value => {
      if (value) {
        return parseInt(value) >= 0
      } else {
        return true
      }
    }),
  }),

  handleSubmit: (values, { resetForm , props }) => {
    console.log(values)
    const form : QueryParams = {}
    if (values.fitness) {
      form.fitness = "fitness"
    }
    if (values.internet) {
      form.internet = "internet"
    } 
    if (values.distance !== "") {
      form.distance = values.distance
    }
    if (values.convenienceStore) {
      form.convenienceStore = "convenienceStore"
    }
    if (values.cooking) {
      form.cooking = "cooking"
    }
    if (values.laundry) {
      form.laundry = "laundry"
    }
    if (values.parking) {
      form.parking = "parking"
    }
    if (values.smoking) {
      form.smoking = "smoking"
    }
    if (values.pet) {
      form.pet = "pet"
    }
    if (values.pool) {
      form.pool = "pool"
    }
    if (values.restaurant) {
      form.restaurant = "restaurant"
    }
    if (values.restroom) {
      form.restroom = "restroom"
    }
    if (values.commonroom) {
      form.commonroom = "commonroom"
    }
    if (values.gender !== "") {
      form.allowedSex = values.gender
    }
    if (values.dormType !== "") {
      form.type = values.dormType
    } 
    if (values.dormName !== "") {
      form.name = values.dormName
    }
    if (values.rating !== "") {
      form.avgStar = values.rating
    }
    if (values.price !== "") {
      form.price = values.price
    }
    if (values.maxPerson !== "") {
      form.maxperson = values.maxPerson
    }
    if (values.aircond !== "") {
      form.airCond = values.aircond
    }
    if (values.bedroom !== "") {
      form.bedroom = values.bedroom
    }
    if (values.kitchen !== "" ) {
      form.kitchen = values.kitchen
    }
    if (values.bathroom !== "" ) {
      form.bathroom = values.bathroom
    }
    console.log(form)
    props.handleSubmit(form);
    
    resetForm();
  },
})(SearchList);
export default withStyles(styles)(SearchFilter);
