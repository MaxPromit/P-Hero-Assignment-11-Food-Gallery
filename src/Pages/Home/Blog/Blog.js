import React from "react";

const Blog = () => {
  document.title = "Food Gallery - Blog";
  return (
    <div className="">
      <h2 className="text-center text-3xl font-semibold">
        Some Burning Questions
      </h2>
      <div className="text-center">
        <div className="border border-white p-3 w-full my-3">
          <h3 className="text-2xl mb-3">1. Difference between SQL and NoSQL</h3>
          <p>
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </p>
        </div>
        <div className="border border-white p-3 w-full my-3">
          <h3 className="text-2xl mb-3">
            2. What is JWT, and how does it work?
          </h3>
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object. It is
            compact, readable and digitally signed using a private key/ or a
            public key pair by the Identity Provider(IdP). Information Exchange:
            JWTs are a good way of securely transmitting information between
            parties because they can be signed, which means you can be sure that
            the senders are who they say they are. Additionally, the structure
            of a JWT allows you to verify that the content hasn't been tampered
            with.
          </p>
        </div>
        <div className="border border-white p-3 w-full my-3">
          <h3 className="text-2xl mb-3">
         3. What is the difference between javascript and NodeJS?

          </h3>
          <p>
          JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. To summarize, Node. js is a cross-platform JavaScript runtime environment for servers and applications. It is built on a single-threaded, non-blocking event loop, the Google Chrome V8 JavaScript engine, and a low-level I/O API
          </p>
        </div>
        <div className="border border-white p-3 w-full my-3">
          <h3 className="text-2xl mb-3">
          4. How does NodeJS handle multiple requests at the same time?
          </h3>
          <p>
          How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
