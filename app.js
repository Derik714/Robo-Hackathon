
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  // Check if user is logged in (you can replace this with your actual authentication logic)
  const isLoggedIn = false; // Change this to true if the user is logged in

  // Initial toggle of login/logout buttons based on user's login status
  toggleLoginButtons(isLoggedIn);
});

function analyzeSymptoms() {
  // Implement logic for symptom analysis and results display here
  // For simplicity, let's assume a basic message for now
  const name = document.getElementById("name").value;
  const contactMethod = document.getElementById("contactMethod").value;

  const resultsContainer = document.getElementById("results");
  const confirmationContainer = document.getElementById("confirmation");

  // Sample logic (replace with actual analysis)
  const symptoms = document.getElementById("symptoms").value;
  const potentialDiseases = ["Cold", "Flu"];
  const recommendations = ["Rest", "Stay hydrated"];

  // Display analysis results
  resultsContainer.innerHTML = `<p>Based on the analysis, potential diseases have been identified: ${potentialDiseases.join(
    ", "
  )}. 
        Recommendations: ${recommendations.join(
          ", "
        )}. A healthcare professional will review your information shortly.</p>`;

  // Display confirmation message
  confirmationContainer.innerHTML = `Thank you, ${name}! We will contact you via ${contactMethod} shortly.`;
}

function toggleLoginButtons(isLoggedIn) {
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  // Toggle the display of login/logout buttons based on user's login status
  if (isLoggedIn) {
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
  } else {
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
  }
}

// Array of Symptoms
const symptomsList = ['Itching', 'Skin Rash', 'Skin Eruptions', 'Sneezing', 'Shivering', 'Chills', 'Joint Pain', 'Stomach Pain', 'Acidity', 'Ulcers on Tongue', 'Muscle Wasting', 'Vomiting', 'Burning Urination', 'Spotting Urination', 'Fatigue', 'Weight Gain', 'Anxiety', 'Cold Hands/Feet', 'Mood Swings', 'Weight Loss', 'Restlessness', 'Lethargy', 'Throat Patches', 'Irregular Sugar', 'Cough', 'High Fever', 'Sunken Eyes', 'Breathlessness', 'Sweating', 'Dehydration', 'Indigestion', 'Headache', 'Yellowish Skin', 'Dark Urine', 'Nausea', 'Loss of Appetite', 'Pain Behind Eyes', 'Back Pain', 'Constipation', 'Abdominal Pain', 'Diarrhea', 'Mild Fever', 'Yellow Urine', 'Yellowing of Eyes', 'Liver Failure', 'Fluid Overload', 'Stomach Swelling', 'Swelled Lymph Nodes', 'Malaise', 'Blurred Vision', 'Phlegm', 'Throat Irritation', 'Redness of Eyes', 'Sinus Pressure', 'Runny Nose', 'Congestion', 'Chest Pain', 'Weakness in Limbs', 'Fast Heart Rate', 'Pain during Bowel Movements', 'Anal Pain', 'Bloody Stool', 'Anus Irritation', 'Neck Pain', 'Dizziness', 'Cramps', 'Bruising', 'Obesity', 'Swollen Legs', 'Swollen Blood Vessels', 'Puffy Face/Eyes', 'Enlarged Thyroid', 'Brittle Nails', 'Swollen Extremities', 'Excessive Hunger', 'Extra Marital Contacts', 'Lips Tingling', 'Slurred Speech', 'Knee Pain', 'Hip Joint Pain', 'Muscle Weakness', 'Stiff Neck', 'Swelling Joints', 'Movement Stiffness', 'Spinning Movements', 'Loss of Balance', 'Unsteadiness', 'Weakness One Side', 'Loss of Smell', 'Bladder Discomfort', 'Foul Smell of Urine', 'Continuous Feel of Urine', 'Passage of Gases', 'Internal Itching', 'Toxic Look (Typhos)', 'Depression', 'Irritability', 'Muscle Pain', 'Altered Sensorium', 'Red Spots Body', 'Belly Pain', 'Abnormal Menstruation', 'Dischromic Patches', 'Watering Eyes', 'Increased Appetite', 'Polyuria', 'Family History', 'Mucoid Sputum', 'Rusty Sputum', 'Lack of Concentration', 'Visual Disturbances', 'Receiving Blood Transfusion', 'Receiving Unsterile Injections', 'Coma', 'Stomach Bleeding', 'Distended Abdomen', 'History of Alcohol Consumption', 'Blood in Sputum', 'Veins on Calf', 'Palpitations', 'Painful Walking', 'Pus-filled Pimples', 'Blackheads', 'Scurring', 'Skin Peeling', 'Silver Dusting', 'Small Dents in Nails', 'Inflammatory Nails', 'Blister', 'Red Sore Nose', 'Yellow Crust Ooze', 'Prognosis'];

symptomsList.sort();
// Function to dynamically generate dropdowns
function generateDropdowns() {
  const symptomDropdowns = document.getElementById("symptomDropdowns");
  symptomDropdowns.innerHTML = "";

  for (let i = 1; i <= 17; i++) {
    const dropdownContainer = document.createElement("div");
    dropdownContainer.classList.add("dropdown-container");

    const dropdown = document.createElement("select");
    dropdown.classList.add("dropdown");
    dropdown.setAttribute("id", `symptom${i}`);

    // Add default option
    const defaultOption = document.createElement("option");
    defaultOption.value = `Select Symptom ${i}`; // Set the value correctly
    defaultOption.text = `Select Symptom ${i}`;
    dropdown.add(defaultOption);

    // Add symptoms to the dropdown
    for (const symptom of symptomsList) {
      const option = document.createElement("option");
      option.value = symptom;
      option.text = symptom;
      dropdown.add(option);
    }

    dropdownContainer.appendChild(dropdown);
    symptomDropdowns.appendChild(dropdownContainer);
  }
}

// Function to predict disease based on selected symptoms
function predictDisease() {
  const selectedSymptoms = [];

  // Collect selected symptoms from dropdowns
  for (let i = 1; i <= 17; i++) {
    const dropdown = document.getElementById(`symptom${i}`);
    const selectedSymptom = dropdown.value;

    if (selectedSymptom !== "Select Symptom "+i) {
      selectedSymptoms.push(selectedSymptom);
    }
  }



//   dataset 

const symptomData = `
Itching: 1
Skin Rash: 3
Skin Eruptions: 4
Sneezing: 4
Shivering: 5
Chills: 3
Joint Pain: 3
Stomach Pain: 5
Acidity: 3
Ulcers on Tongue: 4
Muscle Wasting: 3
Vomiting: 5
Burning Urination: 6
Spotting Urination: 6
Fatigue: 4
Weight Gain: 3
Anxiety: 4
Cold Hands/Feet: 5
Mood Swings: 3
Weight Loss: 3
Restlessness: 5
Lethargy: 2
Throat Patches: 6
Irregular Sugar: 5
Cough: 4
High Fever: 7
Sunken Eyes: 3
Breathlessness: 4
Sweating: 3
Dehydration: 4
Indigestion: 5
Headache: 3
Yellowish Skin: 3
Dark Urine: 4
Nausea: 5
Loss of Appetite: 4
Pain Behind Eyes: 4
Back Pain: 3
Constipation: 4
Abdominal Pain: 4
Diarrhea: 6
Mild Fever: 5
Yellow Urine: 4
Yellowing of Eyes: 4
Liver Failure: 6
Fluid Overload: 6
Stomach Swelling: 7
Swelled Lymph Nodes: 6
Malaise: 6
Blurred Vision: 5
Phlegm: 5
Throat Irritation: 4
Redness of Eyes: 5
Sinus Pressure: 4
Runny Nose: 5
Congestion: 5
Chest Pain: 7
Weakness in Limbs: 7
Fast Heart Rate: 5
Pain during Bowel Movements: 5
Anal Pain: 6
Bloody Stool: 5
Anus Irritation: 6
Neck Pain: 5
Dizziness: 4
Cramps: 4
Bruising: 4
Obesity: 4
Swollen Legs: 5
Swollen Blood Vessels: 5
Puffy Face/Eyes: 5
Enlarged Thyroid: 6
Brittle Nails: 5
Swollen Extremities: 5
Excessive Hunger: 4
Extra Marital Contacts: 5
Lips Tingling: 4
Slurred Speech: 4
Knee Pain: 3
Hip Joint Pain: 2
Muscle Weakness: 2
Stiff Neck: 4
Swelling Joints: 5
Movement Stiffness: 5
Spinning Movements: 6
Loss of Balance: 4
Unsteadiness: 4
Weakness One Side: 4
Loss of Smell: 3
Bladder Discomfort: 4
Foul Smell of Urine: 5
Continuous Feel of Urine: 6
Passage of Gases: 5
Internal Itching: 4
Toxic Look (Typhos): 5
Depression: 3
Irritability: 2
Muscle Pain: 2
Altered Sensorium: 2
Red Spots Body: 3
Belly Pain: 4
Abnormal Menstruation: 6
Dischromic Patches: 6
Watering Eyes: 4
Increased Appetite: 5
Polyuria: 4
Family History: 5
Mucoid Sputum: 4
Rusty Sputum: 4
Lack of Concentration: 3
Visual Disturbances: 3
Receiving Blood Transfusion: 5
Receiving Unsterile Injections: 2
Coma: 7
Stomach Bleeding: 6
Distended Abdomen: 4
History of Alcohol Consumption: 5
Blood in Sputum: 5
Veins on Calf: 6
Palpitations: 4
Painful Walking: 2
Pus-filled Pimples: 2
Blackheads: 2
Scurring: 2
Skin Peeling: 3
Silver Dusting: 2
Small Dents in Nails: 2
Inflammatory Nails: 2
Blister: 4
Red Sore Nose: 2
Yellow Crust Ooze: 3
Prognosis: 5
`;

const symptomDictionary = {};

// Split the data by line and then by tab to get symptom and number
const lines = symptomData.trim().split('\n');
lines.forEach(line => {
    const [symptom, number] = line.split('\t');
    symptomDictionary[symptom] = parseInt(number, 10);
});



 
const valueList = selectedSymptoms.map(key => symptomDictionary[key]);
console.log(valueList)
const axios = require('axios');

const jsonData = JSON.stringify({ values: valueList });

axios.post('http://localhost:5000/prediction', jsonData, {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
  
//   console.log(valueList)
  // Display prediction results
//   const predictionResults = document.getElementById("predictionResults");
//   predictionResults.innerHTML = "";

//   if (selectedSymptoms.length > 0) {
//     const resultsMessage = document.createElement("p");
//     resultsMessage.textContent = `Predicted Disease based on Symptoms: ${selectedSymptoms.join(
//       ", "
//     )}`;
//     predictionResults.appendChild(resultsMessage);
//   } else {
//     const errorMessage = document.createElement("p");
//     errorMessage.textContent =
//       "Please select at least one symptom for prediction.";
//     errorMessage.style.color = "red";
//     predictionResults.appendChild(errorMessage);
//   }
}

// Generate initial dropdowns on page load
generateDropdowns();
