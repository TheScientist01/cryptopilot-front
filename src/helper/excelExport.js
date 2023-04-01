import * as XLSX from "xlsx";

export const excelExport = (data, type) => {
  const csvContent =
    "data:text/csv;charset=utf-8," +
    [
      Object.keys(data).join(","),
      ...data.index.map((value, index) =>
        Object.values(data)
          .map((arr) => arr[index])
          .join(",")
      ),
    ].join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `${type}.csv`);
  document.body.appendChild(link);
  link.click();
};

export const objectToArray = (object) => {
  let newArray = [];
  let tempObject = {};
  let keys;
  object.forEach((element, index) => {
    keys = Object.keys(data[index]);
    keys.forEach((key, j) => {
      tempObject = { ...tempObject, [key]: element[j].value };
    });
    newArray = [...newArray, tempObject];
  });
  return newArray;
};
