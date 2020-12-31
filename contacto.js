const d=document;
export function ContactForm() {
   function contactFormValidation() {
        const $inputs = d.querySelectorAll(".contact-form [required]"),
            $form = d.querySelector(".contact-form");

        const validateText = (name) => {
            if (name === "name") return "El nombre tiene caracteres invalidos";
            else if (name === "email") return "El correo no es valido ";
            else if (name === "subject") return "El asunto no es valido ";
            else if (name === "comments") return "Caracteres permitidos max:255";
        };

        $inputs.forEach((input) => {
            const $span = d.createElement("span");
            $span.id = input.name;
            $span.textContent = `${validateText(input.name)}`;
            $span.classList.add("contact-form-error", "none");
            input.insertAdjacentElement("afterend", $span);
        });

        d.addEventListener("keyup", (e) => {
            if (e.target.matches(".contact-form [required]")) {
                let $input = e.target,
                    pattern = $input.pattern || $input.dataset.pattern;
                if (pattern && $input.value !== "") {
                    let regex = new RegExp(pattern);
                    return !regex.exec($input.value) ?
                        d.getElementById($input.name).classList.add("is-active") :
                        d.getElementById($input.name).classList.remove("is-active");
                }
                if (!pattern) {
                    return $input.value === "" ?
                        d.getElementById($input.name).classList.add("is-active") :
                        d.getElementById($input.name).classList.remove("is-active");
                }
                if ($input.value === "")
                    d.getElementById($input.name).classList.remove("is-active");
            }
        });

        d.addEventListener("submit", (e) => {
            if (e.target.matches(".contact-form")) {
                e.preventDefault();
                const $loader = d.querySelector(".contact-form-loader"),
                    $response = d.querySelector(".contact-form-response");
                $loader.classList.remove("none");
                fetch("https://formsubmit.co/ajax/eescobar055@gmail.com", {
                        method: "POST",
                        body: new FormData(e.target)
                    })
                    .then(res => res.ok ? res.json() : Promise.reject(res))
                    .then(json => {
                        $loader.classList.add("none");
                        $response.classList.remove("none");
                        $response.innerHTML = `<p>Su correo se envío correctamente...Gracias</p>`;
                        $form.reset();
                    })
                    .catch(err => {
                        console.error(err);
                        let message = err.statusText || "Ocurrio un error,  intente nuevamente";
                        $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`
                    })
                    .finally(() => setTimeout(() => {
                        $response.classList.add("none");
                        $response.innerHTML = "";
                    }, 4000));
            }
        });
    }
    setTimeout(() => {
        contactFormValidation();
    }, 100);
}