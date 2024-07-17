import React, { useState } from 'react';

const Greeting = ({ isLoggedIn, firstName, lastName }) => {
  return (
    <h1 style={styles.greeting}>
      {isLoggedIn ? `Ласкаво просимо, ${firstName} ${lastName}` : 'Будь ласка, увійдіть в обліковий запис'}
    </h1>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [tempFirstName, setTempFirstName] = useState('');
  const [tempLastName, setTempLastName] = useState('');

  const handleLoginClick = () => {
    setFirstName(tempFirstName);
    setLastName(tempLastName);
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  const handleFirstNameChange = (event) => {
    setTempFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setTempLastName(event.target.value);
  };

  return (
    <div style={styles.container}>
      <Greeting isLoggedIn={isLoggedIn} firstName={firstName} lastName={lastName} />
      {isLoggedIn ? (
        <button style={styles.button} onClick={handleLogoutClick}>Вийти</button>
      ) : (
        <div>
          <input 
            type="text" 
            placeholder="Ім'я" 
            value={tempFirstName} 
            onChange={handleFirstNameChange} 
            style={styles.input}
          />
          <input 
            type="text" 
            placeholder="Прізвище" 
            value={tempLastName} 
            onChange={handleLastNameChange} 
            style={styles.input}
          />
          <button style={styles.button} onClick={handleLoginClick}>Увійти</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  greeting: {
    color: '#4CAF50',
  },
  input: {
    padding: '10px',
    margin: '5px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    margin: '5px',
    cursor: 'pointer',
  }
};

export default App;
