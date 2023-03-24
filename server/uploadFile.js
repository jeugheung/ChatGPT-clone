import { openai } from "./server.js";

import fs from 'fs'

async function upload() {
  try {
    const response = await openai.createFile(
      fs.createReadStream('./data_prepared.jsonl'),
      'fine-tune'
    );
    console.log('File ID: ', response.data.id)
  } catch (err) {
    console.log('err: ', err)
  }
}

upload()

