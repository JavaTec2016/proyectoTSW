export const ID_SPLIT = '@'
export function limpiar(id:string) {
  const form = new FormData(document.getElementById(id)! as HTMLFormElement);
  form.forEach((entry, key) => {
    let inp = document.getElementById(key)!;
    inp instanceof HTMLInputElement || inp instanceof HTMLSelectElement
      ? (inp.value = "")
      : -1;
  });
}
export function clearPrefix(data: { [x: string]: any }) {
    const cleared: { [x: string]: any } = {};
    
    for (const key in data) {
        const parts = key.split(ID_SPLIT)
        cleared[parts.pop()!] = data[key];
    }
    return cleared;
}

export function extraer(form:HTMLFormElement){
  return clearPrefix(Object.fromEntries(new FormData(form).entries()));
}

export function inputName(formId:string, inputId:string){
  return formId+ID_SPLIT+inputId;
}