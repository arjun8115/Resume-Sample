

var bio = {
"name" : "Arjun Jaiswal",
"role" : "Web Developer",
"contact" : {
"mobile" : "81156028080",
"email" : "arjunjaiswal775@gmail.com",
"github" : "arjun8115",
"twitter" : "@arjun8115",
"location" : "Sultanpur"
},
"welcomeMessage" : "lorem ipsum dolor etc etc",
"skills" : ["awesomness","delevering things","xyz","abc"],
"bioPic" : "fry.jpg"
}

var education = {
	"schools" : [
	{
     "name" : "KNIT",
     "city" : "Sultanpur",
     "degree" : "Btech",
     "majors" : "IT",
     "dates" : 2020,
     "url" : "www.knit.ac.in"
 },
 {
 	   "name" : "ST Thomas school",
     "city" : "Bhadohi",
     "degree" : "Intermediate",
     "majors" : "Science",
     "dates" : 2013
 }
	],
	"onlinecourses" : [
     {
     	"title" : "Javascript crash course",
     	"school" : "udacity",
     	"dates" : "2019",
     	"url" : "https://classroom.udacity.com/courses/ud804"
     }
	]
} 


var work = {
	"jobs" : [
{
"employer" : "planet express",
"title" : "Delivery boy",
"dates" : "January 2019 - Future",
"location" : "Sultanpur",
"description" : "The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town of Gaeta in Lazio, on the border with Campania.[2] Modern pizza was invented in Naples, and the dish and its variants have since become popular in many countries.[3] Today it is one of the most popular foods in the world and a common fast food item in Europe and North America, available at pizzerias (restaurants specializing in pizza), restaurants offering Mediterranean cuisine, and via pizza delivery.[3][4] Many companies sell ready-baked frozen pizzas to be reheated in an ordinary home oven."
},
{
"employer" : "Paunci pizza",
"title" : "Delivery boy",
"dates" : "1998 - December 31,1999",
"location" : "Delhi",
"description" : "The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town of Gaeta in Lazio, on the border with Campania.[2] Modern pizza was invented in Naples, and the dish and its variants have since become popular in many countries.[3] Today it is one of the most popular foods in the world and a common fast food item in Europe and North America, available at pizzerias (restaurants specializing in pizza), restaurants offering Mediterranean cuisine, and via pizza delivery.[3][4] Many companies sell ready-baked frozen pizzas to be reheated in an ordinary home oven."
}
	]

}


var projects = {
"projects" : [
{
"title" : "Sample project 1",
"dates" : "2019",
"description" : "Pizza was brought to the United States with Italian immigrants in the late nineteenth century[26] and first appeared in areas where Italian immigrants concentrated. The country's first pizzeria, Lombardi's, opened in 1905.[27] Following World War II, veterans returning from the Italian Campaign after being introduced to Italy's native cuisine proved a ready market for pizza in particular.[28] Since then pizza consumption has exploded in the U.S.[29] Pizza chains such as Domino's, Pizza Hut, and Papa John's, pizzas from take and bake pizzerias, and chilled or frozen pizzas from supermarkets make pizza readily available nationwide. 13% of the US population consumes pizza on any given day.[30]",
"images" : [
"project.png",
"project2.png"
]
}
]
}


var formattedname = HTMLheaderName.replace("%data%",bio.name);
var formattedrole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedrole);
$("#header").prepend(formattedname);


var formattedmobile = HTMLmobile.replace("%data%",bio.contact.mobile);
$("#topContacts").append(formattedmobile);
var formattedemail = HTMLemail.replace("%data%",bio.contact.email);
$("#topContacts").append(formattedemail);
var formattedgithub = HTMLgithub.replace("%data%",bio.contact.github);
$("#topContacts").append(formattedgithub);
var formattedtwitter = HTMLtwitter.replace("%data%",bio.contact.twitter);
$("#topContacts").append(formattedtwitter);
var formattedlocation = HTMLlocation.replace("%data%",bio.contact.location);
$("#topContacts").append(formattedlocation);


var image = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(image);
var welcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(welcome);


if(bio.skills.length>0){

	$("#header").append(HTMLskillsStart);

	var formattedskill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedskill);
	formattedskill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedskill);
	formattedskill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedskill);
	formattedskill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedskill);
}


$("#workExperience").append(HTMLworkStart);
for (var i = 0; i <work.jobs.length ; i++) {
var workemployer  = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
workemployer += HTMLworkTitle.replace("%data%",work.jobs[i].title);
$("#workExperience").append(workemployer);
var workdates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
$("#workExperience").append(workdates);
var worklocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
$("#workExperience").append(worklocation);
var workdescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
$("#workExperience").append(workdescription);
}


$("#projects").append(HTMLprojectStart);
var projecttitle = HTMLprojectTitle.replace("%data%",projects.projects[0].title);
$("#projects").append(projecttitle);
var projectdates = HTMLprojectDates.replace("%data%",projects.projects[0].dates);
$("#projects").append(projectdates);
var projectdescription = HTMLprojectDescription.replace("%data%",projects.projects[0].description);
$("#projects").append(projectdescription);
var projectimage = HTMLprojectImage.replace("%data%",projects.projects[0].images[0]);
$("#projects").append(projectimage);
var projectimage2 = HTMLprojectImage.replace("%data%",projects.projects[0].images[1]);
$("#projects").append(projectimage2);

 
 for(var i=0;i<education.schools.length;i++){
$("#education").append(HTMLschoolStart);
var schoolname = HTMLschoolName.replace("%data%",education.schools[i].name);
schoolname+= HTMLschoolDegree.replace("%data%",education.schools[i].degree);
$("#education").append(schoolname);
var schooldates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
$("#education").append(schooldates);
var schoollocation = HTMLschoolLocation.replace("%data%",education.schools[i].city);
$("#education").append(schoollocation);
var schoolmajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
$("#education").append(schoolmajor);
}

$("#education").append(HTMLonlineClasses);
var onlinetitle = HTMLonlineTitle.replace("%data%",education.onlinecourses[0].title);
onlinetitle+=HTMLonlineSchool.replace("%data%",education.onlinecourses[0].school);
$("#education").append(onlinetitle);
var onlinedate = HTMLonlineDates.replace("%data%",education.onlinecourses[0].dates);
$("#education").append(onlinedate);
var onlineurl = HTMLonlineURL.replace("%data%",education.onlinecourses[0].url);
$("#education").append(onlineurl);

 formattedmobile = HTMLmobile.replace("%data%",bio.contact.mobile);
$("#footerContacts").append(formattedmobile);
 formattedemail = HTMLemail.replace("%data%",bio.contact.email);
$("#footerContacts").append(formattedemail);
 formattedgithub = HTMLgithub.replace("%data%",bio.contact.github);
$("#footerContacts").append(formattedgithub);
 formattedtwitter = HTMLtwitter.replace("%data%",bio.contact.twitter);
$("#footerContacts").append(formattedtwitter);
 formattedlocation = HTMLlocation.replace("%data%",bio.contact.location);
$("#footerContacts").append(formattedlocation);


