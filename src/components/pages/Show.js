import React from 'react';
import {useParams} from 'react-router-dom';
//import {apiGet} from '../../misc/config';
import Cast from '../show/Cast';
import Details from '../show/Details';
import Seasons from '../show/Seasons';
import ShowMainData from '../show/ShowMainData';
import { useShow } from '../../misc/custom-hooks';





const Show = () => {
    const {id} = useParams();
    const {show, isLoading, error} = useShow(id);

    if (isLoading) {
        return <div>Data is being loaded</div>;
      }
    
      if (error) {
        return <div>Error occured: {error}</div>;
      }
    
      return (
        <div>
          <ShowMainData
            image={show.image}
            name={show.name}
            rating={show.rating}
            summary={show.summary}
            tags={show.genres}
          />
         
    
          <div>
            <h2>Details</h2>
            <Details/>
          </div>
    
          <div>
            <h2>Seasons</h2>
            <Seasons/>
          </div>
    
          <div>
            <h2>Cast</h2>
            <Cast/>
          </div>
        </div>
      );
    };
    
    export default Show;