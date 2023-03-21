import React, { useState } from "react";
import "../styles/App.css";
import Child from "./Child";
const App = () => {
      const [age, setAge] = useState(0);
    
    function incrementAge() {
        setAge(age + 1);
    }

     <Child age={age} incrementAge={incrementAge} />
};

export default App;
