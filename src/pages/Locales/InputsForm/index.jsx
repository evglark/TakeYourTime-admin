import React, { useEffect, useState } from 'react';

export const InputsForm = (props) => {
  const { locale, newLocale } = props;
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (locale) {
      setKey(locale.key);
      setValue(locale.value);
    }
  }, [locale]);

  useEffect(() => {
    setEditMode(key !== locale.key || value !== locale.value);
  }, [key, value]);

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
        <span className="input-group-text">
          Add
        </span>
      ) : editMode ? (
        <span className="input-group-text">
          Save
        </span>
      ) : (
        <span className="input-group-text">
          Delete
        </span>
      )}
    </div>
  );
};
