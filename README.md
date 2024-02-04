# Robo-Hackathon
## problem  statement: 
 HEALTHCARE INFORMATION ASSISTANT 
 In the midst of a crisis, the rebels urgently require a faster and  <br />
 more efficient way to aid the wounded. Your mission is to<br />
 develop a cutting-edge assistant capable of swiftly collecting<br />
 crucial information from users, such as their name, email, and<br />
 symptoms. This assistant will not only identify the potential<br />
 disease based on the provided symptoms but also offer<br />
 immediate recommendations for remedies and urgent<br />
 measures<br />
## Project Title:<br /> 
Healthcare assistant<br />
##  Description:<br />
The Healthcare Information Assistant is a comprehensive web-based application designed to empower users in managing their health concerns effectively. This project aims to provide a seamless and user-friendly experience for individuals seeking information about symptoms, potential diseases, and personalized health recommendations.<br />
# Key Features<br />
Chatbot Interface: Experience a user-friendly chatbot-style interface that accepts both text and voice inputs for convenient communication of health concerns.<br />
Personalized Recommendations: The recommendation system suggests tailored cures and urgent measures based on identified diseases and symptom severity.<br />
Secure Information Handling: Prioritizing user data security, the assistant ensures confidentiality and privacy throughout the interaction, securing sensitive health information.<br />
Connect with Specialist Doctors: Users can connect with specialist doctors based on identified health issues, explore their credentials, and schedule appointments conveniently.<br />
Effortless Appointment Scheduling: Streamlined appointment scheduling with recommended specialists for a hassle-free user experience.<br />
## Installation<br />
first of all, clone the repo then run "npm i" in the terminal<br />
then setup environment for chatbot ,put your apikey and enviroment of pinecone and run these commmnads in terminal<br />
"conda create -P env python=3.8 -Y"<br />
conda activate ./env<br />
python app.py <br />
these were for setting chatbot<br />
now for webpage:<br />
open terminal in webfolder, first start the mongodb server<br />
open new terminal in same folder, run "python app.py"<br />
open another terminal and run "node server.js"<br />
your website is up and running on http://localhost:5000<br />
## usage<br />
Chatbot Interface: Interact with the chatbot by typing or using voice inputs to communicate your health concerns.<br />
Personalized Recommendations: Receive tailored advice by providing information about your symptoms and health history.<br />
Connecting with Specialists: Use the assistant to connect with specialist doctors. Explore their credentials and schedule appointments seamlessly.<br />
Appointment Scheduling: Book appointments with recommended specialists effortlessly through the assistant<br />
## Credits<br />
nodejs<br />
passportjs<br />
expressjs<br />
websocket<br />
joblib<br />
pickle<br />
python<br />
html, css, js<br />
numpy, pandas, random forest classification<br />
ctransformers==0.2.5<br />
sentence-transformers==2.2.2<br />
pinecone-client<br />
langchain==0.0.225<br />
flask<br />
pypdf<br />
python-dotenv<br />
huggingface embedding and others
