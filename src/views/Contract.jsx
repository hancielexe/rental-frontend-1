import React, { useState, useEffect } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import html2pdf from "html2pdf.js";
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const current = new Date().getMonth(); // Get the current month (1-12)
const day = new Date().getDay(); // Get the current month (1-12)
const next = current === 1 ? 12 : current + 5; // Calculate the next 6 month
console.log(next);
const currentMonth = monthNames[current];
const nextMonth = monthNames[next]; 

function Contract() {
  const [users, setUsers] = useState();
  const [user, setUser] = useState();
  const [loc, setLoc] = useState("");
  const [rental, setRental] = useState("");
  const [deposit, setDeposit] = useState("");
  const axiosPrivate = useAxiosPrivate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get(`/users`, {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  //for pdf
  const generatePDF = () => {
    const element = document.getElementById("billing_form");
    const elementsToExclude = document.querySelectorAll("#exclude-from-pdf");

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
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <section className="bg-gray-100">
          <div className="lg:col-span-4 lg:py-12">
            <div className="max-w-xl mt-4">
              <h1 className="text-4xl mb-5 ml-14 font-extrabold px-5 text-transparent bg-clip-text bg-gradient-to-l from-indigo-800 via-blue-700 to-sky-600">
                Lease of Contract
              </h1>
            </div>
          </div>
          <div className="mx-5 w-full lg:max-w-sm mb-3 ml-12 px-8">
            {users?.length ? (
              <>
                <select
                  class={user ? "hidden" : "w-full rounded-lg border-gray-200 p-3 text-sm"}
                  required
                  onChange={(e) => setUser(e.target.value)}
                >
                  <option>Select User</option>
                  {users
                    .filter((user) => {
                      if (!user.roles.Admin) return user;
                    })
                    .map((filteredUser) => (
                      <option value={filteredUser.username}>
                        {filteredUser.username}
                      </option>
                    ))}
                </select>
              </>
            ) : null}
          </div>

          {users ?
            users
              .filter((filteredUser) => {
                if (filteredUser.username === user) return user;
              }).map((foundUser) => (
                <>
                  <button
                    class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    type="submit"
                    onClick={() => generatePDF()}
                  >
                    Create
                  </button>

                  <div className="rounded-lg bg-white p-8 mx-8 shadow-lg lg:col-span-5 lg:p-12">
                    <form action="" className="space-y-4" id="billing_form">
                      <div className="text-center font-bold">CONTRACT OF LEASE</div>

                      <div className="ml-4 font-bold">
                        KNOW ALL MEN BY THESE PRESENTS:{" "}
                      </div>

                      <div className="ml-4">
                        This Contract of Lease, made and entered into by and between:{" "}
                      </div>

                      <div className="ml-4">
                        <span className="font-bold">NORLY F. CORONEL </span>, of legal
                        age, Filipino Citizen, and residing at{" "}
                        <span className="font-bold italic">
                          {" "}
                          929 F. R. Hidalgo St., Quiapo, Manila, hereinafter referred to
                          as the LESSOR;
                        </span>{" "}
                      </div>

                      <div className="text-center">-and-</div>

                      <div className="ml-4">
                        <span class="font-bold">{`${foundUser.fname} ${foundUser.lname}`}</span>, of legal age, Filipino Citizen, and with residence and postal
                        address <span class="font-bold">{`${foundUser.address}`}</span>, hereinafter referred to as the LESSEE.{" "}
                      </div>

                      <div className="text-center font-bold">WITNESSETH</div>

                      <div className="ml-4">
                        <span className="font-bold">WHEREAS</span>, the{" "}
                        <span className="font-bold">LESSOR</span> is the registered and
                        legal owner of a residential unit -located at
                        <span className="font-bold"> {loc}</span>
                        <select className="w-150 p-2 rounded-lg shadow-md appearance-none" id="exclude-from-pdf" onChange={(e) => setLoc(e.target.value)}>
                          <option value="">--Select Address--</option>
                          <option value="931 F. R. Hidalgo Street, Quiapo, Manila" className="font-bold italic">
                            931 F. R. Hidalgo Street, Quiapo, Manila
                          </option>
                          <option value="929 F. R. Hidalgo Street, Quiapo, Manila" className="font-bold italic">
                            929 F. R. Hidalgo Street, Quiapo, Manila
                          </option>
                          <option value="966 Int. Lerma St., Sampaloc, Manila" className="font-bold italic">
                            966 Int. Lerma St., Sampaloc, Manila
                          </option>
                          <option value="Block 30 Lot 14 Pili Street, SSBrigade, Barangay Western
                          Bicutan, Taguig City" className="font-bold italic">
                            Block 30 Lot 14 Pili Street, SSBrigade, Barangay Western
                            Bicutan, Taguig City
                          </option>
                        </select>
                      </div>
                      <div className="ml-4">
                        <span className="font-bold">WHEREAS</span>, the LESSEE desire to
                        occupy the above-named residential unit and the LESSOR is
                        willing to lease the same unto the LESSEE, subject to the terms
                        and conditions, herein below set forth:{" "}
                      </div>

                      <div className="ml-4">
                        <span className="font-bold">NOW THEREFORE</span>, for and in
                        consideration of the foregoing premises and the covenants
                        hereinafter stipulated, the parties hereby agree as follows:{" "}
                      </div>

                      <div className="ml-8">
                        <span className="font-bold">1. TERM:</span> This lease shall be
                        for a duration of SIX (6) Months from <span class="font-bold">{currentMonth}</span> and to end on <span class="font-bold">{nextMonth}</span> renewable at the option of the LESSEE at such new terms and
                        conditions as may agreed upon by the parties;{" "}
                      </div>

                      <div className="ml-8">
                        <span className="font-bold">2. RENTAL:</span> The LESSEE agrees
                        to pay the LESSOR the monthly rental of <span className="font-bold">{`₱${rental}.00`}</span>
                        <input type="text" id="exclude-from-pdf" onChange={(e) => setRental(e.target.value)}/>,
                        Philippine Currency. Upon signing of this Contract of Lease, the
                        LESSEE shall pay the LESSOR one month rental in advance to be
                        applied on the last one (1) month of the term of this LEASE.
                      </div>

                      <div className="ml-8">
                        <span className="font-bold">3.DEPOSIT:</span> The LESSEE shall
                        also pay the LESSOR the sum of one (1) month deposit of Pesos:
                        <span className="font-bold">{` ₱${deposit}.00`}</span>
                        <input type="text" id="exclude-from-pdf" onChange={(e) => setDeposit(e.target.value)}/>
                        , Philippine Currency, to guarantee the payment of any damage to
                        the leased premises, unpaid utilities and other obligations to
                        third parties by the LESSEE during the term of the agreement,
                        which deposit shall bear no interest. Unless applied to said
                        damages, unpaid utilities and other obligations to third
                        parties, said deposit shall be return to the LESSEE within five
                        (5) days after the termination of this agreement: Provided,
                        however, that the security deposit cannot be applied to unpaid
                        back rentals owed by the LESSEE prior to the expiration of this
                        agreement.{" "}
                      </div>

                      <div className="ml-8">
                        <span className="font-bold">
                          4. INSPECTION OF THE PREMISES:
                        </span>{" "}
                        To ensure that the lease premises is being maintained in good
                        and tenantable conditions, the LESSOR is hereby given the right
                        after due notice, to enter and inspect any part of the leased
                        premises during reasonable hours.{" "}
                      </div>

                      <div className="ml-8">
                        <span className="font-bold">5. FACILITIES:</span> Charges for
                        water and electricity used in the leased premises shall be for
                        the account of the LESSEE. Any delay in the payment thereof
                        shall constitute a material breach of this agreement.{" "}
                      </div>

                      <div className="ml-8">
                        <span className="font-bold">6. RULES AND REGULATIONS: </span>{" "}
                        The LESSOR binds herself to comply with the existing rules and
                        regulations promulgated by the leased premises and other laws,
                        ordinances, rules and regulations applicable to the leased
                        premises.{" "}
                      </div>

                      <div className="ml-4">
                        IN WITNESS WHEREOF, parties hereunto affix their signature this
                        <span class="font-bold">{` ${currentMonth}`}</span> day of <span class="font-bold">{` ${day}`}</span>, 2023.{" "}
                      </div>

                      <div className="text-left">NORLY FERNANDEZ CORONEL</div>
                      <div className="text-left">Lessor</div>

                      <div>&nbsp;&nbsp;CONFORMED BY: </div>
                      <div>&nbsp;&nbsp;____________________________</div>
                      <div>LESSEE</div>
                      <div className="text-center">SIGNED IN THE PRESENCE OF: </div>
                      <div>
                        <p>&nbsp;&nbsp;____________________</p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>____________________</p>
                      </div>
                    </form>
                  </div>
                </>
              ))
            : null}
        </section>
      </div>
    </div>
  );
}

export default Contract;
