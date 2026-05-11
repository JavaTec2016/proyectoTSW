export function limpiar(id:string) {
  const form = new FormData(document.getElementById(id)! as HTMLFormElement);
  form.forEach((entry, key) => {
    let inp = document.getElementById(key)!;
    inp instanceof HTMLInputElement || inp instanceof HTMLSelectElement
      ? (inp.value = "")
      : -1;
  });
}
