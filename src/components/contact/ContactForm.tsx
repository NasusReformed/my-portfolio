import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-first-name">
            Name
          </label>
          <input className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800" id="grid-first-name" type="text" placeholder="Jane" />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-email">
            Email
          </label>
          <input className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800" id="grid-email" type="email" placeholder="jane.doe@example.com" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-message">
            Message
          </label>
          <textarea className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800 h-48 resize-none" id="grid-message"></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <button className="shadow bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
