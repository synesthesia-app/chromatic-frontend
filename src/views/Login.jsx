import { GoogleLogin } from 'react-google-login';

export default function Login() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId={`${process.env.GOOGLE_CLIENT_ID}`}
      buttonText="Login"
      onSuccess={(response) => responseGoogle(response)}
      onFailure={(response) => responseGoogle(response)}
      cookiePolicy={'single_host_origin'}
    />
  );
}
