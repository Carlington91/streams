import React, { useState, useEffect } from 'react';

const StreamForm = ({ onSubmit, initialValues, btnText }) => {
  const [state, setState] = useState({
    title: '',
    description: '',
    errors: {},
  });

  const { title, description, errors } = state;
  console.log('initialValues: ', initialValues);
  console.log(state);
  useEffect(() => {
    if (initialValues) {
      setState({ ...state, ...initialValues });
    }
    //eslint-disable-next-line
  }, [initialValues]);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const validation = () => {
    let err = {};
    if (!title) err.title = 'Title is required';
    if (!description) err.description = 'Description is required';
    if (Object.keys(err).length === 0) {
      return true;
    }
    setState({ ...state, errors: err });
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      onSubmit({ title, description });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Title'
          name='title'
          type='text'
          value={title}
          onChange={handleChange}
          placeholder='Enter title...'
          error={errors.title}
          required
          className='form-control'
        />

        <FormInput
          label='Description'
          name='description'
          type='text'
          value={description}
          onChange={handleChange}
          placeholder='Enter description...'
          error={errors.description}
          required
          className='form-control'
        />

        <div className='form-group'>
          <button className='btn btn-primary shadow'>{btnText} Stream</button>
        </div>
      </form>
    </div>
  );
};

export default StreamForm;

const FormInput = (props) => {
  const {
    label,
    type,
    name,
    value,
    placeholder,
    className,
    onChange,
    error,
    onBlur,
  } = props;

  return (
    <div className='form-group'>
      <label htmlFor={name} className='my-1'>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
        style={error && { border: 'solid 1px red' }}
        autoComplete='off'
        onBlur={onBlur}
      />
      {error && <small>{error}</small>}
    </div>
  );
};
