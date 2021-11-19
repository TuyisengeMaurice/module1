import Navbar from './Navbar';
import Home from './Home';
import React from "react"
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

function App() {
	
 
	return (
		
		  <div className="content">
			<Home />
			<div className="App">
		    <Navbar />
		  </div>
		 </div>
	  );
  
 
}

export default App;
