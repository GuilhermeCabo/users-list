import React, { useState, useEffect } from "react";

import api from "./services/api";
import GlobalStyle from "./globalStyles";
import { MdSearch } from "react-icons/md";
import userIcon from "./assets/images/user.png";
import { Container, NavBar } from "./styles";

export default function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [domains, setDomains] = useState([]);
  const [selected, setSelected] = useState("");
  const [load, setLoad] = useState(true);

  async function loadUsers() {
    //Recebe os dados de todos os usuários
    const { data } = await api.get("/users/");
    
    setAllUsers(data);
    setUsers(data)
    loadEmailDomains(data);

    if (!load) setLoad(true);
  }

  useEffect(() => {
    loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [load]);

  async function loadEmailDomains(data) {

    const checkArray = []

    let newDomains = data.map(({ email }) => {
      //Isola o domínio do e-mail
      const [, newDomain] = email.split("@")[1].split(".");

      if (! checkArray.includes(newDomain)) {
        checkArray.push(newDomain)
        return newDomain
      }
      return null;
    });

    setDomains(newDomains.filter(value => value !== null))
  }

  async function handleFilter(e) {
    const domain = e.target.value;

    setSelected(domain);

    if (domain === "all") {
      return setUsers(allUsers);
    }

    const filtered = await allUsers.filter(({ email }) => {
      return email.split("@")[1].split(".")[1] === domain;
    });

    return setUsers(filtered);
  }

  return (
    <Container>
      <GlobalStyle />

      <NavBar>
        <h2>Users List</h2>

        <form onSubmit={e => e.preventDefault()}>
          <select onChange={handleFilter} value={selected}>
            <option disabled value="">
              Selecione o domínio de e-mail para filtrar
            </option>
            <option value="all">Todos os domínios de e-mail</option>
            {domains.map(domain => {
              return (
                <option
                  key={Math.random()}
                  value={domain}
                >{`.${domain}`}</option>
              );
            })}
          </select>

          <button type="submit">
            <MdSearch size={28} />
          </button>
        </form>
      </NavBar>

      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              <div>
                <img src={userIcon} alt={user.name} />
                <strong>{user.username}</strong>
                <span>{user.name}</span>
              </div>

              <div>
                <span>Contato</span>
                <p>
                  <strong>E-mail: </strong>
                  <span>{user.email}</span>
                </p>
                <p>
                  <strong>Telefone: </strong>
                  <span>{user.phone}</span>
                </p>
                <p>
                  <strong>Endereço: </strong>
                  <span>
                    {`${user.address.street}, ${user.address.suite} - ${user.address.city}`}
                  </span>
                </p>
                <p>
                  <strong>Website: </strong>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`//${user.website}`}
                  >
                    {user.website}
                  </a>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
