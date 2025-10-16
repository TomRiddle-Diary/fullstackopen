import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  // newName state is used for controlling the form input
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  const addInfo = (event) => {
    event.preventDefault()
    const Object = {
      name: newName,
      number: newNumber, 
      id: persons.length + 1
    }
    const nameExist = persons.some(person => person.name === newName)
    const numberExist = persons.some(person => person.number === newNumber)
    if (nameExist) {
      alert(`${newName} is already added to phonebook`)
    }
    else if (numberExist) {
      alert(`${newNumber} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(Object))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const showPersons = () => {
    if (filter === '') {
      return persons
    }
    else {
      return persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    }
  }

  const Filter = () => {
    return (
      <form>
        filter shown with <input value={filter} onChange={handleFilter} />
      </form>
    )
  }

  const PersonForm = () => {
    return (
      <form onSubmit={addInfo}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    )
  }

  const Persons = () => {
    return (
      <div>
        {showPersons().map(person => (
          <p key={person.id}>{person.name} {person.number}</p>
        ))}
      </div>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter />
      <h2>Add a new</h2>
      <PersonForm />
      <h2>Numbers</h2>
      <Persons />
    </div>
  )
}

export default App