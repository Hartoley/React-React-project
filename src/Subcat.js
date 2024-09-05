import React, { useEffect, useState } from "react";
import "./subcategory.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useFlutterwave, FlutterWaveButton } from "flutterwave-react-v3";

const Subcat = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const [video, setVideo] = useState({});
  const [previewVideo, setPreviewVideo] = useState();

  // Fetch course data
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

  // Flutterwave configuration
  const { Flutterwave, closePaymentModal } = useFlutterwave({
    public_key: "FLWPUBK_TEST-45d26f9315fd37752c266b29ba8e67fe-X",
    tx_ref: Date.now(),
    amount: video.price,
    currency: "NGN",
    payment_options: "card, bank_transfer, mobile_money, ussd",
    email: "user@example.com",
    redirect_url: "https://your-website.com/success",
    metadata: {
      custom_data: "Any additional data you want to pass",
    },
  });

  // Buy course function
  const buyCourse = () => {
    Flutterwave({
      callback: (response) => {
        if (response.status === "successful") {
          toast.success("Payment successful!");
        } else {
          toast.error("Payment failed!");
        }
      },
      onclose: () => {
        closePaymentModal();
      },
    });
  };

  return (
    <div>
      <ToastContainer />
      <div className="category3">
        <div className="videocon3">
          <video src={previewVideo} controls />
        </div>
        <h1>{course.title || "Course Title"}</h1>
        <FlutterWaveButton
          text="Buy Course"
          callback={buyCourse}
          onClose={closePaymentModal}
        />
      </div>
    </div>
  );
};

export default Subcat;
