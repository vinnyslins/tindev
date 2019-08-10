import React from 'react';

import './Main.css';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

function Main({ match }) {
  return (
    <div className='main-container'>
      <img src={logo} alt='tindev'/>
      <ul>
        <li>
          <img src='https://avatars3.githubusercontent.com/u/4248081?s=460&v=4' alt=''/>
          <footer>
            <strong>Filipe Deschamps</strong>
            <p>Programador PHP</p>
          </footer>
          <div className='buttons'>
            <button>
              <img src={dislike} alt='Dislike'></img>
            </button>
            <button>
              <img src={like} alt='Like'></img>
            </button>
          </div>
        </li>

        <li>
          <img src='https://avatars3.githubusercontent.com/u/4248081?s=460&v=4' alt=''/>
          <footer>
            <strong>Filipe Deschamps</strong>
            <p>Programador PHP</p>
          </footer>
          <div className='buttons'>
            <button>
              <img src={dislike} alt='Dislike'></img>
            </button>
            <button>
              <img src={like} alt='Like'></img>
            </button>
          </div>
        </li>

        <li>
          <img src='https://avatars3.githubusercontent.com/u/4248081?s=460&v=4' alt=''/>
          <footer>
            <strong>Filipe Deschamps</strong>
            <p>Programador PHP</p>
          </footer>
          <div className='buttons'>
            <button>
              <img src={dislike} alt='Dislike'></img>
            </button>
            <button>
              <img src={like} alt='Like'></img>
            </button>
          </div>
        </li>

        <li>
          <img src='https://avatars3.githubusercontent.com/u/4248081?s=460&v=4' alt=''/>
          <footer>
            <strong>Filipe Deschamps</strong>
            <p>Programador PHP</p>
          </footer>
          <div className='buttons'>
            <button>
              <img src={dislike} alt='Dislike'></img>
            </button>
            <button>
              <img src={like} alt='Like'></img>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Main;
