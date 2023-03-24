import { openai } from "./server.js";

async function deleteFineTune() {
  try {
    const response = await openai.deleteModel('davinci:ft-personal-2023-03-24-11-16-23')
    console.log('response: ', response)
  } catch (err) {
    console.log('err: ', err)
  }
}

deleteFineTune()




