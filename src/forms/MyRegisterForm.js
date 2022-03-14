import React from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from "../components/Button";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { AppContext } from '../context/AppContext'

const FormSchema = Yup.object({
    name_first:Yup.string().required("Required"),
    name_last:Yup.string().required("Required"),
    email:Yup.string().required("Required"),
    password:Yup.string().required("Required"),
});

export default function Form({user={name_first:"jacob", name_last:"jingleheimer", email:'z@z.com', password: "z"}}) {

    const initialValues={
        name_first: '',
        name_last: '',
        email: '',
        password: '',
    }

    const handleSubmit=(values)=>{
        console.log(values)
    }

    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values, {resetForm})=>{handleSubmit(values, resetForm)},
        enableReinitialize:true
    })

  return (
    <form onSubmit={formik.handleSubmit}>
    <TextField
        fullWidth
        id="name_first"
        name_first="First Name"
        type="text"
        sx={{ mb: 2, mt: 2 }}
        label="First Name"
        placeholder="My First Name"
        value={formik.values.name_first}
        onChange={formik.handleChange}
        error={formik.touched.name_first && Boolean(formik.errors.name_first)}
        helperText={formik.touched.name_first && formik.errors.name_first}
    />
    <TextField
        fullWidth
        id="name_last"
        name_last="Last Name"
        type="text"
        sx={{ mb: 2, mt: 2 }}
        label="Last Name"
        placeholder="My Last Name"
        value={formik.values.name_last}
        onChange={formik.handleChange}
        error={formik.touched.name_last && Boolean(formik.errors.name_last)}
        helperText={formik.touched.name_last && formik.errors.name_last}
    />
    <TextField
        fullWidth
        id="email"
        name="email"
        sx={{ mb: 2, mt: 2 }}
        type="text"
        label="Email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
    />
    <TextField
        fullWidth
        id="password"
        name="password"
        sx={{ mb: 2, mt: 2 }}
        type="text"
        label="Password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
    />

    <TextField
        fullWidth
        id="password-confirm"
        name="password"
        sx={{ mb: 2, mt: 2 }}
        type="text"
        label="Re Password"
        placeholder="Re Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
    />

    <Button type="submit" sx={{ width: "100%" }}>Register</Button>

    </form>
  );
};