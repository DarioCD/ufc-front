
function formatDate(fecha) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const fechaDate = new Date(fecha);
  return fechaDate.toLocaleDateString("es-ES", options);
}

export default formatDate;