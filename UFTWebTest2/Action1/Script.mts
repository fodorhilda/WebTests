'Contact US - AOS


Browser("Advantage Shopping").Page("Advantage Shopping").Link("CONTACT US").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebList("categoryListboxContactUs").Select "Tablets" @@ script infofile_;_ZIP::ssf2.xml_;_
wait 5 @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailContactUs").Set "myemail@default.com" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("subjectTextareaContactUs").Set "Hello" + vbLf + "" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("send_btnundefined").Click @@ script infofile_;_ZIP::ssf7.xml_;_
