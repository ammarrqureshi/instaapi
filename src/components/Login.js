import React, { useState } from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';
import axios from 'axios';


const Login = () => {

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
            axios.get('https://graph.facebook.com/v12.0/'+response.userID+'/photos?access_token='+ response.accessToken)
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
        scope="public_profile, email"
        callback={responseFacebook}
        config_id="634035201998149"
      />
  {/* <img src={imgurl} alt="" /> */}
      Name: {name};
      accessToken: {accessToken}
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