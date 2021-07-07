import React from 'react'
import { Pane, Text } from 'evergreen-ui';

const CheckboxForm = ({
  name,
  description,
  register
}) => {
  return (
    <Pane display="flex" alignItems="center">
      <input
        name={name}
        type="checkbox"
        id={name}
        {...register(name)}
      />
      <Text marginLeft="1rem">{description}</Text>
    </Pane>
  );
}

export default CheckboxForm;
