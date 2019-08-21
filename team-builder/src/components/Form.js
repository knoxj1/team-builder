import React, { useState, useEffect } from 'react';

export default function Form(props) {

  const [inputs, setInputs] = useState({});
  const setter = props.setter;

  const submitHandler = event => {
    event.preventDefault();
    setter(inputs);
  };

  useEffect(() => {
    if(props.memberToEdit) setInputs(props.memberToEdit);
  }, [props.memberToEdit]);

  const updateField = event => {
    setInputs({...inputs, [event.target.name]: event.target.value});
  };

  return (
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>{props.memberToEdit ? 'Edit Member' : 'Sign Up'}</legend>
          <div>
            <label>
              Username
              <div>
                <input type={'text'}
                       name={'username'}
                       placeholder={'Enter your username'}
                       value={inputs.username}
                       onChange={updateField}
                />
              </div>
            </label>
          </div>
          <div>
            <label>
              Email
              <div>
                <input type={'email'}
                       name={'email'}
                       placeholder={'example@domain.com'}
                       value={inputs.email}
                       onChange={updateField}
                />
              </div>
            </label>
          </div>
          <div>
            <label>
              Role
              <div>
                <input type={'text'}
                       name={'role'}
                       placeholder={'Role'}
                       value={inputs.role}
                       onChange={updateField}
                />
              </div>
            </label>
          </div>
          <button type={'submit'}>Submit</button>
        </fieldset>
      </form>
  );
}
