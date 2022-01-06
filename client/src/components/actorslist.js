import React, {Fragment, useState, useEffect} from 'react'


export default function ActorsList() {
  const deletemovie = async (id) => {
    try {
      const deletemovie = await fetch(`http://localhost:3001/${id}`, {
        method: "DELETE"
      })
      console.log(deletemovie);
      setMovies(movies.filter(movie=>movie.id!==id));
    }
    catch(err) {
      console.log(err);
    }
  }

  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      const response = await fetch("http://localhost:3001/movies");
      const jsonData = response.json();
      console.log(jsonData);
      setMovies(jsonData);
    }
    catch(err) {
      console.log(err);
    }
  }
  useEffect(()=>{
    getMovies();
  },[]);
  const [movie, setMovie] = useState("");
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {movie};
      const response = await fetch("http://localhost:3001/movies",{
        method : "POST",
        headers : {"Content-Type": "application/json"},
        body : JSON.stringify(body)
      });
      window.location = '/';
    }
    catch (err) {
      console.log(err.message);
    }
  }
  return (
    <Fragment>
      {" "}
      <table className='table mt-5 text-center'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Bio</th>
            <th>Producer</th>
            <th>Actors</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {movies.map(movie=>(
              <tr key={movie.id}>
                <td>{{movie}}</td>
                <td><editmovie /></td>
                <td><button className='btn-danger' onClick={()=>deletemovie(movie.id)}>Delete</button></td>
              </tr>
            ))}
          </tr>
        </tbody>
      </table>
      <h1 className='text-center mt-5'>Movies List</h1>
      <form className='d-flex mt-5' onSubmit={onSubmitForm} >
        <input type="text" className='form-control' value={movie} onChange={e=>setMovie(e.target.value)}/>
        <button className='btn btn-success'>Add</button>
      </form>
    </Fragment>
  )
}
