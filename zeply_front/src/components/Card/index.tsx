import React from "react";

function Card() {
  return (
    <div className="rounded-2xl bg-gray-200/10 p-10 relative">
      <h3 className="text-base font-semibold leading-7 text-gray-200 break-words whitespace-normal">
        4a9dffdad321f7608c844de9f39777b435cc8e02c03485ad514becff180de807
      </h3>

      <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-400">
        <div>
          <dt className="sr-only">Total BTC received</dt>
          <dd className="flex">
            <div className="font-semibold text-indigo-600">
              Total BTC received :
            </div>
            <div>&nbsp; 89</div>
          </dd>
        </div>
        <div>
          <dt className="sr-only">Total BTC spent</dt>
          <dd className="flex">
            <div className="font-semibold text-indigo-600">
              Total BTC spent :
            </div>
            <div>&nbsp; 4.465</div>
          </dd>
        </div>
        <div>
          <dt className="sr-only">Total BTC unspent</dt>
          <dd className="flex">
            <div className="font-semibold text-indigo-600">
              Total BTC unspent :
            </div>
            <div>&nbsp; 3.879</div>
          </dd>
        </div>
        <div>
          <dt className="sr-only">Current address balance</dt>
          <dd className="flex">
            <div className="font-semibold text-indigo-600">
              Current address balance :
            </div>
            <div>&nbsp; 13.879</div>
          </dd>
        </div>
      </dl>
      <button
        type="submit"
        className="block mt-8 w-full rounded-md bg-indigo-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Subscribe
      </button>
    </div>
  );
}

export default Card;
