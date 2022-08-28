import * as React from "react";
import { useEffect, useState } from "react";


type NewsProps = {
  //
};

const News: React.FC<any> = () => {


  const [posts, setPosts] = useState([]);


  useEffect(() => {
    fetch('https://dummy.restapiexample.com/api/v1/employees')
      .then((res) => res.json())
      .then((result) => {
        console.log("responsee api", result.data)
        setPosts(result.data);
      });
  }, []);


  return <div className="bg-red-500">
    <div className="p-2">
      <h1 className="">news</h1>
      <div>
        <ul>
          {posts.map((data: any) => (
            <li key={data.id}>{data.employee_name} and  Salary is {data.employee_salary} 
           and employee age is {data.employee_age}
            </li>
            
          ))}
        </ul>
      </div>
    </div>
  </div>;
};

export default News;



