import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
function Detail() {
  const {id} = useParams();
  const [informs, setInforms] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setInforms(json.data.movie);
  };
  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div>
      <h1>Detail</h1>
      <div>
        <img src={informs.medium_cover_image} alt={informs.title}/>
        <h3>{informs.title}</h3>
        <h4>rating: {informs.rating}</h4>
      </div>
    </div>
  )
}

export default Detail;