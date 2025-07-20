import React, { useState } from 'react'
import { movies } from "./data"
export const Movies = () => {
  const [movieList, setmovieList] = useState(movies)
  const filterByCategory=(cat)=>{
    setmovieList(movies.filter((data)=>data.category==cat))
  }
  return (
    <>
      <div className="text-center my-3" style={{width:'100%'}}>
        <button onClick={()=>setmovieList(movies)} type="button" className="btn btn-outline-primary mx-3">All</button>
        <button onClick={()=>filterByCategory("Action")} type="button" className="btn btn-outline-secondary mx-3">Action</button>
        <button onClick={()=>filterByCategory("Thriller")} type="button" className="btn btn-outline-success mx-3">Thriller</button>
        <button onClick={()=>filterByCategory("Animation")} type="button" className="btn btn-outline-danger mx-3">Animation</button>
        <button onClick={()=>filterByCategory("Horror")} type="button" className="btn btn-outline-warning mx-3">Horror</button>
        <button onClick={()=>filterByCategory("Drama")} type="button" className="btn btn-outline-info mx-3">Drama</button>
        <button onClick={()=>filterByCategory("Sci-Fi")} type="button" className="btn btn-outline-light mx-3">Sci-Fi</button>
        
      </div>
      <div style={{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        // gap: '2rem',
        textAlign: 'center',
        width: '1300px',
        margin: 'auto',
        marginTop: '1.5rem'

      }}>
        {movieList.map((data) => (
          <div key={data.id} style={{ maxWidth: '280px', textAlign: 'center' }} >
            <div style={{ padding: '10px' }} className="hover_effect">
              <img src={data.poster_path} alt="" style={{ width: '200px', height: '280px', borderRadius: '10px', border: '2px solid yellow' }} />
            </div>
            <h5>{data.title}</h5>
            <p>{data.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies
