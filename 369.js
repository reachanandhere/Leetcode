var plusOne = function (head) {
  let temp = reverse(head),
    carry = 1;
  let newHead = temp;

  while (temp) {
    temp.val += carry;
    if (temp.val > 9) {
      temp.val = 0;
      carry = 1;
    } else {
      carry = 0;
      break;
    }
    temp = temp.next;
  }

  if (carry == 1) {
    let newNode = new ListNode(1);
    head = reverse(newHead);
    newNode.next = head;
    return newNode;
  } else return reverse(newHead);
};
