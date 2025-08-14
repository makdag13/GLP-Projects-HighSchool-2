const form = document.getElementById("contact");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const dataObj = {};

    formData.forEach((value, key) => {
        dataObj[key] = value;
    });


    const headers = Object.keys(dataObj).join(",");
    const values = Object.values(dataObj).map(v => `"${v.replace(/"/g, '""')}"`).join(",");
    const csvContent = headers + "\n" + values;

    console.log("CSV Verisi:\n" + csvContent);


    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "formData.csv";
    link.click();
});
