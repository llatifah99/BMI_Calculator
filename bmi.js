window.onload = () => {
  // Kode atau fungsi yang ingin dijalankan setelah halaman selesai dimuat
  const button = document.querySelector("#btn");
  button.addEventListener("click", calculateBmi);
};
function calculateBmi() {
  //mengambil nilai dari berat dan tinggi user
  const weightUser = document.getElementById("weightUser").value;
  const heightUser = document.getElementById("heightUser").value;
  const resultBmi = document.getElementById("resultBmi");

  if (!weightUser || isNaN(weightUser) || weightUser < 0) {
    resultBmi.innerHTML = "<span class='color-red'>Invalid weight value</span>";
    return;
  } else if (heightUser < 0 || !heightUser || isNaN(heightUser)) {
    resultBmi.innerHTML = "<span class='color-red'>Invalid height value</span>";
    return;
  }
  const bmi = ((weightUser / (heightUser * heightUser)) * 10000).toFixed(2);
  if (bmi < 18.5) {
    resultBmi.innerHTML = `Your BMI is <span class='bold-text'>${bmi}</span> which means you are <span class='bold-text'>Underweight</span>`;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    resultBmi.innerHTML = `Your BMI is <span class='bold-text'>${bmi}</span> which means you are <span class='bold-text'>Normal</span>`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    resultBmi.innerHTML = `Your BMI is <span class='bold-text'>${bmi}</span> which means you are <span class='bold-text'>Overweight</span>`;
  } else {
    resultBmi.innerHTML = `Your BMI is <span class='bold-text'>${bmi}</span> which means you are <span class='bold-text'>Obesity</span>`;
  }
}
