import React from "react";
import { Link } from "react-router-dom";




const VerificaitonModal = ({showModal, setShowModal}) => {
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="flex items-center justify-center min-h-screen p-5 bg-transparent min-w-screen">
                  <div className="max-w-xl p-6 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
                      <h3 className="text-5xl text-indigo-900">Email Not Verified!</h3>
                      <div className="flex justify-center">
                        <img alt="alert" src="/images/email_alert.png" className="w-48 h-48 object-contain"/>
                      </div>
                      <p>Looks like your email address needs a high five! Click the button below to verify it and get started.</p>
                      <div className="mt-4 flex justify-end gap-x-2">
                              <button onClick={()=>setShowModal(false)} className="px-8 py-3 text-white bg-red-700 rounded-full hover:scale-95">
                                  Cancel
                              </button>
                          <Link to='/verification'>
                              <button className="px-8 py-3 text-white bg-indigo-900 rounded-full hover:scale-95">
                                  Verify Email
                              </button>
                          </Link>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default VerificaitonModal