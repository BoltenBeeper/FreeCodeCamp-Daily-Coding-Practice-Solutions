// Note: Today's solution was oddly basically the exact same as yesterdays.

// Array of valid possible roles.
const validRoles = ["user", "creator", "moderator", "staff", "admin"]

// Object of all acceptable value types for each key.
const validSchema = {
  username: "string",
  posts: "number",
  verified: "boolean",
  role: "string",
  supporter: "boolean"
}

function isValidSchema(obj, schema = validSchema) {
  
  // Verify all necessary keys are a part of the object and automatically pass any extra keys given.
  const givenKeys = Object.keys(obj) // Make an array of all keys in the passed object.
   // Check each non-extra entry verifying it matches the schema.
  const allKeysValid = givenKeys.every((key) => {
    if (key in schema) {
      return typeof(obj[key]) === schema[key]
    } else {
      return true
    }
  })

  // Verify that the role value exists and is one of the allowed obtions from the "validRoles" variable.
  let roleValid = false
  if (obj["role"] && validRoles.includes(obj["role"])) {
    roleValid = true
  }

  // If both checks pass, consider the object verified as valid overall
  const verified = allKeysValid && roleValid
    ? true
    : false

  console.log(verified)
  return verified;
}