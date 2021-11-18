import React from "react"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import { Typography, Grid, Card } from "@material-ui/core"
import styled from "styled-components"
import CheckIcon from "@material-ui/icons/Check"
import Button from '@mui/material/Button';

const ButtonGrid = styled(Grid)`
  margin-top: 30px;
  margin-bottom: 0px;
  text-align: center;
`

const SuccessCard = styled(Card)`
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 14px;
  padding-bottom: 10px;
`

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export const ContactForm = () => {
  const formName = "Contact"
  const [formData, setFormData] = React.useState({ name: "", email: "", comment:"" })

  const textFieldProps = (name) => ({
    disabled: loading,
    variant: "outlined",
    fullWidth: true,
    onChange: handleFormDataChange,
    value: formData[name],
    name,
  })

  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(false)

  const handleFormDataChange = (event) => {
    if (!event || !event.target) {
      return
    }

    event.persist()
    setFormData((oldFormData) => ({
      ...oldFormData,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = (event) => {
    setLoading(true)

    fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": formName, ...formData }),
    })
      .then(() => setSuccess(true))
      .catch(setError)
      .finally(() => setLoading(false))

    event.preventDefault()
  }

  return (
    <ValidatorForm
      name={formName}
      onSubmit={handleSubmit}
      method="post"
      onError={setError}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <Grid container justify="center">
        <Grid item xs={12} sm={10} md={6} xl={4}>    
            <React.Fragment>
              {success ? (
                <SuccessCard>
                  <Grid container spacing={1}>
                    <Grid item>
                      <CheckIcon color="primary" />
                    </Grid>
                    <Grid item xs={11}>
                      <Typography>The form has been sent!</Typography>
                    </Grid>
                  </Grid>
                </SuccessCard>
              ) : (
                ""
              )}
            </React.Fragment>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value={formName} />
            <TextValidator
              {...textFieldProps("name")}
              errorMessages="A name is required"
              validators={['required']}
              label="Name"
              style={{marginBottom: "15px"}}
            />
            <TextValidator
              {...textFieldProps("email")}
              validators={["required", "isEmail"]}
              style={{marginBottom: "15px"}}
              errorMessages="A correct email is required."
              label="E-Mail"
            />
            <TextValidator
                {...textFieldProps("remarks")}
                label="Message"
                validators={['required']}
                errorMessages="A message is required"
                rows={3}
                multiline
            />
            <ButtonGrid item xs={12}>
              <Button size="large" variant="contained" type="submit">Send</Button>
            </ButtonGrid>
        </Grid>
      </Grid>
    </ValidatorForm>
  )
}
