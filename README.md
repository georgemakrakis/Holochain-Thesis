# Holochain-Thesis
Demo app using Holochain as part of my BSc thesis at ICSD, Univeristy of the Aegean
The first versions of this app are based on HoloWorld sample that can be found here https://github.com/holochain/HoloWorld 

## Installation
To run this app you must have first installed hoilochain on your PC (check this for holochain installation: http://developer.holochain.org/Install_Holochain). Clone the repo and then through CLI navigate to the project file and run the **hcadmin join . app-name** command to install it on your node. This will create a folder inside the directory that holochain was first installed (/home/user/.holochain for Linux systems)

## Run
To run the app with **peristent data** use the **hcd app-name** command (more can be found here http://developer.holochain.org/Command_Line_Tools in the hcd section). To **delete-clear data** after each run go to the project folder and run **hcdev web 3141**
