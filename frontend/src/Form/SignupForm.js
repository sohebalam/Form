import React, { useState, useEffect } from "react"
import { Grid } from "@material-ui/core"
import Controls from "../components/controls/Controls"
import { useForm, Form } from "../components/useForm"

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
]

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
}

export default function EmployeeForm() {
  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required."
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid."
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
    if ("departmentId" in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length != 0 ? "" : "This field is required."
    setErrors({
      ...temp,
    })

    if (fieldValues == values) return Object.values(temp).every((x) => x == "")
  }

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFValues, true, validate)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={8}>
          <Controls.Input
            name="firstName"
            label="First Name"
            value={values.fisrtName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            name="lastName"
            label="Last Name"
            value={values.lastName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            label="Password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
            error={errors.email}
          />

          <Controls.Input
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          />

          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Form>
  )
}
