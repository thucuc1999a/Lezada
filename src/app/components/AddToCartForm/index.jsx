import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import QuantityField from "./../QuantityField";
import "./style.scss";
AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
  const schema = yup.object({
    quantity: yup
      .number()
      .required("please info number of quantity")
      .min(1,"Min 1")
      .typeError("Please choose quantity of product"),
  });
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema)
  });
  
  const handleSubmit = async (values) => {
    if (!!onSubmit) {
      await onSubmit(values);
    }
    
    
  };


  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField name="quantity" label="Quantity" form={form} />
      <br/>
      <Button type="submit"  className="btn_buy"> 
        Add to cart
      </Button>
    </form>
  );
}

export default AddToCartForm;
