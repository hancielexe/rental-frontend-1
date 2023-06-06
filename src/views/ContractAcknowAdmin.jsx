import React, { useState, useEffect } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import html2pdf from "html2pdf.js";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const current = new Date().getMonth(); // Get the current month (1-12)
const day = new Date().getDay(); // Get the current month (1-12)
const currentMonth = monthNames[current];

function AcknowledgeAdmin() {
  const axiosPrivate = useAxiosPrivate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  //for pdf
  const generatePDF = () => {
    const element = document.getElementById("pdf-content");
    const elementsToExclude = document.querySelectorAll(".exclude-from-pdf");

    // Hide the elements to be excluded
    elementsToExclude.forEach((element) => {
      element.style.display = "none";
    });

    const options = {
      margin: [50, 30, 50, 30], // Set margins in pixels [top, right, bottom, left]
      filename: "acknowledgement-receipt.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "pt", format: "ledger", orientation: "portrait" },
    };
    html2pdf()
      .set(options)
      .from(element)
      .save()
      .finally(() => {
        // Show the elements after generating the PDF
        elementsToExclude.forEach((element) => {
          element.style.display = "block";
        });
      });
  };

  return (
    <div className="flex h-screen overflow-hidden ">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <section className="bg-gray-100">
          <div className="max-w-xl mt-4">
            <h1 className="text-4xl mb-5 ml-5 font-extrabold px-5 text-transparent bg-clip-text bg-gradient-to-l from-indigo-800 via-blue-700 to-sky-600">
              Acknowledgement Receipt
            </h1>
          </div>
          <div className="mx-auto max-w-screen-xl px-4 py-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="rounded-lg bg-white p-  8 shadow-lg lg:col-span-5 lg:p-12">
                <form
                  action=""
                  className="p-8 leading-relaxed"
                  id="pdf-content"
                >
                  <div className="text-center font-bold text-xl">
                    ACKNOWLEDGEMENT
                  </div>
                  <br />
                  <div>REPUBLIC OF THE PHILIPPINES</div>
                  <div>
                    CITY OF MANILA...........................
                    <span className="ml-20"> S.S.</span>
                  </div>
                  <br />
                  <div className="indent-12">
                    BEFORE ME, a Notary Public for and in City of Manila,
                    Philippines. This{" "}
                    <span class="font-bold">{` ${currentMonth}`}</span> day of{" "}
                    <span class="font-bold">{` ${day}`}</span>, personally
                    appered the following:
                  </div>
                  <br />
                  <div className="flex justify-between">
                    <p className="text-right  ml-12">NAME</p>
                    <p className="text-center">CTC NUMBER</p>
                    <p className="text-left mr-12">PLACE AND DATE ISSUE</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-right font-bold italic">
                      NORLY F. CORONEL
                    </p>
                    <p className="text-center">TIN NO. 229-980-212-000</p>
                    <p className="text-left mr-16">B.I.R. – Jan. 7, 2015</p>
                  </div>
                  <br />
                  <div>
                    known to me and known to be the same persons who executed
                    the foregoing instrument and acknowledged to me that the
                    same is their own free and voluntary act and deed.
                  </div>
                  <br />
                  <div className="indent-12">
                    <span className="font-bold">IN WITNESS WHEREOF</span>, I
                    affixed my signature and notarial seal on the date of place
                    first mentioned above.
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div>
                    <p>Doc. No.__________________;</p>
                    <p>Page. No.__________________;</p>
                    <p>Book. No.__________________;</p>
                    <p>Series of 2023.</p>
                  </div>
                </form>
              </div>
              {/* for pdf */}
              <button
                onClick={generatePDF}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Print as a PDF
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AcknowledgeAdmin;
