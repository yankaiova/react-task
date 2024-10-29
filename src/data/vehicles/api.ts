import { generateVehicle } from "./mock";
import { Vehicle, VehicleFilter } from "./contracts";

const vehicle = generateVehicle(15);

export class VehicleApi {
  static search({ type, title }: VehicleFilter): Vehicle[] {
    return vehicle.filter((x) => x.type === type || type === null);
  }
}
