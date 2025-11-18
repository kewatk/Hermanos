//  js for loader

var Preloader = document.getElementById('loading');
    function myfunction(){
        Preloader.style.display = 'none';
        }

//   Send Form Data to Backend API
var Active = document.getElementById("Active");
var activeBtn = Active.getElementsByClassName("active-btn");
for (var i = 0; i < activeBtn.length; i++) {
    activeBtn[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += "active";
    });
}



document.getElementById("inputForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };

    const response = await fetch("http://localhost:3306/api/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log(result);
});

//   MySQL error logs

db.query(sql, [name, email, phone], (err, result) => {
    if (err) {
        console.log("SQL ERROR:", err);   // IMPORTANT
        return res.json({ message: "Error saving data" });
    }
    return res.json({ message: "Saved successfully" });
});

document.getElementById("enquiryForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        name: this.name.value,
        email: this.email.value,
        phone: this.phone.value,
        message: this.message.value
    };

    try {
        const res = await fetch("http://localhost:3000/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const data = await res.json();
        alert(data.message);
    } catch (err) {
        alert("Failed to send data.");
        console.error(err);
    }
});
