import React, { useEffect, useState } from 'react';

import api from '../services/api';

import './Main.css';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

function Main({ match }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async function loadUsers() {
      const response = await api.get('/devs', {
        headers: { user: match.params.id }
      });

      setUsers(response.data);
    })();
  }, [match.params.id]);

  return (
    <div className='main-container'>
      <img src={logo} alt='tindev'/>
      <ul>
        {users.map(user => (
          <li key={user._id}>
          <img src={user.avatar} alt={user.name}/>
          <footer>
            <strong>{user.name}</strong>
            <p>{user.bio}</p>
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
        ))}
      </ul>
    </div>
  );
}

export default Main;
