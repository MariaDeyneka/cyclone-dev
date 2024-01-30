if (window.innerWidth <= 900) {
  const imageContainer = document.getElementById("smallImage");
  const img = document.createElement("img");
  img.src = "images/logo_circle.svg";
  img.alt = "logo_circle";
  img.className = "logo";
  imageContainer.appendChild(img);
} else {
  const imageContainer = document.getElementById("largeImage");
  const img = document.createElement("img");
  img.src = "images/logo_big.svg";
  img.alt = "logo_big";
  img.className = "logo";
  imageContainer.appendChild(img);
}

const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("email_input");
const helperMessage = document.getElementById("helperMessage");
const submitButton = document.getElementById("submit_button");

emailForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

submitButton.addEventListener("click", function () {
  const emailValue = emailInput.value;

  if (isValidEmail(emailValue)) {
    const requestData = {
      collection: "CollectionName",
      select: {
        field1: "value1",
        field2: "value2",
      },
      options: {
        $sort: { "${field_name}": 1 },
        $skip: 0,
        $limit: 10,
        $count: 1,
      },
    };

    $.ajax({
      type: "POST",
      url: "http://games.grandblockchain.org/cyclonchain/sm.php",
      contentType: "application/json",
      data: JSON.stringify(requestData),
      dataType: "json",
      success: function (response) {
        if (response.Status === "Ok") {
          helperMessage.textContent = "Success! Data saved.";
        } else {
          helperMessage.textContent = "Error in API response";
        }
      },
      error: function () {
        helperMessage.textContent = "Error in making the API request";
      },
    });
  } else {
    helperMessage.textContent = "Invalid email address";
  }
});

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function navigate() {
  const url = "https://docsend.com/view/2zmz8cn63gatvu9q";
  window.open(url, "_blank");
}
