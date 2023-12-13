import React, { Fragment, useEffect, useState } from 'react';

import { InputsForm } from './InputsForm';

async function getLocales() {
  const response = await fetch(process.env.REACT_APP_API_URL + '/api/locales');
  const data = await response.json();
  return data.locales;
}

export const LocalesPage = (props) => {
  const availableLocales = ['en', 'pl', 'ru', 'uk'];
  const [locale, setLocale] = useState(() => availableLocales[0]);
  const [locales, setLocales] = useState([]);
  const [newLocales, setNewLocales] = useState([]);

  const getFilteredLocalesBySelectedLocale = () => {
    return locales.filter((localeFromLocales) => {
      return localeFromLocales.locale === locale;
    });
  }

  const addNewLocale = () => {
    setNewLocales((newLocalesList) => {
      const newLocale = { key: '', value: '', locale };
      return [...newLocalesList, newLocale];
    });
  };

  useEffect(() => {
    getLocales().then((locales) => {
      console.log(locales);
      setLocales(locales);
    });
  }, []);

  return (
    <div>
      <div className='_flex _gap-4'>
        {availableLocales.map((localeFromAvailable) => {
          const bgColor = localeFromAvailable === locale ? 'btn-primary' : 'btn-secondary';
          return (
            <Fragment key={localeFromAvailable}>
              <div type="button" className={`btn ${bgColor}`} onClick={() => setLocale(localeFromAvailable)}>
                {localeFromAvailable.toUpperCase()}
              </div>
            </Fragment>
          )
        })}
      </div>
      <div className="_mt-8">
        {getFilteredLocalesBySelectedLocale().map((loc) => (
          <Fragment key={loc.key + loc.value}>
            <InputsForm locale={loc} />
          </Fragment>
        ))}
      </div>
      {newLocales.length ? <hr /> : null}
      {newLocales.map((loc) => (
        <Fragment key={loc.key + loc.value}>
          <InputsForm locale={loc} newLocale={true} />
        </Fragment>
      ))}
      <div className="btn btn-success" onClick={addNewLocale}>
        Add Locale
      </div>
    </div>
  );
};
