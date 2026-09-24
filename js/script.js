document.addEventListener("DOMContentLoaded", function () {

    console.log("BYD website loaded successfully.");

    // ========================================
    // DATABASE MODEL
    // ========================================

    const modelData = {

        "sealion-7": {
            name: "BYD Sealion 7",
            body: "SUV",
            range: "567 km",
            battery: "82.56 kWh",
            torque: "380 Nm"
        },

        "m6": {
            name: "BYD M6",
            body: "MPV",
            range: "420 km",
            battery: "71.8 kWh",
            torque: "310 Nm"
        },

        "atto-3": {
            name: "BYD Atto 3",
            body: "SUV",
            range: "410 km",
            battery: "49.92 kWh",
            torque: "310 Nm"
        },

        "dolphin": {
            name: "BYD Dolphin",
            body: "Hatchback",
            range: "410 km",
            battery: "44.9 kWh",
            torque: "180 Nm"
        },

        "seal": {
            name: "BYD Seal",
            body: "Sedan",
            range: "650 km",
            battery: "82.56 kWh",
            torque: "360 Nm"
        },

        "atto-1": {
            name: "BYD Atto 1",
            body: "Hatchback",
            range: "310 km",
            battery: "38.88 kWh",
            torque: "135 Nm"
        },

        "m6-dm": {
            name: "BYD M6 DM",
            body: "MPV",
            range: "92 km",
            battery: "18.3 kWh",
            torque: "300 Nm"
        },

        "denza-d9": {
            name: "Denza D9",
            body: "Luxury MPV",
            range: "600 km",
            battery: "103.36 kWh",
            torque: "360 Nm"
        }

    };

// ==============================
// COMPARE FUNCTION
// ==============================

const compareButton = document.getElementById("compare-button");

if (compareButton) {

    compareButton.addEventListener("click", function () {

        const model1 = document.getElementById("compare-model-1").value;
        const model2 = document.getElementById("compare-model-2").value;

        // Cek apakah kedua model sudah dipilih
        if (!model1 || !model2) {
            alert("Silakan pilih dua model terlebih dahulu.");
            return;
        }

        // Ambil data dari database
        const data1 = modelData[model1];
        const data2 = modelData[model2];

        // Cek apakah data tersedia
        if (!data1 || !data2) {
            alert("Data model belum tersedia.");
            return;
        }

        // Nama model
        document.getElementById("compare-name-1").textContent = data1.name;
        document.getElementById("compare-name-2").textContent = data2.name;

        // Body type
        document.getElementById("compare-body-1").textContent = data1.body;
        document.getElementById("compare-body-2").textContent = data2.body;

        // Range
        document.getElementById("compare-range-1").textContent = data1.range;
        document.getElementById("compare-range-2").textContent = data2.range;

        // Battery
        document.getElementById("compare-battery-1").textContent = data1.battery;
        document.getElementById("compare-battery-2").textContent = data2.battery;

        // Torque
        document.getElementById("compare-torque-1").textContent = data1.torque;
        document.getElementById("compare-torque-2").textContent = data2.torque;

    });

}

    // ========================================
    // MOBILE MENU
    // ========================================

    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.getElementById("main-navigation");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {

            // Membuka / menutup menu
            navigation.classList.toggle("active");

            // Mengubah icon hamburger
            menuToggle.classList.toggle("active");

            // Mengetahui status menu
            const isOpen = navigation.classList.contains("active");

            // Update accessibility
            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        // Menutup menu setelah link diklik

        const navigationLinks =
            navigation.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }

    // ========================================
    // MODEL FILTER
    // ========================================

    const filterButtons =
        document.querySelectorAll(".filter-button");

    const modelCards =
        document.querySelectorAll(".model-card");


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Ambil kategori yang dipilih
            const selectedFilter =
                button.getAttribute("data-filter");


            // Mengubah tombol aktif
            filterButtons.forEach(function (item) {

                item.classList.remove("active");

            });

            button.classList.add("active");


            // Menampilkan model
            modelCards.forEach(function (card) {

                const category =
                    card.getAttribute("data-category");


                if (
                    selectedFilter === "all" ||
                    category === selectedFilter
                ) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        });

    });

// ========================================
// WHATSAPP TEST DRIVE
// ========================================

const testDriveForm =
    document.getElementById("test-drive-form");

if (testDriveForm) {

    testDriveForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Ambil data dari form
        const name =
            document.getElementById("customer-name").value.trim();

        const phone =
            document.getElementById("customer-phone").value.trim();

        const model =
            document.getElementById("test-drive-model").value;

        const date =
            document.getElementById("test-drive-date").value;

        const time =
            document.getElementById("test-drive-time").value;

        const note =
            document.getElementById("customer-note").value.trim();


        // Nomor WhatsApp sales
        const whatsappNumber = "6282113725845";


        // Format tanggal
        const formattedDate =
            new Date(date + "T00:00:00").toLocaleDateString(
                "id-ID",
                {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                }
            );


        // Membuat pesan WhatsApp
        const message =
`Halo, saya ingin mengajukan test drive BYD.

Nama: ${name}
No. WhatsApp: ${phone}
Model: ${model}
Tanggal: ${formattedDate}
Waktu: ${time}

Catatan:
${note || "-"}

Mohon informasi mengenai konfirmasi jadwal test drive. Terima kasih.`;


        // Membuat URL WhatsApp
        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        // Membuka WhatsApp
        window.open(whatsappURL, "_blank");

    });

}
    
});