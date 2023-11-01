import React from 'react'

const Countries = ({ Countries}) => {
  return (
    <div className='countries-container'>
        {Countries.map((country) =>{
            return (
                <div className='each-country mx-auto bg-light-blue rounded-2'>
                  <img className='w-100 rounded-top' src={country.flags.svg} alt="country.flags.alt" />
                  <div className='p-4 text-start'>
                  <h1 className='mb-3'>{country.name.common}</h1>
                  <p className='mb-1'>Population: {country.population}</p>
                  <p className='mb-1'>Region: {country.region}</p>
                  <p className='mb-1'>Capital: {country.capital}</p>
                  </div>
                </div>
                );
            })}
        </div>
        );
};


export default Countries