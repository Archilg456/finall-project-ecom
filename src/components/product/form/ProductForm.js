import { FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "../../../applications";
import { generateProductFormValue } from "./generateProductFormValue";
import FileBase from "react-file-base64";

export const ProductForm = () => {
  const {
    formValues: ProductFormValues,
    onInputChange,
    setFormValues,
  } = useForm({
    defaultFormValues: generateProductFormValue(),
  });
  const [image, setImage] = useState();

  return (
    <FormControl sx={{ width: 750 }}>
      <TextField
        name="name"
        value={ProductFormValues.name.value}
        onChange={onInputChange}
        error={!!ProductFormValues.name.error}
        helperText={ProductFormValues.name.error}
        label={"Name"}
      />
      <TextField
        name="description"
        value={ProductFormValues.description.value}
        onChange={onInputChange}
        error={!!ProductFormValues.description.error}
        helperText={ProductFormValues.description.error}
        label={"description"}
      />
      <TextField
        name="category"
        value={ProductFormValues.category.value}
        onChange={onInputChange}
        error={!!ProductFormValues.category.error}
        helperText={ProductFormValues.category.error}
        label={"category"}
      />
      <TextField
        name="brand"
        value={ProductFormValues.price.value}
        onChange={onInputChange}
        error={!!ProductFormValues.brand.error}
        helperText={ProductFormValues.brand.error}
        label={"brand"}
      />
      <TextField
        name="price"
        type="number"
        value={ProductFormValues.price.value}
        onChange={onInputChange}
        error={!!ProductFormValues.price.error}
        helperText={ProductFormValues.description.error}
        label={"price"}
      />
      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) => {
          setImage(base64);
          console.log("base64:", base64);
        }}
      />
    </FormControl>
  );
};
