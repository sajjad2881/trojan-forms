import React, { useState } from 'react';
import FormHeader from '../components/FormHeader';
import { useHistory } from 'react-router-dom';
import {
  Pane,
  Strong,
  TextInputField,
  Button,
  SavedIcon,
  CaretRightIcon,
  Checkbox
} from 'evergreen-ui';
import { useForm } from "react-hook-form";

const Unregistered = () => {
  const [checked, setChecked] = useState(false)
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onClickBack = () => {
    history.push("/details");
  }

  const onSubmit = (data) => {
    console.log("DATA", data);
  }

  return (
    <div>
      <FormHeader title="Unregistered" onClickBack={onClickBack} />
      <Pane padding="1rem">
        <Strong>Contact Info</Strong>
        <Pane padding="1rem">
        <TextInputField
            placeholder="Email"
            description="General Email"
            {...register("email")}
          />
          <TextInputField
            placeholder="Phone Number"
            description="Telephone"
            {...register("mobileNumber", {required: true, minLength: 6, maxLength: 12})}
          />
          <TextInputField
            disabled={checked}
            placeholder={checked ? "N/A" : "URL"}
            description="Website"
            {...register("websiteURL")}
          />
          <Checkbox
            label="I don't have a website"
            checked={checked}
            onChange={e => setChecked(e.target.checked)}
          />
        </Pane>
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
          >
            Next
          </Button>
        </Pane>
      </Pane>
    </div>
  )
}

export default Unregistered;
