import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Subcat = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const [video, setVideo] = useState({});
  const [previewVideo, setPreviewVideo] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5009/courses/course/${courseId}`)
      .then((res) => {
        setCourse(res.data);
        setVideo(res.data);
        setPreviewVideo(res.data.previewVideo);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to fetch course data");
      });
  }, [courseId]);

  const buyCourse = async () => {
  try {
    const response = await axios.post('http://localhost:5009/udemy/student/payment',
      {
        payment_options: "card, bank_transfer, mobile_money, ussd",
        amount: video.price,
        email: "user@example.com",
        currency: "NGN",
        redirect_url: "https://your-website.com/success",
        metadata: {
          custom_data: "Any additional data you want to pass",
        },
      }
    );

    if (response.data.status === "success") {
      window.location.href = response.data.data.link;
    } else {
      console.error("Payment initialization failed:", response.data);
      toast.error("Payment initialization failed");
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error("An error occurred during payment initialization");
  }
};

  return (
    <div>
      <ToastContainer />
      <div className="category3">
        <div className="videocon3">
          <video src={previewVideo} controls />
        </div>
        <h1>{course.title || "Course Title"}</h1>
        <button onClick={buyCourse}>Buy Course</button>
      </div>
    </div>
  );
};

export default Subcat;
