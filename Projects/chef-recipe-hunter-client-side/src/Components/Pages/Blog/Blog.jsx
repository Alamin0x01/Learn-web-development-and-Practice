import React, { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import ReactToPdf from "react-to-pdf";
const Blog = () => {
  const ref = useRef();
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [17, 11],
  };

  return (
    <div className="bg-cyan-50">
      <div ref={ref}>
        <div className="  mx-10 text-sky-500  bg-blue-50   rounded p-5">
          <div>
            <h3 className="text-3xl font-semibold p-3">
              Q: Tell us the differences between uncontrolled and controlled
              components.
            </h3>
            <p className="text-xl ms-4 text-black">
              Ans: Uncontrolled components are useful for simple form elements
              where you don't need to know the current state of the component,
              while controlled components are useful for more complex UI
              elements where you need to know the state of the component at all
              times. And Controlled components provide a more explicit and
              centralized way of managing the state, while uncontrolled
              components are more flexible and require less code.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold p-3 ">
              Q: How to validate React props using PropTypes?
            </h3>
            <p className="text-xl ms-4 text-black">
              Ans: PropTypes is a library in React that allows you to validate
              the type and shape of props passed to a component. You can use
              PropTypes to ensure that the props passed to your component are of
              the expected type and to provide documentation for the component.
              If any of the props passed to the component do not conform to the
              expected PropTypes, you will see a warning in the console. It is
              recommended to always define PropTypes for your components to help
              catch errors early and improve code quality.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold p-3 ">
              Q: Tell us the difference between nodejs and express js.
            </h3>
            <p className="text-xl ms-4 text-black">
              Ans: Node.js is a server-side JavaScript runtime environment that
              provides low-level APIs for I/O operations, while Express.js is a
              web framework built on top of Node.js that provides a simpler API
              for building web applications and APIs. Express.js is often used
              as a middleware layer on top of Node.js to handle HTTP requests
              and responses.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold p-3 ">
              Q: What is a custom hook, and why will you create a custom hook?
            </h3>
            <p className="text-xl ms-4 text-black">
              Ans: Custom hooks allow you to abstract away common functionality
              into a reusable function that can be used across different parts
              of your application. You can create a custom hook to encapsulate
              logic that is used across multiple components, making your code
              more modular and easier to maintain. Custom hooks follow a
              specific naming convention in React, where their names must start
              with "use"..
            </p>
          </div>
        </div>
      </div>
      <div className="bg-cyan-50 animate-bounce text-center mr-6 ">
        <ReactToPdf targetRef={ref} options={options} filename="blog.pdf">
          {({ toPdf }) => (
            <button className="btn btn-info " onClick={toPdf}>
              <FaDownload className="inline-block mr-2 text-white"></FaDownload>{" "}
              Download Pdf
            </button>
          )}
        </ReactToPdf>
      </div>
    </div>
  );
};

export default Blog;
