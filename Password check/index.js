function same() {
  if (
    document.getElementById("password").value ==
    document.getElementById("confirmPassword").value
  ) {
    document.getElementById("alertSuccess").style.display = "block";
    document.getElementById("alertDanger").style.display = "none";
  } else {
    document.getElementById("alertDanger").style.display = "block";
    document.getElementById("alertSuccess").style.display = "none";
  }
}
