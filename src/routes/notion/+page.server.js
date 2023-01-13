import { Client } from "@notionhq/client";

const notion = new Client({
    auth: "secret_1K4m7fKCE6ZFcD3tEUCrxusoVfjqPyDOLFRG2wT3ukc",
  })

  const databaseId = '368bdbed87d74f95b213f9b3627f8bd3';

export async function load() {
    const result = await notion.databases.query({database_id: databaseId});
    console.log(result);
    return {
        "data": result
    }
}