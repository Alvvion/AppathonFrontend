import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    street: "",
    city: "",
    state: "",
    pin: "",
  });
  const handlePersonalInfo = async (event) => {
    event.preventDefault();
    if (
      firstName &&
      lastName &&
      email &&
      password &&
      street &&
      city &&
      state &&
      pin
    ) {
      const data_ = {
        firstName,
        lastName,
        email,
        password,
        street,
        city,
        state,
        pin,
      };
      await axios.post("/auth/register", data_).then(() => {
        console.log("Success");
      });
    }
  };
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900 pl-5 mt-20">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-600 pl-5">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handlePersonalInfo}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                          if (!e.target.value) {
                            return setError({
                              ...error,
                              firstName: "First Name is required",
                            });
                          } else {
                            return setError({
                              ...error,
                              firstName: "",
                            });
                          }
                        }}
                      />
                    </div>
                    {error.firstName && (
                      <p className="mt-2 text-sm text-red-600" id="email-error">
                        {error.firstName}
                      </p>
                    )}
                    <br />
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                          if (!e.target.value) {
                            return setError({
                              ...error,
                              lastName: "Last Name is required",
                            });
                          } else {
                            return setError({
                              ...error,
                              lastName: "",
                            });
                          }
                        }}
                      />
                    </div>
                    {error.lastName && (
                      <p className="mt-2 text-sm text-red-600" id="email-error">
                        {error.lastName}
                      </p>
                    )}
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (!e.target.value) {
                            return setError({
                              ...error,
                              email: "Email is required",
                            });
                          } else {
                            return setError({
                              ...error,
                              email: "",
                            });
                          }
                        }}
                      />
                    </div>
                    {error.email && (
                      <p className="mt-2 text-sm text-red-600" id="email-error">
                        {error.email}
                      </p>
                    )}
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          if (!e.target.value) {
                            return setError({
                              ...error,
                              password: "Password is required",
                            });
                          } else {
                            return setError({
                              ...error,
                              password: "",
                            });
                          }
                        }}
                      />
                    </div>
                    {error.password && (
                      <p className="mt-2 text-sm text-red-600" id="email-error">
                        {error.password}
                      </p>
                    )}
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>India</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={street}
                        onChange={(e) => {
                          setStreet(e.target.value);
                          if (!e.target.value) {
                            return setError({
                              ...error,
                              street: "Street address is required",
                            });
                          } else {
                            return setError({
                              ...error,
                              street: "",
                            });
                          }
                        }}
                      />
                    </div>
                    {error.street && (
                      <p className="mt-2 text-sm text-red-600" id="email-error">
                        {error.street}
                      </p>
                    )}
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={city}
                        onChange={(e) => {
                          setCity(e.target.value);
                          if (!e.target.value) {
                            return setError({
                              ...error,
                              city: "City is required",
                            });
                          } else {
                            return setError({
                              ...error,
                              city: "",
                            });
                          }
                        }}
                      />
                    </div>
                    {error.city && (
                      <p className="mt-2 text-sm text-red-600" id="email-error">
                        {error.city}
                      </p>
                    )}
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={state}
                        onChange={(e) => {
                          setState(e.target.value);
                          if (!e.target.value) {
                            return setError({
                              ...error,
                              state: "State is required",
                            });
                          } else {
                            return setError({
                              ...error,
                              state: "",
                            });
                          }
                        }}
                      />
                    </div>
                    {error.state && (
                      <p className="mt-2 text-sm text-red-600" id="email-error">
                        {error.state}
                      </p>
                    )}
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Postal code
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={pin}
                        onChange={(e) => {
                          setPin(e.target.value);
                          if (!e.target.value) {
                            return setError({
                              ...error,
                              pin: "Postal Code is required",
                            });
                          } else {
                            return setError({
                              ...error,
                              pin: "",
                            });
                          }
                        }}
                      />
                    </div>
                    {error.pin && (
                      <p className="mt-2 text-sm text-red-600" id="email-error">
                        {error.pin}
                      </p>
                    )}
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
}

export default Register;
