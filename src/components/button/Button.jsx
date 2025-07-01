const Button = ({ label, className, ...props }) => {
  return (
    <button
      className={`bg-green-600 py-2 px-3 hover:bg-green-950 text-sm md:py-4 md:px-6 md:text-lg lg:text-xlg text-white cursor-pointer rounded-3xl ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
