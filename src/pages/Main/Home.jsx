import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {

    fetchData()
  }, []);
  const fetchData = () => {
    axios.get('https://northwind.vercel.app/api/suppliers').then(response => setData(response.data))
  }
  const handleDelete = (id) => {
    axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`).then(() => fetchData())
  }
  const handleEdit = (id) => {
    console.log(id);
  }
  const handleSubmit = () => {
   
  }
  const addCategory = (newCategory) => {
    axios.post('https://northwind.vercel.app/api/suppliers', newCategory).then(() => {
      fetchData();
     
    })
  }

  const handleInputCompanyNameChange = (e) => {
  }
  const handleInputContactNameChange = (e) => {
  }
  const handleInputContactTitleChange = (e) => {
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red", fontSize: "30px" }}>HOMEPAGE</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputCompanyNameChange} value={data.companyName} />
        <input onChange={handleInputContactNameChange} value={data.contactName} />
        <input onChange={handleInputContactTitleChange} value={data.contactTitle} />
        <button>Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>companyName</th>
            <th>contactName</th>
            <th>contactTitle</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map(item => (

            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.companyName}</td>
              <td>{item.contactName}</td>
              <td>{item.contactTitle}</td>
              <td>
                <button onClick={() =>
                  handleEdit(item.id)}>Edit</button>
                <button onClick={() =>
                  handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Home
