import React from "react";

function Button({loading: pending, title}) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-2 px-4 bg-[#3D63DD] disabled:cursor-not-allowed text-white font-medium rounded-md hover:bg-[#7290f3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111827]"
    >
      {pending ? (
        <p className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"></p>
      ) : (
        title
      )}
    </button>
  );
}

export default Button;
