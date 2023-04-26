let trafficLight = "orange";


if (trafficLight == "green")
{
    console.log("On passe");
}
else if (trafficLight == "orange")
{
    console.log("on s'arrete");
}
else if (trafficLight == "red")
{
    console.log("on stop !");
}
else {
    console.log("c'est le bordel !!");
}







switch (trafficLight)
{
    case "green": 
        console.log("On passe"); 
    break;

    case "orange": 
        console.log("on s'arrete"); 
    break;

    case "red": 
        console.log("on stop !"); 
    break; 

    default: 
        console.log("c'est le bordel !!");
}