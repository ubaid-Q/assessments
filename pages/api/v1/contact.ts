import { HttpStatusCode } from "axios";
import { randomUUID } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") {
      return res
        .status(HttpStatusCode.MethodNotAllowed)
        .json({ message: "Invalid enpoint" });
    }

    const formData = req.body;
    formData["id"] = randomUUID();
    formData["createdAt"] = new Date().toISOString();
    formData["updatedAt"] = new Date().toISOString();
    return res.status(HttpStatusCode.Created).json({ formData });
  } catch (error: any) {
    console.log(error);

    return res
      .status(HttpStatusCode.InternalServerError)
      .json({ error: error.message });
  }
}
