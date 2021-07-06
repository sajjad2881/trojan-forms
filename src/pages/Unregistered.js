import React from 'react';
import FormHeader from '../components/FormHeader';
import { useHistory } from 'react-router-dom';
const Unregistered = () => {
  const history = useHistory();

  const onClickBack = () => {
    history.push("/details");
  }

  return (
    <div>
      <FormHeader title="Unregistered" onClickBack={onClickBack} />
    </div>
  )
}

export default Unregistered;
