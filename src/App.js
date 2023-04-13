import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [type, setType] = useState([]);
  const [status, setStatus] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (type !== null) {
      setTitle(type.title);
    }
    console.log(type);
  }, [type]);
  function Get() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => setType(response.data));
  }
  function Put() {
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", {
        title: "hello",
      })
      .then((response) => setType(response.data))
      .catch((err) => {
        console.log(err);
      });
  }
  function Post() {
    axios
      .post("https://jsonplaceholder.typicode.com/posts/", {
        title: "Hello World!",
        body: "This is a new post.",
      })
      .then((response) => setType(response.data))
      .catch((err) => {
        console.log(err);
      });
  }
  function Delete() {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setType(response.data);
        setStatus(response.status);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(status);
  }
  return (
    <>
      <button onClick={Get}>Get</button>
      <button onClick={Put}>Put</button>
      <button onClick={Post}>Post</button>
      <button onClick={Delete}>Delete</button>
      <h1>{title}</h1> 
    </>
  );
};
export default App;
