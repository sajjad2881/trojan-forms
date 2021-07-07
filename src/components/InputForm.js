import React from 'react';
import { TextInputField } from 'evergreen-ui';

const InputForm = ({
  placeholder,
  register,
  name
}) => {
  return (
    <TextInputField
      placeholder={placeholder}
      {...register(name)}
    />
  )
}

export default InputForm;
