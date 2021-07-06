import React from 'react';
import FormHeader from '../components/FormHeader';
import { useHistory } from "react-router-dom";
import {
  Pane,
  Strong,
  TextInputField,
  SelectField,
  SavedIcon,
  CaretRightIcon,
  Button,
  Text
} from 'evergreen-ui';
import { useForm } from "react-hook-form";
import {
  industries,
  staffSizes,
  businessTypes,
  registrationTypes
} from "../utils/data";

const REGISTERED = "registered business";
const UNREGISTERED = "starter business";

const BusinessDetailsForm = () => {
  const history = useHistory();
  const { register, handleSubmit, watch } = useForm();
  const formBusinessType = watch("businessType")

  const onClickBack = () => {
    history.push("/");
  }

  const onSubmit = (data) => {
    console.log("DATA", data)
  };

  const registeredBusinessSelected = () => {
    return formBusinessType === REGISTERED;
  }

  const onClickNext = () => {
    if(formBusinessType === UNREGISTERED) history.push("/unregistered")
  }

  return (
    <div>
      <FormHeader title="Business Details (1/5)" onClickBack={onClickBack} />
      <Pane padding="1rem">
        <Strong>Tell us about your business</Strong>
        <TextInputField
          placeholder="Commercial Name"
          description="Name"
          {...register("name")}
        />
        <SelectField
          name="industry"
          marginBottom="2rem"
          description="Industry"
          {...register("industry")}
        >
          {industries.map((industry, idx) => {
            return (
              <option value={`${industry.toLowerCase()}`} selected={idx === 0}>
                {industry}
              </option>
            )
          })}
        </SelectField>
        <SelectField
          marginBottom="2rem"
          description="Staff Size"
          {...register("staffSize")}
        >
          {staffSizes.map((size, idx) => {
            return (
              <option value={`${size.toLowerCase()}`} selected={idx === 0}>
                {size}
              </option>
            )
          })}
        </SelectField>
        <Strong>What Safepay services will you use?</Strong>
        <Pane marginBottom="2rem">
          <Pane display="flex" alignItems="center">
            <input name="checkout" type="checkbox" {...register('checkout')} id="checkout" />
            <Text marginLeft="1rem">Checkout</Text>
          </Pane>
          <Pane display="flex" alignItems="center">
            <input name="quicklinks" type="checkbox" {...register('quicklinks')} id="quicklinks" />
            <Text marginLeft="1rem">Quick Links</Text>
          </Pane>
          <Pane display="flex" alignItems="center">
            <input name="billPayments" type="checkbox" {...register('billPayments')} id="billPayments" />
            <Text marginLeft="1rem">Bill Payments</Text>
          </Pane>
        </Pane>
        <SelectField
          marginBottom="2rem"
          description="Business Type"
          {...register("businessType")}
        >
          {businessTypes.map((type, idx) => {
            return (
              <option value={`${type.toLowerCase()}`} selected={idx === 0}>
                {type}
              </option>
            )
          })}
        </SelectField>
        {
          registeredBusinessSelected() &&
            <Pane>
              <TextInputField
                description="Legal Business Name"
                {...register("legalBusinessName")}
              />
              <SelectField
                marginBottom="2rem"
                description="Registration Type"
                {...register("registrationType")}
              >
                {registrationTypes.map((type, idx) => {
                  return (
                    <option value={`${type.toLowerCase()}`} selected={idx === 0}>
                      {type}
                    </option>
                  )
                })}
              </SelectField>
            </Pane>
        }
        <Pane display="flex" justifyContent="space-between">
          <Button
            height="45px"
            width="48%"
            iconBefore={SavedIcon}
            backgroundColor="#ffa700"
            color="white"
            fontSize={24}
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
          <Button
            height="45px"
            width="48%"
            iconBefore={CaretRightIcon}
            backgroundColor="#193A8C"
            color="white"
            fontSize={24}
            onClick={onClickNext}
          >
            Next
          </Button>
        </Pane>
      </Pane>
    </div>
  )
}

export default BusinessDetailsForm;
