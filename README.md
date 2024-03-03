//task 1
Here in first task I have  created a component with selector and template which help to display the  items and descriptions on the web page. I created a class which contains  two arrays named as item and description.
then in template a have us ngfor directive to iterate through the
array and 'i' to take index value and implements the logic and diaplys the data as
Angular
Items : list of daily items
Item 1
Milk : Protein Source
Item 2
Choco : A Creamy Bar
Item 3
Water : A Living Source
//task 2
Here in second task I have created a service class named as Dataservice and wrote two functions one function getitems() to return the items and other function getdescription() to return the description of the 
items
//task 3
Here in third task I have created a component file and service class and implement dependancy injection concept in tthe constructor of component class to retrieve the data from the dataservice class into component 
and write a logic to display the items like i have used ngFor directive to iterate through the items and description array and i have taken 'i' to store index in it. Then i wrote item[i] and description[i] which 
takes
the idexed value of items and description and displays the data
OUTPUT
Angular
Items : list of daily items
Item 1
Milk : Protein Source
Item 2
Choco : A Creamy Bar
Item 3
Water : A Living Source
