import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';
 

 const getSuggestions = (value, arrayToCompare) => {  
  if (value === '') {
    return [];
  }     
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;    
  return inputLength === 0 ? [] : arrayToCompare.filter(tweet =>{      
    return  tweet.text.toLowerCase().slice(0, inputLength) === inputValue 
    }
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input element
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion =>  {  
  return suggestion.text
};

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => {
return <div>    
    {suggestion.text}
  </div>
};


class SuggestWidget extends React.Component {

 constructor() {
    super();
    
    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method } ) => {
    // console.log(this.props)
    
    this.props.onZoom(suggestion.geo.coordinates)
  }

  onChange = (event, { newValue, method }) => {          
    console.log('newValue', newValue);            
    this.setState({
      value: newValue
    });    
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ( {value}) => {    
    this.setState({
      suggestions: getSuggestions(value,this.props.suggestions)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {    
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}        
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected = {this.onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}      
      />
    );
  }
};

export default SuggestWidget;