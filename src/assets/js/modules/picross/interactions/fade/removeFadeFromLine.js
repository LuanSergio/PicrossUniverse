export default function removeFadeFromLine(nodeList) {
  nodeList.forEach(item => {
    item.classList.remove('picross__square--fade');
  })
}
