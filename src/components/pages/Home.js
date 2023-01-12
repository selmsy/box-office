import React, {useState, useCallback} from 'react'
import MainPageLayout from '../MainPageLayout'
import {apiGet} from '../../misc/config'
import ShowGrid from '../show/ShowGrid';
import ActorGrid from '../actor/ActorGrid';
import { RadioInputsWrapper, SearchButtonWrapper } from './Home.styled';
import { useLastQuery } from '../../misc/custom-hooks';
import CustomRadio from '../CustomRadio';
const Home = () => {
  const [input, setInput] = useLastQuery();
const [results, setResults] = useState(null);
const [searchOption, setSearchOption] = useState('shows');
const isShowsSearch = searchOption === 'shows';


  const onSearch = () => {
   apiGet(`/search/${searchOption}?q=${input}`).then(result => { 
      setResults(result);
      //console.log(result);
    });
  };
   

  const onInputChange = useCallback => (
    ev => {
      setInput(ev.target.value);
    }

  );

const onKeyDown = ev =>{
  if(ev.keyCode === 13){
    onSearch();
  }
}

const onRadioChange = useCallback(ev => {
setSearchOption(ev.target.value);
},[])

const renderResults = results => {
  if(results && results.length === 0){
return <div>No results</div>
  }
  if(results && results.length > 0){
return results[0].show ? (<ShowGrid data={results}/> )
 : (<ActorGrid data={results}/>)

  }
  return null;
}
  return (
    <MainPageLayout>
<input type="text" 
placeholder="Search for anything" 
onChange={onInputChange} 
onKeyDown={onKeyDown} 
value={input}/>

<RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </div>

        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>


      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults(results)}
    </MainPageLayout>
  )
}

export default Home
