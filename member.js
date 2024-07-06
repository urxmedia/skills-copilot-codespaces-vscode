function skillsMember() {
  // 1. Get the value of the input field with id="member"
  var member = document.getElementById("member").value;
  // 2. If member is empty, return
  if (member === "") return;
  // 3. Create a new list item with the text from the member
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(member));
  // 4. Append the new element to the list
  document.getElementById("member-list").appendChild(li);
  // 5. Clear the input field
  document.getElementById("member").value = "";
}