import { openai } from "./server.js";

async function createFineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: "file-rv9DUojMhZ5Y409kc5VZTt1c",
      model: 'davinci'
    })
    console.log('response: ', response)
  } catch (err) {
    console.log('error: ', err.response.data.error)
  }
}

createFineTune()