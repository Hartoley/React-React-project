import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import Header from './Header';
import './admidash.css'
import Videos from './Videos'

const Admindas = () => {
  const navigate = useNavigate()
  const [studentsdata, setstudentsdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [realadmin, setrealadmin] = useState ({})
  const [video, setvideo] = useState([])
  const [learn, setlearn] = useState([])
  const [newvideo, setnewvideo] = useState("")
  const { id } = useParams();
  const Naira = "$"
  const sub = "Video Title:"




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
        Language:"",
        sub_language:"",
        category:"",
        sub_category:"",
        createdBy:"",
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


     

      useEffect(()=>{
        axios.get("http://localhost:5009/courses/getallcourses")
        .then((res)=>{
            setvideo(res.data)
        }).catch((err)=>{
          console.log(err);
          toast.error("Failed to fetch course");
        })
      }, [])

      console.log(video);

      const Addvideos = (courses) =>{
        let courseId = (courses._id)
        console.log(courseId);
        navigate(`/uploadVideo/${courseId}`); 
        
    }

    const Editcourse = (courses) =>{
      let courseId = (courses._id)
      console.log(courseId);
      navigate(`/editcourse/${courseId}`); 
      
  }




  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(studentsdata);


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
            <input type="text" required placeholder='title' name='title' onChange={formik.handleChange} />
            <p>Sub-Title</p>
            <input type="text" required placeholder='subtitle' name='sub_title' onChange={formik.handleChange}/>
            <p>Language</p>
            <input type="text" required placeholder='Language' name='language' onChange={formik.handleChange}/>
            <p>Sub-language</p>
            <input type="text" required placeholder='sub-language' name='sub_language' onChange={formik.handleChange}/>
            <p>category</p>
            <input type="text" required placeholder='category' name='category' onChange={formik.handleChange}/>
            <p>sub-category</p>
            <input type="text" required placeholder='sub-category' name='sub_category' onChange={formik.handleChange}/>
            <p>created by</p>
            <input type="text" required placeholder='created by' name='createdBy' onChange={formik.handleChange}/>
            <p>What you will learn</p>
            <input type="text" required placeholder='What to learn' name='learn' onChange={formik.handleChange}/>
            <p>Requirements</p>
            <input type="text" required placeholder='Requirement' name='requirements' onChange={formik.handleChange}/>
            <button>Add more</button>
            <p>Descriptions</p>
            <textarea rows="100" cols="100" id='textarea'  required placeholder='Description' name='description' onChange={formik.handleChange}></textarea>
            <p>Author's name</p>
            <input type="text" required placeholder='Authors name' name='authors_name' onChange={formik.handleChange} />
            <p>Price</p>
            <input type="number" required  placeholder='Price' name='price' onChange={formik.handleChange}/>
          
            
            <button type="submit">Next</button>
          </form>

          
          <div className='Mainvideo'>
            {video.map((courses, index) => (
              
              <div key={index} className="videos">
                <p className="title">{courses.title}</p>
                <p className="authorName">{courses.authors_name}</p>
                <p className="price">{Naira} {courses.price}</p>
                <button onClick={(()=>Addvideos(courses))}>Add more Videos</button>
                {courses.videos.map((videoItem, videoIndex) => (
                  <div key={index} className="videoItem">
                    <video className="vidImage" src={videoItem.url} controls></video>
                    <h4 className="title">{sub} {videoItem.sub_title}</h4>
                  </div>
                ))}
               
                <button onClick={(()=>Editcourse(courses))}>Edit course</button>
              </div>
            ))}
          </div>
 

          </div>
          

        
    </>
  );
};

export default Admindas;