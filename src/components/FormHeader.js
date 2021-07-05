import React from 'react';
import { Pane, ChevronLeftIcon, Heading } from 'evergreen-ui';

const FormHeader = ({ title, onClickBack }) => {
  return (
    <Pane
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="10vh"
      position="relative"
    >
      <ChevronLeftIcon
        size={25}
        position="absolute"
        left="1.5rem"
        onClick={onClickBack}
      />
      <Heading size={700}>{title}</Heading>
    </Pane>
  )
}

export default FormHeader;
