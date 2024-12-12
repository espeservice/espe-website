"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AccountDeletion = () => {
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !accountNumber || !phoneNumber) {
      toast.error("Please fill out all fields before submitting.");
      return;
    }

    if (!isChecked) {
      toast.error("Please confirm by checking the box.");
      return;
    }

    // Simulate API call and success response
    toast.success(
      "We received your request. Your data will be deleted within 30 days. If we need more information, we will contact you."
    );

    console.log("Requesting deletion for:", { name, accountNumber, phoneNumber });

    // Reset form fields
    setName("");
    setAccountNumber("");
    setPhoneNumber("");
    setIsChecked(false);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Request Account Deletion
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Please provide your name, account number, and phone number for verification.
          Confirm your request by checking the box below.
        </p>

        <form
          onSubmit={handleFormSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border border-gray-300 p-4 text-sm shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          {/* Account Number Field */}
          <div>
            <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
              Account Number
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                id="accountNumber"
                className="w-full rounded-lg border border-gray-300 p-4 text-sm shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Enter your account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>
          </div>

          {/* Phone Number Field */}
          <div>
  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
    Phone Number
  </label>
  <div className="relative mt-1">
    <input
      type="number"
      id="phoneNumber"
      className="w-full rounded-lg border border-gray-300 p-4 text-sm shadow-sm focus:border-primary focus:ring-primary"
      placeholder="Enter your phone number"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
      required
      pattern="[0-9]{10}" // Adjust pattern for your needs
    />
  </div>
</div>

          {/* Confirmation Checkbox */}
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="confirmation"
              className="h-4 w-4 rounded border-gray-300 checked:bg-primary focus:ring-primary"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label htmlFor="confirmation" className="ml-2 text-sm text-gray-500">
              I understand that this action will permanently delete my account and data.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`block w-full rounded-lg px-5 py-3 text-sm font-medium text-white ${
              isChecked ? "bg-primary" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isChecked}
          >
            Request Account Deletion
          </button>
        </form>
      </div>
      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default AccountDeletion;
