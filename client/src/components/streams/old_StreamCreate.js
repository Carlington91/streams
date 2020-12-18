import React from 'react';
import { Field, reduxForm } from 'redux-form';

const StreamCreate = (props) => {
  console.log(props);
  const { handleSubmit, pristine, submitting } = props;

  const FormInput = ({ label, name, component, type }) => {
    return (
      <div className='form-group'>
        <label>{label}</label>
        <Field
          name={name}
          component={component}
          type={type}
          className='form-control'
        />
      </div>
    );
  };

  return (
    <div>
      Create Stream
      <form onSubmit={handleSubmit}>
        <FormInput label='Title' name='title' component='input' type='text' />
        <FormInput
          label='Description'
          name='description'
          component='textarea'
          type='text'
        />

        <div className='form-group mt-5'>
          <button
            className='btn btn-success'
            type='submit'
            disabled={pristine || submitting}
          >
            Create Stream
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);
