import './App.css'
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { Courses } from './graphql/Queries/Queries';

function App() {
  // const { error, loading, data } = useQuery(gql(`#graphql

  //   query Query {
  //     courses {
  //       title
  //     }
  //   }

  //   `))
  const [getCourses, { error, loading, data }] = useLazyQuery(gql(Courses))
  // const [setUsers,{data}] = useMutation()
  console.log(data?.courses);
  if (loading) {
    return <h1>Loading ....</h1>
  }
  return (
    <>
      <button onClick={() => getCourses()} >Get Courses</button>
    </>
  )
}

export default App
