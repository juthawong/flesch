'use strict'

module.exports = flesch

var sentenceWeight = 1.015
var wordWeight = 84.6
var base = 206.835

function flesch(counts) {
  if (!counts || !counts.sentence || !counts.word || !counts.syllable) {
    return NaN
  }

  return (
    base -
    sentenceWeight * (counts.word / counts.sentence) -
    wordWeight * (counts.syllable / counts.word)
  )
}
