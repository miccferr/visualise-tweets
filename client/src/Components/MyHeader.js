import React from 'react';
import request from 'request-promise';

const handleMongo = (e) => {
  e.preventDefault();  
  request('http://localhost:3000/mapjson')    
    .then(data => console.log(JSON.parse(data)))    
    .catch( ()=> console.log('GET failed'))
}

function MyHeader(props) {
  return (
    <header className="bg-white black-80 tc pv4 avenir">
      <a href="" className="bg-black-80 ba b--black dib pa3 w2 h2 br-100"></a>
      <h1 className="mt2 mb0 baskerville i fw1 f1">Title</h1>
      <h2 className="mt2 mb0 f6 fw4 ttu tracked">Your amazing subtitle</h2>
      <nav className="bt bb tc mw7 center mt4">
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
          href="/">Home</a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
          href="/portfolio" onClick={handleMongo}>Mongo</a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
          href="/shop">Shop</a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l"
          href="/about">About</a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
          href="/contact">Contact</a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
          onClick={props.menuButtonClick}
          href="#">
          Filters          
          {/*<ul className="pa3 pa5-ns">
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 dark-pink">asdasd</li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 dark-pink">asdasd</li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 dark-pink">asdasd</li>
        </ul>*/}
        </a>
        
      </nav>
    </header>
  )
};

export default MyHeader;