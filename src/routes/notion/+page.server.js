import { Client } from "@notionhq/client";
import { NOTION_SECRET } from '$env/static/private';



const notion = new Client({
    auth: NOTION_SECRET
  })

  console.log("ENV: " + NOTION_SECRET);

  const databaseId = '368bdbed87d74f95b213f9b3627f8bd3';

export async function load() {
    const result = await notion.databases.query({database_id: databaseId});
    return {
        "data": result
    }
}