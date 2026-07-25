const testSchema = {
  username: "string",
  posts: "number",
  verified: "boolean"
}

function isValidSchema(obj, schema = testSchema) {
  for (const key in schema) {
    console.log(obj[key])
    if (key in obj && typeof(obj[key]) === schema[key]) {
      continue
    }
    return false
  }
  return true
}

isValidSchema({ username: "alice", posts: 10, verified: false })

// Better solution from Dave Cross on Youtube (https://www.youtube.com/watch?v=Z_OZjgseNls):

// const testSchema = {
//   username: "string",
//   posts: "number",
//   verified: "boolean"
// }

// function isValidSchema(obj, schema = testSchema) {
//   return Object.keys(schema).every((key) => {
//     return typeof(obj[key]) === schema[key]
//   });
// }