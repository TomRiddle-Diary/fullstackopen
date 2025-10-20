import { useState, useEffect } from 'react'
import personService from './sevices/persons'
import Notification from './component/Notification'


const Filter = ({ filter, handleFilter }) => (
  <form>
    filter shown with <input value={filter} onChange={handleFilter} />
  </form>
)

const PersonForm = ({ addInfo, newName, handleNameChange, newNumber, handleNumberChange }) => (
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

const Persons = ({ persons, handleDelete }) => (
  <div>
    {persons.map(person => (
      <p key={person.id}>
        {person.name} {person.number}
        <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
      </p>
    ))}
  </div>
)

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const addInfo = (event) => {
    event.preventDefault()
    const newObject = {
      name: newName,
      number: newNumber,
    }
    const nameExist = persons.some(person => person.name === newName)
    const numberExist = persons.some(person => person.number === newNumber)

    if (nameExist) {
      alert(`${newName} is already added to phonebook`)
    } else if (numberExist) {
      alert(`${newNumber} is already added to phonebook`)
    } else {
      personService
        .create(newObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setSuccessMessage(newObject.name)
          setTimeout(() => {
            setSuccessMessage(null)
        }, 5000)
        })
    }
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilter = (event) => setFilter(event.target.value)

  const showPersons = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const handleDelete = (id, name) => {
    const confirmDelete = window.confirm(`Delete ${name}?`)
    if (confirmDelete) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }


    
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification successMessage={successMessage} />
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2>Add a new</h2>
      <PersonForm
        addInfo={addInfo}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={showPersons} handleDelete={handleDelete} />
    </div>
  )
}

export default App
