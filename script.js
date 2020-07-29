// Generate Pin

function randomNumber() {
  let random = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("generated-pin").value = random;
}

// Input Pin

document.getElementById("pin-input").value = "";
function numberClick(num) {
  let pin = document.getElementById("pin-input");
  pin.value = pin.value + num;
  if (num == "") {
    pin.value = num;
  }
}

function backSpace() {
  let pin = document.getElementById("pin-input").value;
  let backSpace = pin.slice(0, pin.length - 1);
  document.getElementById("pin-input").value = backSpace;
}

// Submit Pin

function submitBtn() {
  const generatedPin = document.getElementById("generated-pin").value;
  const inputPin = document.getElementById("pin-input").value;

  if (generatedPin == inputPin && generatedPin != "" && inputPin != "") {
    document.getElementById("pin-match-true").style.display = "block";
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("try-count-text").style.display = "none";
    document.getElementById("pin-match-false").style.display = "none";
  } else {
    document.getElementById("pin-match-false").style.display = "block";
    const tryCountCurrent = document.getElementById("try-count").innerText;
    const tryCountNumberCurrent = parseInt(tryCountCurrent);
    const tryCountNumber = parseInt("1");

    if (tryCountNumberCurrent > 1) {
      const tryCount = tryCountNumberCurrent - tryCountNumber;
      document.getElementById("try-count").innerText = tryCount;
    } else if (tryCountNumberCurrent == 1) {
      document.getElementById("submit-btn").disabled = "true";
      document.getElementById("submit-btn").style.backgroundColor = "#425062";
      document.getElementById("try-count-text").style.display = "none";
    }
  }
}
