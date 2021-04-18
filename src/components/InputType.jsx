import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export default function InputType({ placeholder, id, type, name }) {
  return (
    <React.Fragment>
      <input placeholder={placeholder} id={id} type={type} name={name} />
    </React.Fragment>
  );
}
