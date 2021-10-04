import React, { useState } from "react";
import { fetchHelloCounter, fetchLatestHello } from './api'



const Home = () => {
  const [state, updateState] = useState({
      counter: 0,
      message: '',
      sender: ''
  });

  const handleSubmit = async () => {
    console.log('SUBMIT')
    const helloData = await fetchHelloCounter()
    const latestHello = await fetchLatestHello()
    updateState({
      counter: helloData.helloCounter,
      message: latestHello.message,
      sender: latestHello.sender
    })
  }
  return (
    <form onSubmit={handleSubmit}>
        <h2>Hello Lisk!</h2>
        <p>A simple frontend for blockchain applications built with the Lisk SDK.</p>
        <p>Hello counter:</p>
        <pre>{state.counter}</pre>
        <p>Latest Hello:</p>
        <p>Message:</p>
        <pre>{state.message}</pre>
        <p>Sender:</p>
        <pre>{state.sender}</pre>
        <p></p>
        <input type="submit" value="AGGIORNA" />
    </form>
  );
};

export default Home;