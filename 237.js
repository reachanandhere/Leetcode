var deleteNode = function(node) {
    if(!node || !node.next) return null
    node.val = node.next.val
    node.next = node.next.next 
};