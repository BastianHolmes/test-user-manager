import { useAuth } from "@/app/hooks/useAuth";

const UpdatePage: React.FunctionComponent = () => {
  useAuth();
  return <div>UpdatePage</div>;
};

export default UpdatePage;
