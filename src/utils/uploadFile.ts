export function uploadFile(callback: Function) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".txt, .pdf, .doc, .docx, .rtf, .html";
  input.addEventListener("change", function (e: Event) {
    const file = this.files && this.files[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = async (event: ProgressEvent<FileReader>) => {
      if (!event || !event.target) return;

      callback(file.name, event.target.result);

      // console.log(
      //   "File content:",
      //   event.target.result,
      //   "\n\ntext",
      //   await file.text()
      // );
    };
    fileReader.readAsText(file);
  });
  input.click();
}
