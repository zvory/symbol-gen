const s = tags => {
  return Symbol(tags.join(""))
}

module.exports = { s, sym: s }