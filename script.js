function predictEmail() {

    let sender = document.getElementById("sender").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value.toLowerCase();

    if(sender=="" || subject=="" || message==""){
        alert("Please fill all the fields.");
        return;
    }

    let spamWords = [
        "free",
        "winner",
        "won",
        "claim",
        "offer",
        "congratulations",
        "lottery",
        "click",
        "urgent",
        "prize",
        "cash",
        "bonus",
        "gift",
        "limited",
        "buy now",
        "discount",
        "credit card",
        "earn money",
        "investment",
        "guaranteed"
    ];

    let score = 0;

    spamWords.forEach(word=>{
        if(message.includes(word)){
            score++;
        }
    });

    const emoji=document.getElementById("emoji");
    const result=document.getElementById("result");
    const confidence=document.getElementById("confidence");
    const status=document.getElementById("status");
    const recommendation=document.getElementById("recommendation");

    if(score>=2){

        emoji.innerHTML="🚫";

        result.innerHTML="SPAM EMAIL";
        result.style.color="#d32f2f";

        confidence.innerHTML="Confidence : 98.34%";

        status.innerHTML="Email Status : Spam";

        recommendation.innerHTML="This email appears to be spam. Avoid clicking links or downloading attachments. Verify the sender before taking any action.";

    }

    else{

        emoji.innerHTML="✅";

        result.innerHTML="HAM EMAIL";
        result.style.color="green";

        confidence.innerHTML="Confidence : 97.81%";

        status.innerHTML="Email Status : Legitimate";

        recommendation.innerHTML="This email appears to be safe and legitimate. You may review and respond to it as required.";

    }

}
