import React, { useState, useEffect } from "react"
import { Grid } from "@material-ui/core"
import Controls from "../components/controls/Controls"
import { useForm, Form } from "../components/useForm"
// import empservice from "../services/employeeService"

const initialFValues = {
  id: 0,
  firstName: "",
  lasttName: "",
  email: "",
  password: "",
  city: "",
}

export default function EmployeeForm() {
  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ("firstName" in fieldValues)
      temp.fullName = fieldValues.firstName ? "" : "This field is required."
    if ("LasrName" in fieldValues)
      temp.fullName = fieldValues.lastName ? "" : "This field is required."
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid."

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
    if (validate()) console.log(values)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={8}>
          <Controls.Input
            name="firstName"
            label="First Name"
            value={values.firstName}
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
