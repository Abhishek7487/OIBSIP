const ans = document.querySelector(".ans");

// Operations
function insert(args) {
  ans.value += args;
}

function clean() {
  ans.value = "";
}

function back() {
  ans.value = ans.value.slice(0, -1);
}

function equals() {
  ans.value = eval(ans.value);
}
