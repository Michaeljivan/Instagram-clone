import React, { useState } from 'react';
import './App.css';
//components
import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username: 'hustleteam95',
      caption: 'I love instagram',
      imageUrl: 'https://pluspng.com/img-png/instagram-png-instagram-logo-2-png-8-de-abril-de-2017-927-kb-3500-3393-3500.png'
    },
    {
      username: 'jivanm',
      caption: 'World War Z looks dope',
      imageUrl: 'https://www.playstationlifestyle.net/assets/uploads/2019/04/World_War_Z-Screenshot_34_logo.png'
    },
    {
      username: 'rsswam',
      caption: 'I like flowers',
      imageUrl: 'https://i.pinimg.com/originals/98/22/77/9822777147bff1a2de272cd8f2c31456.jpg'
    },
  ]);

  return (
    <div className={'app'}>
      <div className={'app_header'}>
        <img 
            className={'app_headerImage'}
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt={'Instagram Logo'}
        />
      </div>
      {
        posts.map(post => (
          <Post username={post.username} imageUrl={post.imageUrl} caption={post.caption} />
        ))
      }
    </div>
  );
}

export default App;
