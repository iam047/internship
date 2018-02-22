function startNode(type, value, {sourceProperty, sourceValue} ) {
    return {
        type,
        value,
        src: sourceValue,
    }
}

console.log(startNode("Identifier", "foo", {
    sourceProperty: "src",
    sourceValue: "bar.js"
}))