import { useState, useEffect } from 'react'
import countryService from './services/countries'

const Search = ({ filter, handleFilter }) => {
  return (
    <form>
      find countries <input value={filter} onChange={handleFilter} />
    </form>
  )
}

const Content = ({ countries }) => {
  if (countries.length === 0) {
    return null
  } else if (countries.length >= 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (countries.length >= 2) {
    return (
      <div>{countries.map(country => (
        <p key={country.name.common}>{country.name.common}</p>
      ))}</div>
    )
  } else {
    const country = countries[0]

    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>

        <h2>Languages</h2>
        <ul>
          {Object.values(country.languages).map(language => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} />
      </div>
    )
  } 
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    countryService.getAll().then(initialCountry => {
      setCountries(initialCountry)
    })
  }, [])


  const handleFilter = (event) => {
    setFilter(event.target.value)
  }


  const showCountry = filter === ''
    ? []
    : countries.filter(country => 
      country.name.common.toLowerCase().includes(filter.toLowerCase())
)


  return (
    
    <div>
      <Search filter={filter} handleFilter={handleFilter} />
      <Content countries={showCountry} />
    </div>
  )
}

export default App