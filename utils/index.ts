import { doc, getDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { ServiceDataProps, ServiceParamsProps } from "@/types";

export async function fetchService(
  params: ServiceParamsProps
): Promise<ServiceDataProps | null> {
  const { name } = params;

  // Create a reference to the document
  const docRef = doc(db, "services", `${name}`);

  // Fetch the document
  const docSnap = await getDoc(docRef);

  // Check if the document exists
  if (docSnap.exists()) {
    // Get the document data and cast it to ServiceDataProps
    const documentData = docSnap.data() as ServiceDataProps;
    return documentData;
  } else {
    // Document does not exist
    console.warn(`No document found for service: ${name}`);
    return null;
  }
}
