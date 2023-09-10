import { HttpStatusCode } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import SalesforceService from "../../../services/salesforce.service";

const salesforceService = new SalesforceService();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(HttpStatusCode.MethodNotAllowed);
    }

    await salesforceService.authenticate();
    const data = await salesforceService.submitFormData(req.body, "Contact");
    if (data.success) {
      return res
        .status(HttpStatusCode.Created)
        .json({ message: "Contact submitted successfully.." });
    }
    return res.status(500).json({ message: "Something went wrong..." });
  } catch (error: any) {
    console.log(error);
    return res
      .status(HttpStatusCode.InternalServerError)
      .json({ message: "Something went wrong.", error: error.message });
  }
}
