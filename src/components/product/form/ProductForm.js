import { Button, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "../../../applications";
import { generateProductFormValue } from "./generateProductFormValue";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import {
  saveProduct,
  setSelectedProduct,
  useSelectedProduct,
} from "../../../redux";
import { useNavigate } from "react-router-dom";

export const ProductForm = () => {
  const {
    formValues: productFormValues,
    onInputChange: onProductInputChanged,
    setFormValues,
  } = useForm({
    defaultFormValues: generateProductFormValue(),
  });
  const [image, setImage] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedProduct = useSelectedProduct();

  const onSaveProduct = () => {
    const name = productFormValues.name.value;
    const description = productFormValues.description.value;
    const category = productFormValues.category.value;
    const brand = productFormValues.brand.value;
    const price = productFormValues.price.value;
    dispatch(
      saveProduct({
        product: { name, description, category, brand, price, image },
        isUpdating: !!selectedProduct,
        id: selectedProduct?._id,
      })
    )
      .unwrap()
      .then(() => {
        dispatch(setSelectedProduct(null));
        navigate("/")
      });
  };

  useEffect(() => {
    if (selectedProduct) {
      setFormValues(generateProductFormValue(selectedProduct));
      setImage(selectedProduct.image);
    }
  }, [selectedProduct]);

  return (
    <FormControl sx={{ width: 750 }}>
      <TextField
        variant="outlined"
        name="name"
        label="Name"
        value={productFormValues.name.value}
        onChange={onProductInputChanged}
        error={!!productFormValues.name.error}
        helperText={productFormValues.name.error}
      />
      <TextField
        variant="outlined"
        name="description"
        value={productFormValues.description.value}
        onChange={onProductInputChanged}
        error={!!productFormValues.description.error}
        helperText={productFormValues.description.error}
        label="description"
      />
      <TextField
        variant="outlined"
        name="category"
        value={productFormValues.category.value}
        onChange={onProductInputChanged}
        error={!!productFormValues.category.error}
        helperText={productFormValues.category.error}
        label="category"
      />
      <TextField
        variant="outlined"
        name="brand"
        value={productFormValues.brand.value}
        onChange={onProductInputChanged}
        error={!!productFormValues.brand.error}
        helperText={productFormValues.brand.error}
        label="brand"
      />
      <TextField
        variant="outlined"
        name="price"
        type="number"
        value={productFormValues.price.value}
        onChange={onProductInputChanged}
        error={!!productFormValues.price.error}
        helperText={productFormValues.price.error}
        label="price"
      />

      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) => {
          setImage(base64);
        }}
      />
      <Button onClick={onSaveProduct}> Add </Button>
    </FormControl>
  );
};
