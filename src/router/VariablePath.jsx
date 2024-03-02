import useParams from "./useParams";

const VariablePath = () => {
  const { id } = useParams();
  return <div>id is {id}</div>;
};

export default VariablePath;
