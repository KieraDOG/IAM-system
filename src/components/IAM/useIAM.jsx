import { useContext } from "react";
import IAMContext from "./IAMContext";

const useIAM = () => useContext(IAMContext);

export default useIAM;
