import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import Header from './Header';
import './admidash.css'

const Admindas = () => {
  const navigate = useNavigate()
  const [studentsdata, setstudentsdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [realadmin, setrealadmin] = useState ({})
  const [video, setvideo] = useState([])
  const [newvideo, setnewvideo] = useState("")
  const { id } = useParams();


//   const filechange = (e) =>{
//     console.log(e.target.files[0]);
//     let myvideo = e.target.files[0];
//     let reader = new FileReader()
//     reader.readAsDataURL(myvideo)
//     reader.onload = () =>{
//     //  console.log(reader.result);
//      setvideo(reader.result)
//     //  setnewvideo(res.data.myvideo)
//     }
//  }

 console.log(id);

    useEffect (()=>{
      axios.get(`http://localhost:5009/admin/getdata/id/${id}`)
      .then((res) =>{
        // console.log(res.data);
        setrealadmin(Object.values(res.data))
        // console.log(realadmin);
        setLoading(false);
      }).catch ((error) =>{
        console.log(error);
        setLoading(false);
        toast.error("Failed to fetch admin data");
      })
    }, [id])

    

    useEffect(()=>{
      axios.get("http://localhost:5009/udemy/student/getallstudent")
      .then((res)=>{
          setstudentsdata(res.data)
      }).catch((err)=>{
        console.log(err);
        toast.error("Failed to fetch students data");
      })
    }, [])
   
    const formik = useFormik({
      initialValues:{
        title:"",
        sub_title:"",
        Lamguage:"",
        learn:"",
        requirements :"",
        description:"",
        authors_name:"",
        price:""

      },
    
    onSubmit:(value)=>{
      console.log(value);
      axios.post("http://localhost:5009/courses/upload/course", value)
      .then((res)=>{
        toast.success("course updated successful")
        let courseId = `${res.data.course._id}`
        console.log(courseId); 

        navigate(`/uploadVideo/${courseId}`); 
        console.log(res.data);
      }).catch((err)=>{
        console.log(err);
        toast.error("Failed to fetch students data");
      })
    }
  })






  if (loading) {
    return <p>Loading...</p>;
  }


  return (
    <>
      <ToastContainer />
      <Header/>
        
          <h3>Welcome on board admins {realadmin[1]}</h3>

          <h3>Students list</h3>
          {studentsdata.map((student, index) => (
            <p key={index}>{index + 1}. {student.username}</p>
          ))}

          <div className="postVideos">
          

          <form action="" onSubmit={formik.handleSubmit}>
            <p>Title</p>
            <input type="text" placeholder='title' name='title' onChange={formik.handleChange} />
            <p>Sub-Title</p>
            <input type="text" placeholder='subtitle' name='sub_title' onChange={formik.handleChange}/>
            <p>Language</p>
            <input type="text" placeholder='Language' name='language' onChange={formik.handleChange}/>
            <p>What you will learn</p>
            <input type="text" placeholder='What to learn' name='learn' onChange={formik.handleChange}/>
            <p>Requirements</p>
            <input type="text" placeholder='Requirement' name='requirements' onChange={formik.handleChange}/>
            <p>Descriptions</p>
            <input type="text" placeholder='Description' name='description' onChange={formik.handleChange}/>
            <p>Author's name</p>
            <input type="text" placeholder='Authors name' name='authors_name' onChange={formik.handleChange} />
            <p>Price</p>
            <input type="number"  placeholder='Price' name='price' onChange={formik.handleChange}/>
          
            
            <button type="submit">Next</button>
          </form>

          

 

          </div>

        
    </>
  );
};

export default Admindas;