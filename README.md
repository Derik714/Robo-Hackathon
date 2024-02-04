# Robo-Hackathon
## problem  statement:
 HEALTHCARE INFORMATION ASSISTANT
 In the midst of a crisis, the rebels urgently require a faster and
 more efficient way to aid the wounded. Your mission is to
 develop a cutting-edge assistant capable of swiftly collecting
 crucial information from users, such as their name, email, and
 symptoms. This assistant will not only identify the potential
 disease based on the provided symptoms but also offer
 immediate recommendations for remedies and urgent
 measures
## Project Title: 
Healthcare assistant
##  Description:
The Healthcare Information Assistant is a comprehensive web-based application designed to empower users in managing their health concerns effectively. This project aims to provide a seamless and user-friendly experience for individuals seeking information about symptoms, potential diseases, and personalized health recommendations.
# Key Features
Chatbot Interface: Experience a user-friendly chatbot-style interface that accepts both text and voice inputs for convenient communication of health concerns.
Personalized Recommendations: The recommendation system suggests tailored cures and urgent measures based on identified diseases and symptom severity.
Secure Information Handling: Prioritizing user data security, the assistant ensures confidentiality and privacy throughout the interaction, securing sensitive health information.
Connect with Specialist Doctors: Users can connect with specialist doctors based on identified health issues, explore their credentials, and schedule appointments conveniently.
Effortless Appointment Scheduling: Streamlined appointment scheduling with recommended specialists for a hassle-free user experience.
## Installation
first of all, clone the repo then run "npm i" in the terminal
then setup environment for chatbot ,put your apikey and enviroment of pinecone and run these commmnads in terminal
"conda create -P env python=3.8 -Y"
conda activate ./env
python app.py 
these were for setting chatbot
now for webpage:
open terminal in webfolder, first start the mongodb server
open new terminal in same folder, run "python app.py"
open another terminal and run "node server.js"
your website is up and running on http://localhost:5000
## usage
Chatbot Interface: Interact with the chatbot by typing or using voice inputs to communicate your health concerns.
Personalized Recommendations: Receive tailored advice by providing information about your symptoms and health history.
Connecting with Specialists: Use the assistant to connect with specialist doctors. Explore their credentials and schedule appointments seamlessly.
Appointment Scheduling: Book appointments with recommended specialists effortlessly through the assistant
## Credits
nodejs
passportjs
expressjs
websocket
joblib
pickle
python
html, css, js
numpy, pandas, random forest classification
ctransformers==0.2.5
sentence-transformers==2.2.2
pinecone-client
langchain==0.0.225
flask
pypdf
python-dotenv
huggingface embedding and others
