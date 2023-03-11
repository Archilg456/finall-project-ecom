import { Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "../../../applications";
import { generateProductFormValue } from "./generateProductFormValue";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { saveProduct } from "../../../redux";

export const ProductForm = () => {
  const {
    formValues: ProductFormValue,
    onInputChange: onProductInputChanged,
    setFormValues,
  } = useForm({
    defaultFormValues: generateProductFormValue(),
  });
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  const onSaveProduct = () => {
    const name = ProductFormValue.name.value;
    const description = ProductFormValue.description.value;
    const category = ProductFormValue.category.value;
    const brand = ProductFormValue.brand.value;
    const price = ProductFormValue.price.value;
    dispatch(
      saveProduct({
        product: { name, description, category, brand, price, image },
      })
    );
  };

  return (
    <FormControl sx={{ width: 750 }}>
      <TextField
        variant="outlined"
        name="name"
        label="Name"
        value={ProductFormValue.name.value}
        onChange={onProductInputChanged}
        error={!!ProductFormValue.name.error}
        helperText={ProductFormValue.name.error}
      />
      <TextField
        variant="outlined"
        name="description"
        value={ProductFormValue.description.value}
        onChange={onProductInputChanged}
        error={!!ProductFormValue.description.error}
        helperText={ProductFormValue.description.error}
        label="description"
      />
      <TextField
        variant="outlined"
        name="category"
        value={ProductFormValue.category.value}
        onChange={onProductInputChanged}
        error={!!ProductFormValue.category.error}
        helperText={ProductFormValue.category.error}
        label="category"
      />
      <TextField
        variant="outlined"
        name="brand"
        value={ProductFormValue.price.value}
        onChange={onProductInputChanged}
        error={!!ProductFormValue.brand.error}
        helperText={ProductFormValue.brand.error}
        label="brand"
      />
      <TextField
        variant="outlined"
        name="price"
        type="number"
        value={ProductFormValue.price.value}
        onChange={onProductInputChanged}
        error={!!ProductFormValue.price.error}
        helperText={ProductFormValue.description.error}
        label="price"
      />
      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) => {
          setImage(base64);
          console.log("base64:", base64);
        }}
      />
      <Button onClick={onSaveProduct}> Add </Button>
    </FormControl>
  );
};
