import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios";

const INQ_URL = "/inquiry";

function Inquiry() {

  const [showModal, setShowModal] = useState(false);

  const purposeRef = useRef();
  const nameRef = useRef();
  const phonenoRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();
  const contactTimeRef = useRef();
  const questionsRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";

  const [purpose, setPurpose] = useState("");
  const [purposeFocus, setPurposeFocus] = useState(false);

  const [name, setName] = useState("");
  const [nameFocus, setNameFocus] = useState(false);

  const [phoneno, setPhoneno] = useState("");
  const [phonenoFocus, setPhonenoFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);

  const [contact, setContact] = useState("");
  const [contactFocus, setContactFocus] = useState(false);

  const [contactTime, setContactTime] = useState("");
  const [contactTimeFocus, setContactTimeFocus] = useState(false);

  const [questions, setQuestions] = useState("");
  const [questionsFocus, setQuestionsFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [purpose, name, phoneno, email, contact, contactTime, questions]);

  const errRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        INQ_URL,
        JSON.stringify({
          purpose,
          name,
          phoneno,
          email,
          contact,
          contactTime,
          questions,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log("pogi");
      console.log(response?.data);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Please fill in all the required fields!");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="body-bg min-h-screen pt-1 md:pt-1 pb-6 px-2 md:px-0">
      <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 class="font-bold text-2xl text-gray-700">Inquiry Form</h3>
          <p class="text-gray-400 pt-2 text-sm">
            Ask and you shall receive. Submit your inquiry now.{" "}
          </p>
        </section>

        <section class="mt-10">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form class="flex flex-col" onSubmit={handleSubmit}>
            <div class="mb-6 rounded">
              <label class="block text-gray-700 text-sm font-bold mb-2 ml-1">
                I want
              </label>
              <select
                className="bg-gray-200 rounded w-full text-gray-600 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                ref={purposeRef}
                onChange={(e) => setPurpose(e.target.value)}
                onFocus={() => setPurposeFocus(true)}
                onBlur={() => setPurposeFocus(false)}
              >
                <option selected value="">
                  Select an Option
                </option>
                <option value="to view this property">
                  to view this property
                </option>
                <option value="to ask for other details">
                  to ask for other details
                </option>
                <option value="to check the availability">
                  to check the availability
                </option>
              </select>
            </div>

            <div class="mb-6 rounded">
              <label class="block text-gray-700 text-sm font-bold mb-2 ml-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                class="bg-gray-200 rounded w-full text-gray-700  focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                ref={nameRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                required
              />
            </div>

            <div class="mb-6 rounded">
              <label class="block text-gray-700 text-sm font-bold mb-2 ml-1">
                Your Phone Number
              </label>
              <input
                type="text"
                id="phonenum"
                class="bg-gray-200 rounded w-full text-gray-700  focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                ref={phonenoRef}
                value={phoneno}
                onChange={(e) => setPhoneno(e.target.value)}
                onFocus={() => setPhonenoFocus(true)}
                onBlur={() => setPhonenoFocus(false)}
                required
              />
            </div>

            <div class="mb-6 rounded">
              <label class="block text-gray-700 text-sm font-bold mb-2 ml-1">
                Your Email Address
              </label>
              <input
                type="text"
                id="email"
                class="bg-gray-200 rounded w-full text-gray-700  focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                ref={emailRef}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                required
              />
            </div>

            <div class="mb-6 rounded">
              <label class="block text-gray-700 text-sm font-bold mb-2 ml-1">
                I would like to be contacted by
              </label>
              <select
                className="bg-gray-200 rounded w-full text-gray-600 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                ref={contactRef}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                onFocus={() => setContactFocus(true)}
                onBlur={() => setContactFocus(false)}
              >
                <option selected value="">
                  Select an Option
                </option>
                <option value="Phone Number">Phone Number</option>
                <option value="Email">Email</option>
              </select>
            </div>

            <div class="mb-6 rounded">
              <label class="block text-gray-700 text-sm font-bold mb-2 ml-1">
                I want to be contacted
              </label>
              <select
                className="bg-gray-200 rounded w-full text-gray-600 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                ref={contactTimeRef}
                value={contactTime}
                onChange={(e) => setContactTime(e.target.value)}
                onFocus={() => setContactTimeFocus(true)}
                onBlur={() => setContactTimeFocus(false)}
              >
                <option selected value="">
                  Select an Option
                </option>
                <option value="Anytime">Anytime</option>
                <option value="In the morning (8am-11am)">
                  In the morning (8am-11am)
                </option>
                <option value="In the afternoon (1pm-5pm)">
                  In the afternoon (1pm-5pm)
                </option>
                <option value="At night (6pm-10pm)">At night (6pm-10pm)</option>
              </select>
            </div>

            <div class="mb-10">
              <label class="block text-gray-700 text-sm font-bold mb-2 ml-1">
                I have the following additional questions (Optional)
              </label>

              <textarea
                className="bg-gray-200 rounded w-full text-gray-600 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                placeholder="Others"
                ref={questionsRef}
                value={questions}
                onChange={(e) => setQuestions(e.target.value)}
                onFocus={() => setQuestionsFocus(true)}
                onBlur={() => setQuestionsFocus(false)}
                rows="4"
                id="others"
              ></textarea>
            </div>

            <>
         
            <button
              class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
              onClick={() => setShowModal(true)}
            >
                Send Inquiry 
                </button>
                
                {showModal ? (
                <>
                <div className="fixed inset-0 z-10">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setShowModal(false)}
                ></div>
                <div className="flex items-start min-h-screen px-8 py-12 ">
                    <div className="relative w-full max-w-lg p-8 mx-auto bg-white rounded-md shadow-lg">
                        <div className="sm:flex">
                            
                                <p className="sm:flex text-xl leading-relaxed text-gray-500 ">
                                    Your inquiry is sent!

                                </p>

                                <button
                                                className="w-full mt-20 p-1 flex-1 bg-gray-400 text-black-8900 rounded-sm outline-none border ring-offset-1 ring-gray-600 focus:ring-1"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >                                           
                                                Close
                                            </button>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                ) : null}
                </>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Inquiry;
