function skillsMember() {
  var member = {
    name: "John",
    age: 25,
    skills: ["html", "css", "js"],
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };

  return member;
}