import React from 'react';
import { Field } from 'react-final-form';

// Class names list:
// input__wrap
// input__label (not required)
// input
// input--error
// input__error-wrap
// input__error-text

const FormField = (props) => {
  const {
    className = 'input',
    serverErrors,
    setServerErrors,
    name,
    placeholderText = '',
    labelText = '',
    type = 'text',
    isReadOnly = false,
    isShowLabel = false,
  } = props;

  const hideServerErrorOnChange = (e, input) => {
    input.onChange(e);

    serverErrors[name] && setServerErrors(name, undefined);
  };

  const isErrorExist = (meta) => {
    if (meta.error && meta.touched && !meta.active) { // Validation Error
      return true;
    }
    else if (!meta.error && serverErrors[name]) { // Server Error
      return true;
    }

    return false;
  }

  const getErrorText = (meta) => {
    if (meta.error && meta.touched && !meta.active) { // Validation Error
      return meta.error;
    }
    else if (serverErrors[name]) { // Server Error
      const serverError = serverErrors[name];

      return serverError[0];
    }

    return '';
  }

  return (
    <Field name={name}>
      {({ input, meta }) => (
        <div className={className + '__wrap'}>
          {!!isShowLabel &&
            <label className={className + '__label'}>
              {labelText}
            </label>
          }

          <input
            {...input}
            readOnly={isReadOnly}
            placeholder={placeholderText}
            className={className + (isErrorExist(meta) ? ` ${className}--error` : '')}
            autoComplete='off'
            onChange={(e) => hideServerErrorOnChange(e, input)}
            type={type}
          />

          {isErrorExist(meta) && (
            <div className={className + '__error-wrap'}>
              <span className={className + '__error-text'}>{getErrorText(meta)}</span>
            </div>
          )}
        </div>
      )}
    </Field>
  )
}

export default FormField;