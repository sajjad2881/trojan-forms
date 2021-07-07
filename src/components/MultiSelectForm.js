import React from 'react';
import { SelectField } from 'evergreen-ui';

const MultiSelectForm = ({
  name,
  description,
  register,
  options,
  marginBottom="2rem"
}) => {
  return (
    <SelectField
      name={name}
      marginBottom={marginBottom}
      description={description}
      {...register(name)}
    >
      {options.map((option, idx) => {
        return (
          <option value={`${option.toLowerCase()}`} selected={idx === 0}>
            {option}
          </option>
        )
      })}
    </SelectField>
  );
}

export default MultiSelectForm;
