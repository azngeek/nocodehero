import {json} from '@sveltejs/kit';

const delay = millis => new Promise((resolve, reject) => {
    setTimeout(_ => resolve(), millis)
  });

export async function GET() {
    
    await delay(1000);

    const res  = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await res.json();

    if (res.ok) {
        return json(data);
      } else {
        throw new Error(data);
      }
}