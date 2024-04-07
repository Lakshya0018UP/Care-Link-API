# Disease API

Welcome to the Disease API! This API provides information about 30 different diseases. Whether you're a developer, researcher, or simply curious, this API can be a valuable resource for accessing details about various diseases.

## Usage

To use the Disease API, you can make HTTP requests to the provided endpoints. The base URL for the API is:


### Endpoints

#### Get All Diseases


This endpoint returns a list of all available diseases along with their details.

#### Get Disease by ID


Replace `:id` with the ID of the disease you want to retrieve. This endpoint returns detailed information about the specified disease.

### Data Structure

Each disease object returned by the API has the following structure:

- `id` (integer): The unique identifier of the disease.
- `name` (string): The name of the disease.
- `description` (string): A brief description of the disease.
- `symptoms` (array of strings): Symptoms associated with the disease.
- `treatments` (array of strings): Treatment options for the disease.
- `prevention` (array of strings): Prevention measures for the disease.
- `references` (array of strings): External references or sources for more information about the disease.

### Sample Diseases

1. COVID-19
2. Influenza
3. Diabetes
4. Hypertension
5. Malaria
6. Tuberculosis
7. HIV/AIDS
8. Alzheimer's Disease
9. Parkinson's Disease
10. Breast Cancer
11. Lung Cancer
12. Prostate Cancer
13. Leukemia
14. Asthma
15. Arthritis
16. Osteoporosis
17. Hepatitis B
18. Hepatitis C
19. Dengue Fever
20. Cholera
21. Ebola Virus Disease
22. Zika Virus Infection
23. SARS (Severe Acute Respiratory Syndrome)
24. MERS (Middle East Respiratory Syndrome)
25. Stroke
26. Heart Disease
27. Chronic Obstructive Pulmonary Disease (COPD)
28. Measles
29. Rubella
30. Chickenpox

### Contributing

Contributions to add more diseases, improve data accuracy, or enhance the functionality of the API are welcome. If you'd like to contribute, please fork the repository, make your changes, and submit a pull request.


