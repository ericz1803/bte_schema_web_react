//convert all inputs to arrays
const toArray = (value) => {
  if (Array.isArray(value)) {
    return value;
  } else if (value == null) {
    return [];
  } else {
    return [value];
  }
}

//convert trapi json to list of cytoscape elements
const convertTRAPItoEles = (trapi) => {
  let nodes = trapi.message.query_graph.nodes;
  nodes = Object.entries(nodes).map(([key, node]) => ({group: 'nodes', data: {label: key, color: 'black', id: key, ids: toArray(node.ids), categories: toArray(node.categories), options: toArray(node.ids).map(v => ({text: v, key: v}))}}));

  let edges = trapi.message.query_graph.edges;
  edges = Object.entries(edges).map(([key, edge]) => ({group: 'edges', data: {label: key, color: 'black', id: key, source: edge.subject, target: edge.object, predicates: toArray(edge.predicates)}}));

  return [...nodes, ...edges];
}



export { convertTRAPItoEles };