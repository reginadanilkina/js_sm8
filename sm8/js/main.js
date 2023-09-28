document.addEventListener("DOMContentLoaded", function () {
    const buttonItems = [
        {
            text: "Нажмите",
            event: "click",
            content: "Содержание нажмите кнопки"
        },
        {
            text: "Наведитея",
            event: "mouseover",
            content: "Содержание наведите кнопки"
        },
        {
            text: "Двойной клик",
            event: "dblclick",
            content: "Содержание двойного клика"
        },
        {
            text: "Отведите",
            event: "mouseout",
            content: "Содержание отведения курсора"
        }
    ];

    const accordionContainer = document.getElementById("accordion-container");

    buttonItems.forEach((item) => {
        const buttonElement = document.createElement("button");
        buttonElement.textContent = item.text;
        buttonElement.classList.add("button");

        const contentElement = document.createElement("div");
        contentElement.textContent = item.content;
        contentElement.classList.add("accordion-content");

        buttonElement.addEventListener(item.event, () => {
            if (contentElement.style.display === "none") {
                contentElement.style.display = "block";
            } else {
                contentElement.style.display = "none";
            }
        });

        accordionContainer.appendChild(buttonElement);
        accordionContainer.appendChild(contentElement);
    });
});