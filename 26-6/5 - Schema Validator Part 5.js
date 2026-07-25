// Array of valid possible roles.
const validRoles = ["user", "creator", "moderator", "staff", "admin"]

// Object of all acceptable value types for each key.
const validSchema = {
  username: "string",
  posts: "number",
  verified: "boolean",
  role: "string",
  supporter: "boolean",
  badges: "object"
}

function isValidSchema(obj, schema = validSchema) {
  
  const schemaKeys = Object.keys(schema) // Make an array of all keys in the schema object (for readability).

  // Verify all necessary keys are a part of the object and automatically pass any extra keys given.
  let allKeysValid = schemaKeys.every((key) => {
    return key in obj && typeof(obj[key]) === schema[key]
  })

  // Verify that the role value exists and is one of the allowed obtions from the "validRoles" variable.
  let roleValid = false
  if (obj["role"] && validRoles.includes(obj["role"])) {
    roleValid = true
  }

  let badgesValid = false
  if (obj["badges"]) {
    badgesValid = obj["badges"].every((value) => { // If there are no values, this will default to true.
      return typeof(value) === "string"
    })
  }

  // If both checks pass, consider the object verified as valid overall
  const verified = allKeysValid && roleValid && badgesValid
    ? true
    : false

  console.log(verified)
  return verified;
}

isValidSchema({ username: "gill", posts: 12, verified: false, role: "creator", supporter: false, badges: [ "early-adopter", "popular" ] })