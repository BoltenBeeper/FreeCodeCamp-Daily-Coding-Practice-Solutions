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

function isValidProfile(obj) {
  
  const schemaKeys = Object.keys(validSchema) // Make an array of all keys in the schema object (for readability).

  // Verify all necessary keys are a part of the object and automatically pass any extra keys given.
  let allKeysValid = schemaKeys.every((key) => {
    if (key === "supporter" && !(key in obj )) {
      return true
    }
    return key in obj && typeof(obj[key]) === validSchema[key]
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

  // If all checks pass, consider the object verified as valid overall
  const verified = allKeysValid && roleValid && badgesValid
    ? true
    : false

  console.log(verified)
  return verified;
}

function isValidSchema(obj) {
  // Check if passed object contains a ".users" object.
  if (typeof(obj.users) != "object" || obj.users == undefined) {
    return false
  }

  // This try catch defaults ti false if .every fails (like if ".users" is an object other than an array).
  try {
    return obj.users.every(isValidProfile)
  } catch {
    console.log("Users must be an array object.")
    return false
  }
}

isValidSchema({ users: [{ username: "ron", posts: 14, verified: true, role: "creator", badges: [ "early-adopter" ]}, { username: "cher", posts: 25, verified: true, role: "moderator", supporter: true, followers: 20, badges: [ "helper" ]}]})