import React from 'react';

function RoomView() {
    return (
        <div class="flex justify-center px-36 place-content-center mt-10">
            <div>
                <img
                    alt="Signage"
                    src="./assets/QR1.png"
                    class=""
                    width="600"
                    height="600"
                />

                <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                    <strong class="font-medium">Room View</strong>

                    <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-indigo-500"></span>

                    <p class="mt-0.5 opacity-50 sm:mt-0">Apartment View</p>
                </div>
            </div>
        </div>
    );
}

export default RoomView;