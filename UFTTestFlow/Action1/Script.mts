
'Wrong Sign-on Data

SystemUtil.Run "chrome.exe", "www.amazon.com"

Browser("Amazon.com. Spend less.").Page("Amazon.com. Spend less.").Link("Hello, Sign in Account").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Amazon.com. Spend less.").Page("Amazon Sign-In").Link("Create your Amazon account").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Amazon.com. Spend less.").Page("Amazon Registration").WebEdit("customerName").Set "John" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Amazon.com. Spend less.").Page("Amazon Registration").WebEdit("email").Set "john@default.com" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Amazon.com. Spend less.").Page("Amazon Registration").WebEdit("password").SetSecure "62cff119a958d213c3412f6536929da20ce0447236f7" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Amazon.com. Spend less.").Page("Amazon Registration").WebEdit("passwordCheck").SetSecure "62cff11d922ee12f81d74bf4c5584531818d9ff45512" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Amazon.com. Spend less.").Page("Amazon Registration").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf7.xml_;_

Browser("Amazon.com. Spend less.").Close
