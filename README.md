# belly-button-challenge

![Screenshot 2024-04-03 110553](https://github.com/kanienie/belly-button-challenge/assets/124482339/ab9216f3-d19f-4221-8880-f31816aea754)
# Project Background
This assignment involved creating an interactive dashboard to explore the Belly Button Biodiversity dataset, which contains information about the microbial species found in human navels. The dataset, provided in JSON format, highlights certain microbial species that are commonly found in human navels, while others are less prevalent.

The dashboard allows users to select a test subject ID, and upon selection, dynamically populates demographic information associated with that ID. Additionally, the dashboard displays a bar chart, bubble chart, all of which update dynamically based on the selected test subject ID. The implementation utilizes Plotly for charting, JavaScript for functionality, HTML for structure, CSS for styling, and D3.js for data manipulation.

All required resources including CSS, JS, and images are stored in the static folder, while the main HTML file, index.html, resides in the root folder of the GitHub repository.

# Plotly
To fulfill the task of retrieving test subject demographics and drawing a bar chart abd bubble chart displaying each individual's samples, the following steps were taken:

1.Data Retrieval: The samples.json file was read in using the D3 library to access the dataset.

2. Demographics Display: Metadata information for each test subject was retrieved and displayed on the dashboard as an unordered list item, with each key-value pair representing a demographic attribute.

3. Data Preparation for Bar Chart: The required data for plotting the bar chart was obtained, including sample_values, otu_ids, and otu_labels. These arrays were sliced and reversed to display only the top 10 values in descending order.

4. Bar Chart Creation: A trace was created using the sliced and reversed arrays, and a bar chart was plotted using Plotly.

  5.Bubble Chart Creation: The necessary data for the bubble chart, including otu_ids, sample_values, and otu_labels, was used to create a trace. The bubble chart was then plotted using Plotly.

By following these steps, the dashboard successfully presented the test subject demographics and visualized their samples through interactive bar and bubble charts.

Resources used:
-Stack Overflow
-Collegues
-ChatGPT
-Youtube












