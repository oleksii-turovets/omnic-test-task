task 

Assignment
Design: OMNIC_test (Ukraine)

Form names:
"Home."
"Packed"
"Cell Size"

General description of the flow:
User goes to a link with device ID (uid) - go to "Home" form.

Request basic information about the device from the back-end - from the response display the device number on the forms.
The user can click on the green rectangle with a picture of a llama and the caption "Send a parcel through a post office" - go to the "Packed" screen.

On the "Packed" form:

On the "I packed well" button, go to the "Select Parcel Size" form.

On the "Cell Size" form:

Request information about available cells from the back-end.
Display the size map
If the size is not available, highlight the background of the size Red.
The user can select a size, highlight the background in Green when selected, then activate the "Confirm" button.

Clarification of the implementation:
Transition to the main page (transition to the site) to implement with the root path-parameter - device_uid, which is used for further transitions.
Selection of the names of transitions (route) - arbitrary, but must reflect the logical content of the page.
Some transitions may be intentionally omitted in the description of the flow - it is provided that they are obvious from the design.
Some elements have no active actions at the moment - it is possible to add logic for them.
API 

Queries:
Basic device information.GET /.Response data: use data.device field to display device number
Information about available cells.GET .Response data: use field data.cell_types - size array (use params.width and params.height for analysis)
The environment: 
URL backend: **** ( - this is the development environment)
Test data: 
device_uid : 34670a76-6022-4df5-ac1d-68f88589c904
Criteria for evaluating the implementation:
Basic flow.
Project layout/structure (division into components and modules).
Implementation of requests/processing of API responses.
Use of TypeScript.
Description of the styles. Adaptability.
Logical workflow and project startup.

