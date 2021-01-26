// Your code here

function wrapAdjective(style="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}
let encouragingPromptFunction = wrapAdjective("!!!")
