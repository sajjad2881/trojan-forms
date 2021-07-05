import React, { useState } from 'react';
import FormHeader from '../components/FormHeader';
import { useHistory } from "react-router-dom";
import { Pane,
         Strong,
         TextInputField,
         SelectField,
         SavedIcon,
         CaretRightIcon,
         Button
       } from 'evergreen-ui';

const BusinessDetailsForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    email: '',
    phone: '',
    typeOfBusiness: '',
    businessCategory: ''
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const onClickBack = () => {
    history.push("/");
  }

  return (
    <div>
      <FormHeader title="Business Details (1/5)" onClickBack={onClickBack} />
      <Pane padding="1rem">
        <Strong size={300}>Tell us about your business</Strong>
        <TextInputField
          name="name"
          value={formData.name}
          placeholder="Brand/Shop Name"
          hint="Name your customer will see"
          marginTop="1.5rem"
          width="100%"
          style={{height: "5rem"}}
          onChange={onChange}
        />
        <TextInputField
          name="description"
          value={formData.description}
          placeholder="Business Description"
          hint="Enter business description here"
          width="100%"
          style={{height: "5rem"}}
          onChange={onChange}
        />
        <TextInputField
          name="email"
          value={formData.email}
          placeholder="Email Address"
          hint="Enter your e-mail address here"
          marginTop="1.5rem"
          width="100%"
          style={{height: "5rem"}}
          onChange={onChange}
        />
        <TextInputField
          name="phone"
          value={formData.phone}
          placeholder="Mobile Number"
          hint="Enter your phone number here"
          width="100%"
          autoComplete="off"
          style={{height: "5rem"}}
          onChange={onChange}
        />
        <SelectField
          name="typeOfBusiness"
          value={formData.typeOfBusiness}
          hint="Type of Business"
          width="100%"
          style={{height: "5rem"}}
          onChange={onChange}
          marginBottom="2rem"
        >
          <option value="individual" selected>
            Individual
          </option>
          <option value="sole proprietor">
            Sole Proprietor
          </option>
          <option value="partnership">
            Partnership
          </option>
          <option value="private limited company">
            Private Limited Company
          </option>
          <option value="public limited company">
            Public Limited Company
          </option>
        </SelectField>
        <SelectField
          name="businessCategory"
          value={formData.businessCategory}
          hint="Business Category"
          width="100%"
          style={{height: "5rem"}}
          onChange={onChange}
        >
          <option value="variety store" selected>
            Variety Store
          </option>
          <option value="general store">
            General Store
          </option>
          <option value="bus lines">
            Bus Lines
          </option>
          <option value="taxi cabs/limousines">
            Tax Cabs/Limousines
          </option>
          <option value="motion picture theatre">
            Motion Picture Theatre
          </option>
          <option value="education">
            Education
          </option>
          <option value="all other mcc">
            All Other MCC
          </option>
          <option value="hospitality">
            Motion Picture Theatre
          </option>
        </SelectField>
        <Pane display="flex" justifyContent="space-between">
          <Button
            height="45px"
            width="48%"
            iconBefore={SavedIcon}
            backgroundColor="#ffa700"
            color="white"
            fontSize={24}
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
            onClick={() => history.push('/payment')}
          >
            Next
          </Button>
        </Pane>
      </Pane>
    </div>
  )
}

export default BusinessDetailsForm;
