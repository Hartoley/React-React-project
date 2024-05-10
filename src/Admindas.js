import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import Header from './Header';

const Admindas = () => {
  const [adminData, setAdminData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [realadmin, setrealadmin] = useState ({})
  const [count, setCount] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    // Save id to localStorage
    localStorage.setItem('adminId', id);

    axios.get(`http://localhost:5009/admin/getlogin/${id}`)
      .then((res) => {
        console.log(res.data);
        console.log(id);
        setAdminData(res.data);
        console.log(adminData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error("Failed to fetch admin data");
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (Array.isArray(adminData) || !adminData.username) {
    return <p>Welcome on board admin</p>;
  }

  return (
    <>
      <ToastContainer />
      <Header/>
      <p>Welcome on board admin {adminData.username}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      
    </>
  );
};

export default Admindas;