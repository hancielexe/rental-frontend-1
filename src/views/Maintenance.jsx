import React from "react";

function Maintenance() {
  return (
   
<section className="bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-4 lg:py-12">
        <p className="max-w-xl font-mono font-bold text-6xl">
          Maintenance Area
        </p>

        <div className="mt-8">
          <a href="" className="text-2xl font-bold text-pink-600">
            Marlyn's Rental House
          </a>
        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-5 lg:p-12">
        <form action="" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Username</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Username"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <input
                className="peer sr-only"
                id="option1"
                type="radio"
                tabindex="-1"
                name="option"
              />
        </div>
        </div>

        <div className="col-span-6 sm:col-span-4">
          <label
              for="Status"
              class="block text-sm font-medium text-cyan-700"
            >
              Options
            </label>

            <div className="relative w-full lg:max-w-sm mb-2">
            <select
                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
                 <option selected class="text-end">---</option>
                <option>DoorKnob</option>
                <option>Toilet Bowl</option>
                <option>Faucet</option>
                <option>Ceiling</option>
                <option>Other</option>
            </select>
        </div>

          <div>
            <label className="sr-only" htmlFor="others">Other</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Others"
              rows="4"
              id="others"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send
            </button>
          </div>
          </div>
        </form>
        </div>
      </div>
    </div>
</section>

  );
}

export default Maintenance;