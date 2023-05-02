import React, { useState, useEffect } from "react";
import Button from "../UI/button/Button";
import Input from "../UI/Input/Input";
import styled from "styled-components";

export const ExpenseForm = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  console.log("todos", todos);

  useEffect(() => {
    fetch(
      "https://6450d360e1f6f1bb229fed66.mockapi.io/https/5fb3db44b6601200168f7fbamockapiio/api/endpoint/data"
    )
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        console.log("data", data);
      })
      .catch((error) => console.error(error));
  }, []);

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      completed: false,
      time: +Date.now(),
    };

    setTodos([...todos, data]);

    fetch(
      "https://6450d360e1f6f1bb229fed66.mockapi.io/https/5fb3db44b6601200168f7fbamockapiio/api/endpoint/data",
      {
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setTodos([...todos, data]);
        setTitle("");
        console.log(todos);
      })
      .catch((error) => console.error(error));
  };

  const deleteHandler = (id) => {
    fetch(
      `https://6450d360e1f6f1bb229fed66.mockapi.io/https/5fb3db44b6601200168f7fbamockapiio/api/endpoint/data${id}`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        setTodos(todos.filter((item) => item.id !== id));
      })
      .catch((error) => console.error(error));
  };

  const getTimeAgo = (time) => {
    const now = +Date.now();
    const diff = now;
    const timeApp = Math.floor(diff / 1000 / 60 / 60 / 60 / 60);
    console.log(timeApp);
    return `${timeApp} minutes ago`;
  };
  return (
    <>
      <Container>
        <form onSubmit={onSubmit}>
          <Input
            type="text"
            value={title}
            onChange={onChange}
            placeholder="enter your name"
          />
          <Button type="submit" disabled={!title}>
            ADD
          </Button>
        </form>
      </Container>
      <div>
        {todos.map((item) => {
          return (
            <List key={item.id}>
              <div>
                {item.name} - {getTimeAgo(item.time)}
                <img className="img" src={item.avatar} alt="" />
              </div>

              <button onClick={() => deleteHandler(item.id)}>DELETE</button>
            </List>
          );
        })}
      </div>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const List = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #65b3a2;
  padding: 20px;
  border-radius: 10px;
  font-size: 20px;
  button {
    background-color: #dacccc;
    border: none;
    padding: 10px;
    border-radius: 10px;
  }
  .img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;
