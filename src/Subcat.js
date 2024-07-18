import React, { useEffect, useRef, useState } from "react";
import "./subcategory.css";
import axios from "axios";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Subcat = () => {
    const { courseId } = useParams();
    const [course, setcourse] = useState([]);
    const [video, setvideo] = useState([]);
    const [learn, setlearn] = useState([]);

    useEffect(() => {
        axios
          .get(`http://localhost:5009/courses/course/${courseId}`)
          .then((res) => {
            setcourse(res.data);
            // console.log(res.data.videos);
            setvideo(res.data.videos);
            setlearn(res.data.learn);
          })
          .catch((error) => {
            console.log(error);
    
            toast.error("Failed to fetch corse data");
          });
      }, [courseId]);

    console.log(video);

  return (
    <div>
          <div className="category3">
                  <div className="videocon3">
                  {video.map((videoItem, index) => (
                    <div key={index} className="videos" >
                        {/* <video className="vidImage" src={videoItem[0]} controls></video> */}
                        <p className="title">{videoItem.title}</p>
                        <p className="authorName">{videoItem.authors_name}</p>
                        
                    </div>
                    ))}
                  </div>
                
          </div>
    </div>
  )
}

export default Subcat