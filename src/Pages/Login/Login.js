import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../Context/AuthProvider";

const Login = () => {
  document.title = "Food Gallery - Login";
  const { logIn } = useContext(AuthContex);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handlerSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        // get jwt token

        fetch("http://localhost:4000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // set local storage
            localStorage.setItem("food-token", data.token);
            navigate(from, { replace: true });
            form.reset();
          });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="my-14 max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 items-center">
        <div className="">
      <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
        Brand
      </h1>

      <form className="mt-6" onSubmit={handlerSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            required
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Password
            </label>
            <Link className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
              Forget Password?
            </Link>
          </div>

          <input
            type="password"
            name="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            required
          />
        </div>

        <div className="mt-6">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Login
          </button>
        </div>
      </form>

      <p className="mt-8 text-xs font-light text-center text-gray-400">
        {" "}
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
        >
          Create One
        </Link>
      </p>
      </div>
    </div>
  );
};

export default Login;
