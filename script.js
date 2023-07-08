// let hs = document.getElementById("Human_score");
// let cs = document.getElementById("Computer_score");
document.addEventListener("DOMContentLoaded", function () {
  let cs = parseInt(localStorage.getItem("computer_score")) || 0;
  let hs = parseInt(localStorage.getItem("human_score")) || 0;
  document.getElementById("Human_score").textContent = hs;
  document.getElementById("Computer_score").textContent = cs;

  document
    .getElementById("first_circle")
    .addEventListener("click", rock_function);

  function rock_function() {
    document.getElementById("container-two").style.display = "none";
    document.getElementById("container-three").style.display = "flex";
    document.getElementById("close").style.visibility = "hidden";
    document.getElementById("rules").style.visibility = "hidden";
    let options = ["rock", "paper", "scissors"];
    let ans = "rock";
    let computer_ans = options[Math.floor(Math.random() * options.length)];
    if (ans === computer_ans) {
      document.getElementById("left_circle").innerHTML =
        '<img width="70" height="70" src="rock.jpg">';
      document.getElementById("right_circle").innerHTML =
        '<img width="70" height="70" src="rock.jpg">';
      document.getElementById("mid-decission").textContent = "TIE UP";
      document.getElementById("right_circle").style.boxShadow = "none";
      document.getElementById("left_circle").style.boxShadow = "none";
      document.getElementById("right_circle").style.border =
        "12px solid #0074B6";
      document.getElementById("left_circle").style.border =
        "12px solid #0074B6";
      document.getElementById("pa").innerHTML = "REPLAY";
    } else if (computer_ans === "paper") {
      cs += 1;

      document.getElementById("left_circle").innerHTML =
        '<img width="70" height="70" src="rock.jpg">';
      document.getElementById("right_circle").innerHTML =
        '<img width="70" height="70" src="paper.jpg">';
      document.getElementById("right_circle").style.boxShadow =
        " 0 0 0 25px rgba(59, 103, 32, 1),0 0 0 40px rgba(29, 168, 43, 0.79), 0 0 0 55px rgba(46, 154, 37, 0.39)";
      document.getElementById("left_circle").style.boxShadow = "none";
      document.getElementById("mid-decission").textContent = "YOU LOST";
      document.getElementById("right_circle").style.border =
        "12px solid #FFA943";
      document.getElementById("left_circle").style.border =
        "12px solid #0074B6";
      document.getElementById("pa").innerHTML = "PLAY AGAIN";
    } else {
      hs += 1;
      document.getElementById("left_circle").innerHTML =
        '<img width="70" height="70" src="rock.jpg">';
      document.getElementById("right_circle").innerHTML =
        '<img width="70" height="70" src="scissors.jpg">';
      document.getElementById("left_circle").style.boxShadow =
        " 0 0 0 25px rgba(59, 103, 32, 1),0 0 0 40px rgba(29, 168, 43, 0.79), 0 0 0 55px rgba(46, 154, 37, 0.39)";
      document.getElementById("right_circle").style.boxShadow = "none";
      document.getElementById("mid-decission").textContent = "YOU WIN";
      document.getElementById("right_circle").style.border =
        "12px solid #BD00FF";
      document.getElementById("left_circle").style.border =
        "12px solid #0074B6";
      if (
        parseInt(localStorage.getItem("computer_score")) <
        parseInt(localStorage.getItem("human_score"))
      ) {
        document.getElementById("next-button").style.display = "block";
        document.getElementById("next-button").style.pointerEvents = "auto";
      } else {
        document.getElementById("next-button").style.display = "block";
        document.getElementById("next-button").style.pointerEvents = "none";
      }
      document.getElementById("pa").innerHTML = "PLAY AGAIN";
    }
    localStorage.setItem("computer_score", cs);
    localStorage.setItem("human_score", hs);
    document.getElementById("Human_score").textContent = hs;
    document.getElementById("Computer_score").textContent = cs;
  }

  document
    .getElementById("second_circle")
    .addEventListener("click", sccissor_function);

  function sccissor_function() {
    document.getElementById("container-two").style.display = "none";
    document.getElementById("container-three").style.display = "flex";
    document.getElementById("close").style.visibility = "hidden";
    document.getElementById("rules").style.visibility = "hidden";
    let options = ["rock", "paper", "scissors"];
    let ans = "scissors";
    let computer_ans = options[Math.floor(Math.random() * options.length)];
    if (ans === computer_ans) {
      document.getElementById("left_circle").innerHTML =
        '<img width="70" height="70" src="scissors.jpg">';
      document.getElementById("right_circle").innerHTML =
        '<img width="70" height="70" src="scissors.jpg">';
      document.getElementById("mid-decission").textContent = "TIE UP";
      document.getElementById("right_circle").style.boxShadow = "none";
      document.getElementById("left_circle").style.boxShadow = "none";
      document.getElementById("right_circle").style.border =
        "12px solid #BD00FF";
      document.getElementById("left_circle").style.border =
        "12px solid #BD00FF";
      document.getElementById("pa").innerHTML = "REPLAY";
    } else if (computer_ans === "paper") {
      document.getElementById("left_circle").innerHTML =
        '<img width="70" height="70" src="scissors.jpg">';
      document.getElementById("right_circle").innerHTML =
        '<img width="70" height="70" src="paper.jpg">';
      document.getElementById("left_circle").style.boxShadow =
        " 0 0 0 25px rgba(59, 103, 32, 1),0 0 0 40px rgba(29, 168, 43, 0.79), 0 0 0 55px rgba(46, 154, 37, 0.39)";
      document.getElementById("right_circle").style.boxShadow = "none";
      document.getElementById("mid-decission").textContent = "YOU WIN";
      document.getElementById("right_circle").style.border =
        "12px solid #FFA943";
      document.getElementById("left_circle").style.border =
        "12px solid #BD00FF";
      document.getElementById("pa").innerHTML = "PLAY AGAIN";
      if (
        parseInt(localStorage.getItem("computer_score")) <
        parseInt(localStorage.getItem("human_score"))
      ) {
        document.getElementById("next-button").style.display = "block";
        document.getElementById("next-button").style.pointerEvents = "auto";
      } else {
        document.getElementById("next-button").style.display = "block";
        document.getElementById("next-button").style.pointerEvents = "none";
      }
      hs += 1;
    } else {
      document.getElementById("left_circle").innerHTML =
        '<img width="70" height="70" src="scissors.jpg">';
      document.getElementById("right_circle").innerHTML =
        '<img width="70" height="70" src="rock.jpg">';
      document.getElementById("right_circle").style.boxShadow =
        " 0 0 0 25px rgba(59, 103, 32, 1),0 0 0 40px rgba(29, 168, 43, 0.79), 0 0 0 55px rgba(46, 154, 37, 0.39)";
      document.getElementById("left_circle").style.boxShadow = "none";
      document.getElementById("mid-decission").textContent = "YOU LOST";
      document.getElementById("right_circle").style.border =
        "12px solid #0074B6";
      document.getElementById("left_circle").style.border =
        "12px solid #BD00FF";
      document.getElementById("pa").innerHTML = "PLAY AGAIN";
      cs += 1;
    }
    localStorage.setItem("computer_score", cs);
    localStorage.setItem("human_score", hs);
    document.getElementById("Human_score").textContent = hs;
    document.getElementById("Computer_score").textContent = cs;
  }

  document
    .getElementById("third_circle")
    .addEventListener("click", paper_function);

  function paper_function() {
    document.getElementById("container-two").style.display = "none";
    document.getElementById("container-three").style.display = "flex";
    document.getElementById("close").style.visibility = "hidden";
    document.getElementById("rules").style.visibility = "hidden";
    let options = ["rock", "paper", "scissors"];
    let ans = "paper";
    let computer_ans = options[Math.floor(Math.random() * options.length)];
    if (ans === computer_ans) {
      document.getElementById("left_circle").innerHTML =
        '<img width="70" height="70" src="paper.jpg">';
      document.getElementById("right_circle").innerHTML =
        '<img width="70" height="70" src="paper.jpg">';
      document.getElementById("mid-decission").textContent = "TIE UP";
      document.getElementById("right_circle").style.boxShadow = "none";
      document.getElementById("left_circle").style.boxShadow = "none";
      document.getElementById("right_circle").style.border =
        "12px solid #FFA943";
      document.getElementById("left_circle").style.border =
        "12px solid #FFA943";
      document.getElementById("pa").innerHTML = "REPLAY";
    } else if (computer_ans === "rock") {
      hs += 1;
      document.getElementById("left_circle").innerHTML =
        '<img width="70" height="70" src="paper.jpg">';
      document.getElementById("right_circle").innerHTML =
        '<img width="70" height="70" src="rock.jpg">';
      document.getElementById("left_circle").style.boxShadow =
        " 0 0 0 25px rgba(59, 103, 32, 1),0 0 0 40px rgba(29, 168, 43, 0.79), 0 0 0 55px rgba(46, 154, 37, 0.39)";
      document.getElementById("right_circle").style.boxShadow = "none";
      document.getElementById("mid-decission").textContent = "YOU WIN";
      document.getElementById("right_circle").style.border =
        "12px solid #0074B6";
      document.getElementById("left_circle").style.border =
        "12px solid #FFA943";
      document.getElementById("pa").innerHTML = "PLAY AGAIN";
      if (
        parseInt(localStorage.getItem("computer_score")) <
        parseInt(localStorage.getItem("human_score"))
      ) {
        document.getElementById("next-button").style.display = "block";
        document.getElementById("next-button").style.pointerEvents = "auto";
      } else {
        document.getElementById("next-button").style.display = "block";
        document.getElementById("next-button").style.pointerEvents = "none";
      }
    } else {
      cs += 1;
      document.getElementById("left_circle").innerHTML =
        '<img width="70" height="70" src="paper.jpg">';
      document.getElementById("right_circle").innerHTML =
        '<img width="70" height="70" src="scissors.jpg">';
      document.getElementById("right_circle").style.boxShadow =
        " 0 0 0 25px rgba(59, 103, 32, 1),0 0 0 40px rgba(29, 168, 43, 0.79), 0 0 0 55px rgba(46, 154, 37, 0.39)";
      document.getElementById("left_circle").style.boxShadow = "none";
      document.getElementById("mid-decission").textContent = "YOU LOST";
      document.getElementById("right_circle").style.border =
        "12px solid #BD00FF";
      document.getElementById("left_circle").style.border =
        "12px solid #FFA943";
      document.getElementById("pa").innerHTML = "PLAY AGAIN";
    }
    localStorage.setItem("computer_score", cs);
    localStorage.setItem("human_score", hs);
    document.getElementById("Human_score").textContent = hs;
    document.getElementById("Computer_score").textContent = cs;
  }
});

document.getElementById("close").addEventListener("click", close_rules);

function close_rules() {
  document.getElementById("close").style.visibility = "hidden";
  document.getElementById("rules").style.visibility = "hidden";
}

document.getElementById("rule-button").addEventListener("click", open_rules);

function open_rules() {
  document.getElementById("close").style.visibility = "visible";
  document.getElementById("rules").style.visibility = "visible";
}

document.getElementById("pa").addEventListener("click", back);

function back() {
  document.getElementById("next-button").style.display = "none";
  document.getElementById("container-two").style.display = "block";
  document.getElementById("container-three").style.display = "none";
  document.getElementById("close").style.visibility = "visible";
  document.getElementById("rules").style.visibility = "visible";
}
