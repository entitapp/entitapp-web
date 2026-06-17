document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#access-request-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const modules = data.getAll("modules").join(", ") || "No especificat";

    const body = [
      "Sol·licitud d'ús d'Entitapp",
      "",
      `Nom de l'entitat: ${data.get("entityName") || ""}`,
      `Persona de contacte: ${data.get("contactName") || ""}`,
      `Correu: ${data.get("email") || ""}`,
      `Municipi o territori: ${data.get("location") || ""}`,
      `Tipus d'entitat: ${data.get("entityType") || ""}`,
      `Nombre aproximat de persones: ${data.get("peopleCount") || ""}`,
      `Mòduls d'interès: ${modules}`,
      "",
      "Necessitats principals:",
      data.get("needs") || ""
    ].join("\n");

    const subject = encodeURIComponent("Sol·licitud d'ús d'Entitapp");
    const mailBody = encodeURIComponent(body);
    window.location.href = `mailto:entitapp@gmail.com?subject=${subject}&body=${mailBody}`;
  });
});
