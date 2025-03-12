var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> \
    <a target='_blank' href='mailto:arqamt40@gmail.com'> \
        <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt='Gmail'></div> \
    </a> \
    <a target='_blank' href='https://github.com/arqam66'> \
        <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt='GitHub'></div> \
    </a> \
    <a target='_blank' href='https://wa.me/923131203615'> \
        <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt='WhatsApp'></div> \
    </a> \
    <a target='_blank' href='https://www.linkedin.com/in/arqam-hussain-%D8%A7%D8%B1%D9%82%D9%85-%D8%AD%D8%B3%DB%8C%D9%86-1a541a28a/'> \
        <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt='LinkedIn'></div> \
    </a> \
</div>";
var resumeString = "<img src='images/resume_thumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Arqam Hussain Resume.pdf</label></div><a href='https://resume-syed-arqam.netlify.app/' target='_blank'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/dir//Moodbidri+private+Bus+Stand,+Bus+Stand+Rd,+Mudbidri,+Karnataka+574227/@13.0639,74.9991985,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba4ab3d49331379:0x17be05cb5b69caa2!2m2!1d74.9957298!2d13.0680955?hl=en' class='map'></iframe></div><label class='add'><address>B2 'Asara'<br>Kodoli<br>Kolhapur, Maharashtra, INDIA 416114</address>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    var name="";
    if(inputText.toLowerCase().includes("my name is")){
        name=inputText.substring(inputText.indexOf("is")+2);
        if(name.toLowerCase().includes("varshith")){
            sendTextMessage("Ohh! That's my name too");
            
        }
        inputText="input";
    }
    switch (inputText.toLowerCase().trim()) {
      case "intro":
    setTimeout(() => {
        sendTextMessage("Hello there, 👋🏻<br><br>My name is <span class='bold'><a class='alink' href='https://arqam-hussain-portfolio.netlify.app/' target='_blank'>Arqam Hussain</a></span>, and I am a dedicated <span class='bold'>Software Engineering</span> student at <span class='bold'>Sindh Madressatul Islam University</span>. 🎓💻<br><br>With a strong passion for technology and innovation, I am eager to explore opportunities that allow me to apply my skills and contribute meaningfully to the industry.<br><br>I am open to discussing potential job opportunities, collaborations, or any technology-driven initiatives.<br><br>Send <span class='bold'>'help'</span> to learn more about my background and expertise.");
    }, 2000);
    break;

        

        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
            case "skills":
                sendTextMessage("I am currently pursuing a Bachelor's degree in <span class='bold'>Software Engineering</span>.<br><br>\
                I have proficiency in the following programming languages:<br>\
                <span class='bold'>Java, C, PHP, JavaScript, HTML, CSS</span><br><br>\
                I am experienced in the following frameworks and libraries:<br>\
                <span class='bold'>React.js, Node.js, Express.js</span><br><br>\
                I also have hands-on experience with essential development tools:<br>\
                <span class='bold'>Git, GitHub, VS Code, Webpack, Postman, MySQL</span>");
                break;
                case "education":
                    sendTextMessage("I am currently pursuing a <span class='bold'>Bachelor's degree in Software Engineering</span> from <span class='bold'>Sindh Madressatul Islam University, Karachi</span>.<br>\
                    Duration: <span class='bold'>2022 - 2026</span><br><br>\
                    I completed my Pre-Engineering from <span class='bold'>Govt Degree College for Boys</span>.<br>\
                    Duration: <span class='bold'>2019 - 2022</span><br><br>\
                    I completed my Matriculation from <span class='bold'>Placid High School, Karachi</span>.<br>\
                    Duration: <span class='bold'>2017 - 2019</span>");
                    break;
        case "clear":
            clearChat();
            break;
        // case "about":

        //     break;
        case "contact":
            sendTextMessage(contactString);
            break;
            case "projects":
                sendTextMessage("Interested in exploring my projects Check out my GitHub profile! 🚀<br><br>\
                <div class='social'>\
                    <a target='_blank' href='https://github.com/arqam66'>\
                        <div class='socialItem'>\
                            <img class='socialItemI' src='images/github.svg' alt='GitHub'>\
                        </div>\
                    </a>\
                </div>");
                break;
            
        case "time":
            var date = new Date();
            sendTextMessage("Current time is " + date.getHours() + ":" + date.getMinutes());
            break;

        case "date":
            var date = new Date();
            sendTextMessage("Current date is " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
            break;

        case "hai":
            sendTextMessage("Hello there arqam hussain");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        case "hello":
            sendTextMessage("Hello there arqam husssain");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        
        case "hi":
            sendTextMessage("Hello there arqam hussain");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        
        case "hey":
            sendTextMessage("Hello there arqam hussain");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
       

        case "arqam":
            sendTextMessage("Yes, that's me");
            break;
        case "arqam hussain":
            sendTextMessage("Yes, that's me");
            break;
  
            case "website":
    sendTextMessage("You can check my website here <a target='_blank' href='https://arqam-hussain-portfolio.netlify.app/' style='color:rgb(255, 255, 255); font-weight: bold; text-decoration: underline;'>Arqam Hussain</a>");
    break;
    case "github":
        sendTextMessage("You can check my GitHub here <a target='_blank' href='https://github.com/arqam66' style='color:rgb(255, 255, 255); font-weight: bold; text-decoration: underline;'>Arqam Hussain</a>");
        break;
    case "linkedin":
        sendTextMessage("You can check my LinkedIn here <a target='_blank' href='https://www.linkedin.com/in/arqam-hussain-%D8%A7%D8%B1%D9%82%D9%85-%D8%AD%D8%B3%DB%8C%D9%86-1a541a28a/' style='color:rgb(255, 255, 255); font-weight: bold; text-decoration: underline;'>Arqam Hussain</a>");
        break;
            case "friends":
                case "friend":
                    sendTextMessage("I value professional connections and am always open to expanding my network. I believe meaningful collaborations start with good relationships. Feel free to reach out if you'd like to connect!");
                    break;
        case "input":
            setTimeout(()=>{
                // sendTextMessage("What a coincidence!");
                sendTextMessage("Hello "+name+"! How are you?");
            },2000);
            
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}


function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
