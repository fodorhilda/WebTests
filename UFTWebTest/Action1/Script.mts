'navigation check AOS - Registration


Browser("UFT Help - Căutare Google").Page("Advantage Shopping").Link("UserMenu").Click @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("UFT Help - Căutare Google").Page("Advantage Shopping").Link("CREATE NEW ACCOUNT").Click @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("UFT Help - Căutare Google").Page("Advantage Shopping").WebEdit("usernameRegisterPage").Set "user1" @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("UFT Help - Căutare Google").Page("Advantage Shopping").WebEdit("emailRegisterPage").Set "user1@default.com" @@ script infofile_;_ZIP::ssf19.xml_;_
Browser("UFT Help - Căutare Google").Page("Advantage Shopping").WebEdit("passwordRegisterPage").SetSecure "62cfe74a3f45d0bf136f9458eb8af8b96875db24eb50" @@ script infofile_;_ZIP::ssf20.xml_;_
Browser("UFT Help - Căutare Google").Page("Advantage Shopping").WebEdit("confirm_passwordRegisterPage").SetSecure "62cfe74e0433e38351f9f0c91840202ae51800a288b5" @@ script infofile_;_ZIP::ssf21.xml_;_
Browser("UFT Help - Căutare Google").Page("Advantage Shopping").WebEdit("first_nameRegisterPage").Set "User" @@ script infofile_;_ZIP::ssf22.xml_;_
Browser("UFT Help - Căutare Google").Page("Advantage Shopping").WebEdit("last_nameRegisterPage").Set "Name" @@ script infofile_;_ZIP::ssf23.xml_;_
Browser("UFT Help - Căutare Google").Page("Advantage Shopping").WebCheckBox("i_agree").Set "ON" @@ script infofile_;_ZIP::ssf24.xml_;_
Browser("UFT Help - Căutare Google").Page("Advantage Shopping").WebButton("register_btnundefined").Click @@ script infofile_;_ZIP::ssf25.xml_;_



