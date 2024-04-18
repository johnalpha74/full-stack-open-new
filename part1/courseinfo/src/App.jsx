import Header from "./components/header"
import Content from "./components/content"
import Total from "./components/total"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total  total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} /> 
    </div>
  );
};

export default App