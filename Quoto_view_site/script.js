// let rel = document.querySelector(".reload");
// let sha = document.querySelector(".share");
// let cop = document.querySelector(".copy");
const lek = document.querySelector(".lekha");





// reload
{
    let reloadButton = document.querySelector(".reload");
    reloadButton.addEventListener("click",m1);
    function m1(){
        // let f=fetch("https://type.fit/api/quotes");
        let f=fetch("http://api.quotable.io/random");
        f   
            .then((value1)=>{
                return value1.json();
                // return value1.text();
            })
            .then((value2)=>{
                console.log(value2);
                // lek.textContent=value2;
                // lek.textContent=JSON.parse(value2).content;
                lek.textContent=value2.content;
                alert("Reload done");
                // location.reload();
            })
    }
}





// share
{
    let shareButton = document.querySelector(".share");
    shareButton.addEventListener("click",m2);
    function m2(){
        const lek = document.querySelector(".lekha");
        alert("Share this content");
        const shareUrl = lek.textContent;
        // const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        const facebookUrl = `https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fexample.com&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=bn_IN=${encodeURIComponent(shareUrl)}`;
        window.open(facebookUrl, "_blank");
    }
}





// copy
{

    const copyButton = document.querySelector(".copy");

    copyButton.addEventListener("click", function () {
        const textToCopy = lek.textContent;
        // const textToCopy = "hello";

        if (navigator.clipboard) {
            navigator.clipboard.writeText(textToCopy)
                .then(function () {
                    alert("Text copied to clipboard");
                })
                .catch(function (err) {
                    console.error("Failed to copy text: ", err);
                });
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            alert("Text copied to clipboard");
        }
    });
}
