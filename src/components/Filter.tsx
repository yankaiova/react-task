import { VehicleTypeSelect } from "./VehicleTypeSelect";
import {
  Vehicle,
  VehicleFilter,
  vehicleTypeTitles,
  VehicleType,
} from "../data/vehicles/contracts";
import { VehicleApi } from "../data/vehicles/api";
import { useState, useEffect } from "react";
const initialFilter: VehicleFilter = {
  title: "",
  type: null,
};

export const Filter: React.FC<{
  setData: React.Dispatch<React.SetStateAction<Vehicle[]>>;
}> = ({ setData }) => {
  const [type, setType] = useState<VehicleFilter>(initialFilter);

  const setNewType = (x: VehicleType | null) => {
    if (x) {
      setType({ title: vehicleTypeTitles[x], type: x });
    } else {
      setType(initialFilter);
    }
  };
  useEffect(() => {
    const data = VehicleApi.search(type);
    setData(data);
  }, [type]);

  return <VehicleTypeSelect value={type.type} onChange={setNewType} />;
};
