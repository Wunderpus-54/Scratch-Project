import React from 'react';

const Login = () => {
  const handleLogin = async (e) => {
    e.preventDefault();

    const place = { city, country, notes };

    try {
      const response = await fetch('api/login', {
        method: 'POST',
        body: JSON.stringify(place),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
        // setErrorField(json.errorField);
        // console.log('error field: ', json.errorField);
      }

      if (response.ok) {
        setCity('');
        setCountry('');
        setNotes('');
        setError(null);
        // setErrorField([]);
        console.log('new place added!', json);
        dispatch({
          type: 'CREATE_PLACE',
          payload: json,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <input
            type='text'
            placeholder='Username'
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
