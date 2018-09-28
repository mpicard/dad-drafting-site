import React from 'react';

const Capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const TextInput = ({ name, children }) => (
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/6">
      <label
        htmlFor={name}
        className="block text-grey-darker font-bold mb-1 md:mb-0 pr-4">
        {Capitalize(name)}
      </label>
    </div>
    <div className="md:w-2/3">
      {children ? (
        children
      ) : (
        <input type="text" className="w-full" name={name} />
      )}
    </div>
  </div>
);

export default TextInput;
