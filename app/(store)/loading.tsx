import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className=" flex justify-center items-center h-screen">
      <Loader2 className=" animate-spin " size={55} color="blue" />
    </div>
  );
};

export default Loader;
