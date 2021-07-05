import React, { useState } from 'react'
import FormHeader from '../components/FormHeader';
import { useHistory } from "react-router-dom";
import { Pane,
  Strong,
  Checkbox,
  SelectField,
  Button,
  SavedIcon,
  CaretRightIcon
} from 'evergreen-ui';

const PaymentMethod = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    bankAccount: false,
    debitCredit: false,
    deductBankAccount: "business",
    deductDebitCredit: "business"
  });

  const onClickBack = () => {
    history.push("/details");
  }

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div style={{height: "100%"}}>
      <FormHeader title="Payment Details (2/5)" onClickBack={onClickBack} />
      <Pane display="flex" flexDirection="column" justifyContent="space-between" height="100%">
        <Pane padding="1rem">
          <Strong size={300}>Accept Payment from:</Strong>
          <Pane marginX={24} marginBottom={48}>
            <Checkbox
              label="Bank Account"
              checked={formData.bankAccount}
              onChange={(e) => setFormData({ ...formData,  bankAccount: e.target.checked })}
            />
            <Checkbox
              label="Debit/Credit Card"
              checked={formData.debitCredit}
              onChange={(e) => setFormData({ ...formData,  debitCredit: e.target.checked })}
            />
          </Pane>
          <Strong size={300}>Deduct Payment Charges for:</Strong>
          <Pane marginX={24}>
            <SelectField
              name="deductBankAccount"
              value={formData.deductBankAccount}
              hint="Bank Account"
              width="100%"
              style={{height: "5rem"}}
              onChange={onChange}
            >
              <option value="business" selected>
                Business
              </option>
              <option value="customer">
                Customer
              </option>
            </SelectField>
            <SelectField
              name="deductDebitCredit"
              value={formData.deductDebitCredit}
              hint="Debit/Credit"
              width="100%"
              style={{height: "5rem"}}
              onChange={onChange}
              marginBottom="2rem"
            >
              <option value="business" selected>
                Business
              </option>
              <option value="customer">
                Customer
              </option>
            </SelectField>
          </Pane>
        </Pane>
        <div>
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
        </div>
      </Pane>
    </div>
  )
}

export default PaymentMethod;
