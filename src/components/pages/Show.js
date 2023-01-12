import React from 'react';
import {useParams} from 'react-router-dom';

//import {apiGet} from '../../misc/config';
import Cast from '../show/Cast';
import Details from '../show/Details';
import Seasons from '../show/Seasons';
import ShowMainData from '../show/ShowMainData';
import { useShow} from '../../misc/custom-hooks';
import {ShowPageWrapper, InfoBlock} from './Show.styled';





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
        <ShowPageWrapper>
          <ShowMainData
            image={show.image}
            name={show.name}
            rating={show.rating}
            summary={show.summary}
            tags={show.genres}
          />
         
    
          <InfoBlock>
            <h2>Details</h2>
            <Details/>
          </InfoBlock>
    
          <InfoBlock>
            <h2>Seasons</h2>
            <Seasons/>
          </InfoBlock>
    
          <div>
            <h2>Cast</h2>
            <Cast/>
          </div>
        </ShowPageWrapper>
      );
    };
    
    export default Show;