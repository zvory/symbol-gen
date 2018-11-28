const s = (tags, ...exprs) => {
  let stringValue = ``
  for (let i = 0; i < tags.length-1; i++) {
    stringValue += tags[i] + exprs[i]
  }
  return Symbol(tags.join(""))
}

module.exports = { s, sym: s }