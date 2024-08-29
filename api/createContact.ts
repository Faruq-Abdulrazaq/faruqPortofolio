import { NextApiRequest, NextApiResponse } from "next";
import SibApiV3Sdk from "sib-api-v3-typescript";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications["apiKey"];
    apiKey.apiKey = process.env.NEXT_PUBLIC_BRAVOKEY;

    const apiInstance = new SibApiV3Sdk.ContactsApi();
    const createContact = new SibApiV3Sdk.CreateContact();

    createContact.email = req.body.email;
    createContact.listIds = [2];

    const response = await apiInstance.createContact(createContact);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Failed to create contact", details: error });
  }
};

export default handler;
