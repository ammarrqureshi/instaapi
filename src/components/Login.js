import React, { useState } from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';
import axios from 'axios';


const Login = () => {
  console.log('COMMIT 4');
  const app_creds ={
    'app-id': '177944255262951',
    'redirect_uri':'https://instaapi-sigma.vercel.app/',
    'scope': 'user_profile,user_media',
  }

  const authroize = () => {
    axios.get('https://api.instagram.com/oauth/authorize?client_id='+app_creds['app-id']+'&redirect_uri='+app_creds.redirect_uri+'&scope='+app_creds.scope+'&response_type=code')
    .then(function (response) {
      
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  const [name, setName] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const responseFacebook = (response) => {
    const accessToken = response.accessToken;
    console.log(accessToken);
   
  };

  
  return (
    <div>
      <FacebookLogin
        appId="6928307980531176"
        onSuccess={(response) => {
            console.log('Login Success!', response);
            setAccessToken(response.accessToken);
            axios.get('https://graph.facebook.com/v12.0/me/photos?access_token='+ response.accessToken)
  .then(function (response) {
    
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
          }}
          onFail={(error) => {
            console.log('Login Failed!', error);
          }}
          onProfileSuccess={(response) => {
            console.log('Get Profile Success!', response);
            setName(response.name) ;
            
        

          }}
        fields="name,email,picture"
        scope="public_profile, email, user_photos"
        callback={responseFacebook}
        config_id="634035201998149"
      />
  {/* <img src={imgurl} alt="" /> */}
      Name: {name};
      accessToken: {accessToken}

     <a href={'https://api.instagram.com/oauth/authorize?client_id='+app_creds['app-id']+'&redirect_uri='+app_creds.redirect_uri+'&scope='+app_creds.scope+'&response_type=code'}><button >Get Instagram Data</button></a>
    
    </div>
  );
};

export default Login;

// import React from 'react'
// import Button from './Button'

// const Login = () => {
//   const displayName= () => {
//     FB.login(function(response) {
//       console.log(response)
//     });
//   }
//   return (
//     <>
//     <Button onClick= {displayName}></Button>
//     </>
   
//   )
// }

// export default Login