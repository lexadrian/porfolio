import { Link } from "react-router-dom";
const Page404 = () => {
  return (
    <div className="mt-5 pt-5 text-center text-danger">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Back to Home Page.</Link>
    </div>
  );
};

export default Page404;
