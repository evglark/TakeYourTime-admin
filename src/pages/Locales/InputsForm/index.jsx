import React, { useEffect, useState } from 'react';

import { addLocale, removeLocale } from '../actions';

export const InputsForm = (props) => {
  const { locale, newLocale, setUpdate } = props;
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  const createLocale = () => {
    addLocale({ key, value, locale: locale.locale }).then((data) => {
      setKey('');
      setValue('');
      setUpdate();
    });
  };

  const deleteLocale = () => {
    removeLocale({ key, value, locale: locale.locale }).then((data) => {
      setKey('');
      setValue('');
      setUpdate();
    });
  }

  useEffect(() => {
    if (locale) {
      setKey(locale.key);
      setValue(locale.value);
    }
  }, [locale]);

  return (
    <div className="input-group mb-3">
      <span className="input-group-text">Key</span>
      <input
        type="text"
        className="form-control"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Key"
      />
      <span className="input-group-text">Value</span>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Value"
      />
      {newLocale ? (
        <span className="input-group-text btn btn-success" onClick={createLocale}>
          Add
        </span>
      ) : (
        <span className="input-group-text btn btn-danger" onClick={deleteLocale}>
          Delete
        </span>
      )}
    </div>
  );
};
