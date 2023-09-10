// salesforceService.ts
import { Connection, SObject, UserInfo } from "jsforce";

export default class SalesforceService {
  private conn: Connection;

  constructor() {
    this.conn = new Connection({
      clientId: "CLIENT_ID",
      clientSecret: "CLIENT_SECRET",
    });
  }

  authenticate(): Promise<UserInfo> {
    return this.conn.login("username", "password");
  }

  async submitFormData(data: Record<string, any>, objectAPIName: string) {
    return this.conn
      .sobject(objectAPIName)
      .create(data, { allowRecursive: true });
  }
}
