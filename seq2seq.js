/**
 * @param {string[][] } trainingExamples
 */
export function createListOfAllChars(trainingExamples) {
  /** @type {Set<String>} */
  let o = new Set();
  trainingExamples.forEach((/** @type {string[]} */ example) => {
    example.forEach((/** @type {string} */ ioPart) => {
      for (let i = 0; i < ioPart.length; i++) {
        o.add(ioPart.charAt(i));
      }
    });
  });
  return Array.from(o);
}
