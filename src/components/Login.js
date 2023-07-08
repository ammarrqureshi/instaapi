import React from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';

const Login = () => {
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
          }}
          onFail={(error) => {
            console.log('Login Failed!', error);
          }}
          onProfileSuccess={(response) => {
            console.log('Get Profile Success!', response);
          }}
        fields="name,email,picture"
        scope="public_profile, email"
        callback={responseFacebook}
        config_id="634035201998149"
      />
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