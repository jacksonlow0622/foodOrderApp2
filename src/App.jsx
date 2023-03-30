import logo from './logo.svg';
import './App.css';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import {Amplify, API, graphqlOperation} from 'aws-amplify';
import awsconfig from './aws-exports';
import {Authenticator, withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { createFoodOrder } from './graphql/mutations';
import {listFoodOrders} from './graphql/queries';
import './graphql/mutations';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { useState } from 'react';
import { useEffect } from 'react';

Amplify.configure(awsconfig);

function App() {

  const [inputs, setInputs] = useState({foodName: "Nasi Lemak"});

  function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({...values, [name]: value}))

    console.log("what is name: ", name);
    console.log("what is value: ", value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);

    console.log("what is name", inputs.username);
    console.log("what is address", inputs.address);
    console.log("what is food", inputs.foodName);
    console.log("what is quantity", inputs.quantity);

    const variable = {
      input: {
        id: uuidv4(),
        name: inputs.username, 
        address: inputs.address, 
        food: inputs.foodName, 
        quantity: inputs.quantity, 
        status: "pending",
        // createdAt: new Date().toISOString(),
        // updatedAt: new Date().toISOString()
       }
    };

    try{
      console.log("what is name", inputs.username);
      console.log("what is address", inputs.address);
      console.log("what is food", inputs.foodName);
      console.log("what is quantity", inputs.quantity);
      console.log("what is variable", variable);

      const FoodOrderData = await API.graphql(graphqlOperation(createFoodOrder, variable));

      // const FoodOrderData = await API.graphql(
      //   { 
      //     query: createFoodOrder, 
      //     variables: variable, 
      //     // @ts-ignore
      //     authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS 
      //   });

    }catch(error){
      console.log("error", error);
    }
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <div className="App">
            <header className="App-header">
              <button onClick={signOut}>Sign out</button>
                <h2>KLMY Food Ordering System</h2>
            </header>
            <div>
              <form onSubmit={handleSubmit}>
                <br></br>
                <label>Enter your name: &nbsp;
                  <input 
                    required
                    type="text" 
                    name="username" 
                    value={inputs.username || ""} 
                    onChange={handleChange}
                  />
                </label>
                <br>
                </br>
                <br>
                </br>
                <label>Enter your address: &nbsp;
                  <input 
                    required
                    type="text" 
                    name="address" 
                    value={inputs.address || ""} 
                    onChange={handleChange}
                  />
                </label>
                <br>
                </br>
                <br>
                </br>
                <label>Select your food: &nbsp;
                  <select required name="foodName" value={inputs.foodName} onChange={handleChange}>
                    <option value="Nasi Lemak">Nasi Lemak</option>
                    <option value="Nasi Goreng Cina">Nasi Goreng Cina</option>
                    <option value="Roti Kosong">Roti Kosong</option>
                  </select>
                </label>
                <br>
                </br>
                <br>
                </br>
                <label>Quantity: &nbsp;
                  <input 
                    required
                    type="number" 
                    name="quantity" 
                    value={inputs.quantity || ""} 
                    onChange={handleChange}
                  />
                </label>
                <br>
                </br>
                <br>
                </br>
                <input type="submit" />
              </form>
            </div>
          </div>
        </main>
      )}
    </Authenticator>
  );
}

export default withAuthenticator(App);
