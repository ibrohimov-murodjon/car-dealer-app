const baseURL = "https://vpic.nhtsa.dot.gov/api";

// Fetch types
export async function getTypes() {
  try {
    const res = await fetch(
      `${baseURL}/vehicles/GetVehicleTypesForMake/all?format=json`
    );
    if (res.status === 200 || res.status === 201) {
      const result = await res.json();
      return result;
    } else {
      throw new Error("Something went wrong :(");
    }
  } catch ({ message }) {
    alert(message);
    window?.location.reload();
    return message;
  }
}

export async function fetchMakesForVehicleType(vehicleType) {
  try {
    const res = await fetch(
      `${baseURL}/vehicles/GetMakesForVehicleType/${vehicleType}?format=json`
    );
    if (res.status === 200 || res.status === 201) {
      const result = await res.json();
      if (result.Results.length > 150) {
        result.Results = result.Results.slice(0, 150);
      }
      return result;
    } else {
      throw new Error("Failed to fetch vehicle makes");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
