import { useParams } from "react-router-dom";

const HelpMethod = () => {
  const { method } = useParams();
  return <div>HelpMethod is {method}</div>;
};

export default HelpMethod;
