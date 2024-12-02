function genQR() {
            var api = "https://quickchart.io/qr?text=";
            var myimg = document.getElementById("img");
            var mytext = document.getElementById("qrtext").value;
            var mysize = document.getElementById("size").value;

            if (mytext !== "" && mysize === "100") {
                myimg.src = api + encodeURIComponent(mytext) + "&size=100x100";
            } else if (mytext !== "" && mysize === "150") {
                myimg.src = api + encodeURIComponent(mytext) + "&size=150x150";
            } else if (mytext !== "" && mysize === "200") {
                myimg.src = api + encodeURIComponent(mytext) + "&size=200x200";
            } else if (mytext !== "" && mysize === "250") {
                myimg.src = api + encodeURIComponent(mytext) + "&size=250x250";
            } else if (mytext !== "" && mysize === "300") {
                myimg.src = api + encodeURIComponent(mytext) + "&size=300x300";
            } else {
                alert("Please enter text for the QR code");
            }
        }
