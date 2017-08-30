import React from 'react';

export const LoginPage = () => {
    let _name, _password;
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('name', _name.value);
      console.log('password', _password.value);

      if (_password != 'password') {
        return;
      }
      /*
      localSotrage.setItem('login', 'true');
      const location = this.props.location;
      if (location.state && location.state.nextPathname) {
        this.props.history.replaceState(null, location.state.nextPathname);
      } else {
        this.props.history.replaceState(null, '/about');
      }
      */
    };
    return (
     <form onSubmit = {handleSubmit}>
       <label htmlFor='username'> User Name</label>
       <input id='username'
         type='text'
         required
         autoFocus='true'
         ref={ input => _name = input}/>
       <label htmlFor='password'>Password</label>
       <input id='password'
         type='password'
         required
         ref={input => _password = input}/>
       <button type='submit'>Sign In</button>
     </form>
    );
  };
