// <--------------------------------DAY 6 TASK----------------------------------------->
// (Q1)  CLASS-MOVIE

// (A)

class Movie
{
    constructor(title,studio,rating="PG")
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }


    static getPG(movies)
    {
        return movies.filter((movie)=>movie.rating==="PG")
    }
    
}
console.log("ANSWER FOR 1B")
// B
const movies1 = new Movie("Pushpa","Redchilli")
console.log(JSON.stringify(movies1,null,2));


const movies2 = [new Movie("Leo","AGS","PG"),
                new Movie("Jailer","Sunpictures","G"),      
                new Movie("Kaithi","DStudio","PG"),     
                new Movie("Thunivu","Studiogreen","A")]

// C
console.log("ANSWER FOR 1C")
const PGratedmovie = Movie.getPG(movies2);
console.log(JSON.stringify(PGratedmovie, null, 2));

// D
console.log("ANSWER FOR 1D")
const movies3 = new Movie("Casino Royale","Eon Productions","PG13")
console.log(JSON.stringify(movies3,null,2));

// <<<<<<<     QUESTION NO 2 (CIRCLE)   >>>>>>>>>>>>>>

console.log("Question 2");

class Circle{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }

    get circleRadius()
    {
        return this.radius;
    }

    set circleRadius(radius)
    {
        this.radius = radius;
    }
    
    get circleColor()
    {
        return this.color;
    }

    set circleColor(color)
    {
        this.color = color;
    }

    get toString()
    {
        return(`"Circle[radius=${this.radius},color=${this.color}]"`)
    }

    get circleArea()
    {
        return (Math.PI * this.radius * this.radius);
    }

    get circleCircumference()
    {
        return (2 * Math.PI * this.radius);
    }
}

const circle = new Circle(1.0,"green"); // Creating object

console.log(circle.circleRadius, "radius by calling get") //getting the radius

circle.circleRadius = 2;  //setting the radius

console.log(circle.circleRadius,"radius after set method");

console.log(circle.circleColor,"`color by calling get`"); //getting the color

circle.circleColor = "Violet"  //setting the color

console.log(circle.circleColor,"`color after set method`");

console.log(circle.toString); //Tostring

console.log(circle.circleArea); //Area of circle

console.log(circle.circleCircumference); //Circumference of circle


// <<<<<<<<<<<<<    QUESTION 3    >>>>>>>>>>>>>
console.log("Question 3");

class Person
{
    constructor(name,age,gender,phonenumber,city)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.phonenumber = phonenumber;
        this.city = city;
    }
}

const person1 = new Person("Mani",22,"Male",9840292929,"Chennai");
const person2 = new Person("Priya",25,"Female",8282828929,"Mumbai");
const person3 = new Person("Ramu",45,"Male",7828282882,"Delhi");

console.log(person1);
console.log(person2);
console.log(person3);

// <<<<<<<<<<<<<<<<   QUESTION 4   >>>>>>>>>>>>>>>>

console.log("Question 4")

class uberPrice{
    constructor(kilometres,rate=30) //setting the default rate as RS 30.
    {
        this.kilometres=kilometres;
        this.rate = rate;
    }

    get uberRate(){
        return this.kilometres * this.rate;
    }

    set uberRate(rate){
        this.rate = rate;
    }
}

const uberrate = new uberPrice(3); //giving the kms travelled as 3.
console.log("Uber price with default price:",uberrate.uberRate) 

const uberrate2 = new uberPrice(3,40); //using set method to set the price.
console.log("Uber price after setting new price:",uberrate2.uberRate);