function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById('result').textContent = "Please enter valid height and weight.";
    document.getElementById('details').innerHTML = "";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let category = '';
  let details = '';

  if (bmi < 18.5) {
    category = 'Underweight';
    details = `
      <h3>Comprehensive Plan for Underweight Individuals</h3>
      <h4>Diet Plan</h4>
      <ul>
        <li><strong>Increase Calorie Intake:</strong> Consume calorie-dense foods like nuts, seeds, avocados, and whole grains.</li>
        <li><strong>Protein-Rich Foods:</strong> Include eggs, chicken, fish, beans, and legumes in your diet.</li>
        <li><strong>Healthy Fats:</strong> Add olive oil, coconut oil, and nut butter to your meals.</li>
        <li><strong>Frequent Meals:</strong> Eat 5-6 small meals throughout the day.</li>
      </ul>
      <h4>Exercise Tips</h4>
      <ul>
        <li><strong>Strength Training:</strong> Focus on building muscle mass with exercises like squats, deadlifts, and bench presses.</li>
        <li><strong>Limit Cardio:</strong> Avoid excessive cardio to prevent burning too many calories.</li>
      </ul>
      <h4>Lifestyle Recommendations</h4>
      <ul>
        <li><strong>Sleep:</strong> Ensure 7-9 hours of quality sleep daily.</li>
        <li><strong>Stress Management:</strong> Practice yoga or meditation to reduce stress.</li>
        <li><strong>Medical Checkup:</strong> Consult a doctor to rule out underlying health issues.</li>
      </ul>
    `;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Normal weight';
    details = `
      <h3>Comprehensive Plan for Normal Weight Individuals</h3>
      <h4>Diet Plan</h4>
      <ul>
        <li><strong>Balanced Diet:</strong> Focus on fruits, vegetables, lean proteins, and whole grains.</li>
        <li><strong>Hydration:</strong> Drink at least 8 glasses of water daily.</li>
        <li><strong>Limit Processed Foods:</strong> Avoid sugary snacks and processed foods.</li>
        <li><strong>Portion Control:</strong> Avoid overeating by controlling portion sizes.</li>
      </ul>
      <h4>Exercise Tips</h4>
      <ul>
        <li><strong>Cardio and Strength Training:</strong> Maintain a mix of cardio and strength training.</li>
        <li><strong>Activities:</strong> Include running, cycling, or swimming in your routine.</li>
        <li><strong>Flexibility:</strong> Practice yoga or Pilates for flexibility and core strength.</li>
      </ul>
      <h4>Lifestyle Recommendations</h4>
      <ul>
        <li><strong>Sleep:</strong> Ensure 7-9 hours of quality sleep daily.</li>
        <li><strong>Regular Checkups:</strong> Visit your doctor for annual health checkups.</li>
        <li><strong>Stress Management:</strong> Practice mindfulness or meditation.</li>
      </ul>
    `;
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
    details = `
      <h3>Comprehensive Plan for Overweight Individuals</h3>
      <h4>Diet Plan</h4>
      <ul>
        <li><strong>Calorie Deficit:</strong> Reduce daily calorie intake by 500-700 calories.</li>
        <li><strong>High-Fiber Foods:</strong> Include vegetables, fruits, and whole grains to feel full longer.</li>
        <li><strong>Limit Sugary Drinks:</strong> Avoid sodas and sugary beverages.</li>
        <li><strong>Healthy Snacks:</strong> Replace chips and cookies with nuts, fruits, or yogurt.</li>
      </ul>
      <h4>Exercise Tips</h4>
      <ul>
        <li><strong>Cardio:</strong> Aim for 45 minutes of cardio 5 times a week.</li>
        <li><strong>Strength Training:</strong> Incorporate strength training to build muscle and boost metabolism.</li>
        <li><strong>Low-Impact Activities:</strong> Start with walking or swimming if new to exercise.</li>
      </ul>
      <h4>Lifestyle Recommendations</h4>
      <ul>
        <li><strong>Sleep:</strong> Ensure 7-9 hours of quality sleep daily.</li>
        <li><strong>Stress Management:</strong> Practice mindfulness or meditation.</li>
        <li><strong>Support:</strong> Join a support group or seek counseling for motivation.</li>
      </ul>
    `;
  } else {
    category = 'Obese';
    details = `
      <h3>Comprehensive Plan for Obese Individuals</h3>
      <h4>Diet Plan</h4>
      <ul>
        <li><strong>Low-Calorie Diet:</strong> Focus on whole, unprocessed foods with low calories.</li>
        <li><strong>Portion Control:</strong> Use smaller plates and avoid second servings.</li>
        <li><strong>Avoid Junk Food:</strong> Eliminate fast food, sugary snacks, and processed meals.</li>
        <li><strong>Consult a Doctor:</strong> Seek professional advice for a personalized plan.</li>
      </ul>
      <h4>Exercise Tips</h4>
      <ul>
        <li><strong>Low-Impact Activities:</strong> Start with walking or swimming.</li>
        <li><strong>Gradual Progression:</strong> Gradually increase intensity with light jogging or cycling.</li>
        <li><strong>Strength Training:</strong> Incorporate strength training to build muscle and boost metabolism.</li>
      </ul>
      <h4>Lifestyle Recommendations</h4>
      <ul>
        <li><strong>Sleep:</strong> Ensure 7-9 hours of quality sleep daily.</li>
        <li><strong>Medical Consultation:</strong> Seek professional help for a personalized plan.</li>
        <li><strong>Support:</strong> Join a support group or seek counseling for motivation.</li>
      </ul>
    `;
  }

  document.getElementById('result').textContent = `Your BMI is ${bmi} (${category}).`;
  document.getElementById('details').innerHTML = details;
}