 // JavaScript لغلق القائمة المنسدلة عند النقر خارجها
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content a')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                for (var i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.style.display === "block") {
                        openDropdown.style.display = "none";
                    }
                }
            }
        }

        // JavaScript لفتح وغلق القائمة المنسدلة
        document.querySelector('.dropbtn').addEventListener('click', function(event) {
            event.preventDefault();
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });