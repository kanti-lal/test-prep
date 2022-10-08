import * as React from "react";
import { useState } from "react";
import News from "../../presentations/News";

type NewsContainerProps = {
  //
};

const NewsContainer: React.FC<any> = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [newsData, setNewsData] = useState();

  return <News />;
};

export default NewsContainer;
