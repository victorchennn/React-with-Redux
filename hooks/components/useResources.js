import { useState, useEffect } from "react";
import axios from "axios";

const useResources = resource => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  };

  // (componentDidMount + componentDidUpdate)
  useEffect(() => {
    fetchResource(resource); // can't directly call async function
  }, [resource]);
  // if different resource('todos'), arrow function is called
  // if no second array, always called
  // if empty array, only called once
  // if equal array, not called
  // if equal object, called, since not same
  return resources;
};

export default useResources;
