import * as React from "react";
import { useEffect, useState } from "react";

type NewsProps = {
  //
};

const News: React.FC<any> = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then((res) => res.json())
      .then((result) => {
        console.log("responsee api", result.data);
        setPosts(result.data);
      });
  }, []);

  return (
    <div className="min-h-screen ">
      <div className="p-3">
        <h1 className="">news</h1>
        <div>
          {posts.map((data: any) => (
            <ul className="bg-red-50">
              <div className="">
                <li className="h-12 p-4 mb-2 " key={data.id}>
                  {data.employee_name} and Salary is {data.employee_salary}
                </li>
                <span className="p-4 ">employee age is {data.employee_age}</span>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
