const Course = ({ course }) => {
  const Header = () => <h2>{course.name}</h2>
  const Content = () => {
    return (
      course.parts.map(part => 
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      )
    )
  }
  const Total = () => {
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return <b>total of {total} exercises</b>
  }
  
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}


const App = ( {courses} ) => (
  <div>
    <h1>Web development curriculum</h1>
    {courses.map(course => (
    <Course key={course.id} course={course} />
    ))}
  </div>
)

export default App