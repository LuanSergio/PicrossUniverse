export default function fadeLine(nodeList) {
  nodeList.forEach(item => {
    item.classList.add('picross__square--fade');
  })
}
