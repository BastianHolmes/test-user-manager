import { useParams } from "react-router-dom";
import { useLoadUsers } from "./useLoadUsers";
import { useEffect, useState } from "react";

//Takes the default values from the current user
export const useDefaultValues = () => {
    const { id } = useParams();
    const { Users } = useLoadUsers();
    const currentUser =
      Users && Users.find((user: any) => user.id === Number(id));
  
    const [defaultValues, setDefaultValues] = useState(currentUser ?? {});
  
    useEffect(() => {
      if (currentUser) {
        setDefaultValues(currentUser);
      }
    }, [currentUser, Users]);

    return defaultValues;
}