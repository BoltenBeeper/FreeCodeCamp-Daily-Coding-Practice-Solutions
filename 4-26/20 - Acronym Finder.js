// Given a string representing an acronym, return the full name of the organization it belongs to from the list below:
// - "National Avocado Storage Authority"
// - "Cats Infiltration Agency"
// - "Fluffy Beanbag Inspectors"
// - "Department Of Jelly"
// - "Wild Honey Organization"
// - "Eating Pancakes Administration"
// Each letter in the given acronym should match the first letter of each word in the organization it belongs to, in the same order.

let orgs = {"NASA": "National Avocado Storage Authority", "CIA": "Cats Infiltration Agency", "FBI": "Fluffy Beanbag Inspectors", "DOJ": "Department Of Jelly", "WHO": "Wild Honey Organization", "EPA": "Eating Pancakes Administration"}

function findOrg(acronym) {
  console.log(orgs[acronym]);
  return orgs[acronym];
}

findOrg("NASA")
